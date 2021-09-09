import React, { Component } from "react";
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';
import axios from "axios";


class ElectionsHeatmap extends Component {
    constructor() {
        super();
        this.state = {
            dataPoints: [],
            success: false
        };
    }
   
    componentDidMount() {
        this.getDataPoints();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.startDate !== this.props.startDate || this.state.success === false) {
            this.getDataPoints();
        }
	}
    
    async getDataPoints() {
        try {
            let response = await axios.get("/Elections", {
                params: {
                    startDate : this.props.startDate,
                    endDate : this.props.endDate
                }
            });
            var dps = [];
            response.data.map((electionsData) => {
                var date = new Date(electionsData.date)
                date.setDate(date.getDate());
                var formattedDate = date.toISOString().slice(0, 10);
                dps.push({ date: formattedDate, count: 1 });
            })

            this.setState({
                dataPoints: dps,
                success: true
            });
        } catch (err) {
			this.setState({
				success: false
			});
		}
    }   
    
    render() {
        return (
            <div>
                <HeatMap
                    value = {this.state.dataPoints}
                    rectSize = {16}
                    width = {140}
                    panelColors = {{
                        0: '#cce8e6',
                        1: '#009688'
                    }}
                    legendCellSize = {0}
                    startDate = {new Date(this.props.startDate)}
                    endDate = {new Date(this.props.endDate)}
                    rectRender = {(props, data) => {
                        if (new Date(this.props.startDate).setHours(0,0,0,0) <= new Date(data.date).setHours(0,0,0,0)) {
                            return (                           
                                <Tooltip
                                    key={props.key}
                                    placement="top"
                                    content={<span><b>Date:</b> {data.date}<br></br><b>Elections:</b> {data.count === 1 ? 'V' : 'X'}</span>}>
                                    <rect {...props}/>
                                </Tooltip>                            
                            );
                        } else {
                            return (
                                <Tooltip
                                    key={props.key}
                                    placement="top"
                                    content={<span>Irrelevant date</span>}>
                                    <rect {...props}/>
                                </Tooltip>                            
                            );
                        }
                    }}
                    onRef={ref => this.elections_heatmap = ref}
                />
            </div>
        );
    }
}

export default ElectionsHeatmap;
