import React, { Component } from "react";
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';
import axios from "axios";


class ModelHeatmap extends Component {
    constructor() {
        super();
        this.state = {
            dataPoints: []
        };
    }

    componentDidMount() {
        this.getDataPoints();
    }

    async getDataPoints() {
        let response = await axios.get("/ModelPredictions");
        var dps = [];
        response.data.map((modelData) => {
            dps.push({ date: new Date(modelData.date), count: 1 });
        })
        this.setState({
            dataPoints: dps
        });
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
                                alert("Heatmap\nDate: " + data.date);
                                alert("Heatmap\nYear: " + this.props.year);
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
