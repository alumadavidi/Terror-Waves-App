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

    /*
    // Replace "getModelDataPoints()" with "componentDidMount()"
    componentDidMount() {
        this.getDataPoints();
    }
    */
    

    /*
    // Remove
    componentDidUpdate(prevProps) {
        // only update chart if the data has changed
        if (prevProps.year !== this.props.year) {
            this.getDataPoints();
        }
    }
    */

    async getDataPoints() {
        let response = await axios.get("/Anomalies"); // Change to "/Model"
        var dps = [];
        response.data.map((modelData) => {
            //if (new Date(modelData.date).getFullYear() === this.props.year && new Date(modelData.date).getMonth() === 1) {
                dps.push({ date: new Date(modelData.date), count: 1 });
            //}
        })
        this.setState({
            dataPoints: dps
        });
    }
    
    // Replace "getModelDataPoints()" with "componentDidMount()"
    getModelDataPoints() {
        var year = this.props.year;

        var dps = [
            { date: '2019/01/01', count: 1 },
            { date: '2019/01/11', count: 1 },
            ...[...Array(17)].map((_, idx) => ({ date: `2019/01/${idx + 10}`, count: 1, })),
            ...[...Array(17)].map((_, idx) => ({ date: `2019/02/${idx + 10}`, count: 1, })),
            { date: '2019/04/12', count: 1 },
            { date: '2019/05/01', count: 1 },
            { date: '2019/05/02', count: 1 },
            { date: '2019/05/03', count: 1 },
            { date: '2019/05/04', count: 1 },
            { date: '2019/05/08', count: 1 },
            { date: '2019/12/31', count: 1 }
            ];
        return dps;
    }
    
    
    render() {
        /*
        if (this.state.dataPoints.length > 0) {
            alert(this.state.dataPoints.length)
        }
        */

        return (
            <div>
                <HeatMap
                    value = {this.getModelDataPoints()}
                    //value = {this.state.dataPoints}
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
