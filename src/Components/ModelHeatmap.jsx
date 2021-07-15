import React, { Component } from "react";
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';


class ModelHeatmap extends Component {
    constructor() {
        super();
        this.state = {
            startDate: new Date("2016- 01- 01"),
            endDate: new Date("2016- 12- 31")
        };
      }

    getModelDataPoints(year) {
        var dps = [
            { date: '2016/01/01', count: 1 },
            { date: '2016/01/11', count: 1 },
            ...[...Array(17)].map((_, idx) => ({ date: `2016/01/${idx + 10}`, count: 1, })),
            ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: 1, })),
            { date: '2016/04/12', count: 1 },
            { date: '2016/05/01', count: 1 },
            { date: '2016/05/02', count: 1 },
            { date: '2016/05/03', count: 1 },
            { date: '2016/05/04', count: 1 },
            { date: '2016/05/08', count: 1 },
            { date: '2016/12/31', count: 1 }
            ];
        return dps;
	}
    
    render() {
        return (
            <div>
                <HeatMap
                    value = {this.getModelDataPoints(2016)}
                    rectSize = {14}
                    width = {890}
                    panelColors= {{
                        0: '#c5cae9',
                        1: '#303f9f'
                      }}
                    legendCellSize = {0}
                    startDate = {this.state.startDate}
                    endDate = {this.state.endDate}
                    rectRender = {(props, data) => {
                        return (
                        <Tooltip key={props.key} placement="top" content={<span>Date: {data.date}<br></br>Prediction: {data.count === 1 ? 'V' : 'X'}</span>}>
                            <rect {...props} onClick={() => {
                                alert("Date: " + data.date);
                            }} />
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
