import React, { Component } from "react";
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';
import axios from "axios";


class ElectionsHeatmap extends Component {
    constructor() {
        super();
        this.state = {
            startDate: new Date("2016/01/12"),
            endDate: new Date("2016/02/11"),
            //startDate: this.props.startDate,
            //endDate: this.props.endDate,
            dataPoints: []
        };
    }

    /*
    componentDidMount() {
        this.getDataPoints();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.startDate !== this.props.startDate) {
            this.getDataPoints();
        }
	}
    */

    async getDataPoints() {
        let response = await axios.get("/Elections", {
            params: {
                startDate : this.props.startDate,
                endDate : this.props.endDate
            }
          });
        var dps = [];
        response.data.map((electionsData) => {
			dps.push({ date: electionsData.date, count: electionsData.is_election });
        })

        this.setState({
            dataPoints: dps
        });
    }

    
    getElectionsDataPoints() {
        var startDate = this.props.startDate;
		var endDate = this.props.endDate;
        
        var dps = [
            { date: '2016/02/02', count: 1 },
            ];
        return dps;
	}
    
    
    render() {
        return (
            <div>
                <HeatMap
                    value = {this.getElectionsDataPoints()}
                    //value = {this.state.dataPoints}
                    rectSize = {16}
                    width = {140}
                    panelColors= {{
                        0: '#cce8e6',
                        1: '#009688'
                      }}
                    legendCellSize = {0}
                    startDate = {this.state.startDate}
                    //startDate = {this.props.startDate}
                    endDate = {this.state.endDate}
                    //endDate = {this.props.endDate}
                    rectRender = {(props, data) => {
                        return (                           
                            <Tooltip
                                key={props.key}
                                placement="top"
                                content={<span>Date: {data.date}<br></br>Elections: {data.count === 1 ? 'V' : 'X'}</span>}>
                                <rect {...props}/>
                            </Tooltip>                            
                        );
                    }}
                    onRef={ref => this.elections_heatmap = ref}
                />
            </div>
        );
    }
}

export default ElectionsHeatmap;
