import React, { Component } from "react";
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';


class HolidaysHeatmap extends Component {
    constructor() {
        super();
        this.state = {
            startDate: new Date("2016/01/12"),
            endDate: new Date("2016/02/11")
        };
      }

    getHolidaysDataPoints() {
        var date = this.props.date;
        
        var dps = [
            { date: '2016/01/15', count: 1 },
            { date: '2016/01/16', count: 1 },
            { date: '2016/01/17', count: 2 },
            { date: '2016/02/01', count: 4 },
            { date: '2016/02/02', count: 3 },
            { date: '2016/02/10', count: 1 },
            ];
        return dps;
	}
    
    render() {
        return (
            <div>
                <HeatMap
                    value = {this.getHolidaysDataPoints()}
                    rectSize = {16}
                    width = {140}
                    panelColors= {{
                        0: '#e6d0ea',
                        1: '#974ca4'
                      }}
                    legendCellSize = {0}
                    startDate = {this.state.startDate}
                    endDate = {this.state.endDate}
                    rectRender = {(props, data) => {
                        return (                           
                            <Tooltip
                                key={props.key}
                                placement="top"
                                content={<span>Date: {data.date}<br></br>Holidays: {data.count >= 1 ? 'V' : 'X'}</span>}>
                                <rect {...props}/>
                            </Tooltip>                            
                        );
                    }}
                    onRef={ref => this.holidays_heatmap = ref}
                />
            </div>
        );
    }
}

export default HolidaysHeatmap;
