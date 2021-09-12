import React, { Component } from "react";
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';
import axios from "axios";


class ModelHeatmap extends Component {
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

    componentDidUpdate() {
        if (this.state.success === false) {
            this.getDataPoints();
        }
    }

    async getDataPoints() {
        try {
            let response = await axios.get("/AllPredictions");
            var dps = [];
            response.data.map((modelData) => {
                dps.push({ date: new Date(modelData.date), count: 1 });
            })
            this.setState({
                dataPoints: dps,
                success: true
            });
        } catch (err) {
			if (err.message.includes('404') || err.message.includes('500')) {
				this.props.setSuccess(false);
			} else {				
				this.setState({
					success: false
				});
			}
        }
    }
    
    render() {
        return (
            <div>
                <HeatMap
                    value = {this.state.dataPoints}
                    rectSize = {14}
                    width = {900}
                    panelColors= {{
                        0: '#c5cae9',
                        1: '#303f9f'
                      }}
                    legendCellSize = {0}
                    startDate = {new Date(this.props.year + "/01/01")}
                    endDate = {new Date(this.props.year + 1 + "/01/15")}
                    rectRender = {(props, data) => {
                        return (
                        <Tooltip
                            key={props.key}
                            placement="top"
                            content={<span>Date: {data.date}<br></br>Prediction: {data.count === 1 ? 'V' : 'X'}</span>}>
                            <rect {...props} onClick={() => {
                                this.props.updateCharts(data.date)
                                }}
                            />
                        </Tooltip>
                        );
                    }}
                    onRef={ref => this.model_heatmap = ref}
                />
            </div>
        );
    }
}

export default ModelHeatmap;
