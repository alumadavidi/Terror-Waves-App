import React, { Component } from "react";
import CanvasJSReact from '../canvasjs/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class HolidaysChart extends Component {
    constructor() {
		super();
		this.toggleHolidaysDataSeries = this.toggleHolidaysDataSeries.bind(this);
	}

	toggleHolidaysDataSeries(e) {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
        this.holidays_chart.render();
	}

    getHolidaysDataPoints(date) {
		var dps = [
			{ x: new Date("2019- 01- 01"), y: [19, 26] },
			{ x: new Date("2019- 01- 02"), y: [19, 26] },
			{ x: new Date("2019- 01- 03"), y: [18, 25] },
			{ x: new Date("2019- 01- 04"), y: [15, 23] },
			{ x: new Date("2019- 01- 05"), y: [12, 20] },
			{ x: new Date("2019- 01- 06"), y: [10, 18] },
			{ x: new Date("2019- 01- 07"), y: [8, 17] },
			{ x: new Date("2019- 01- 08"), y: [9, 18] },
			{ x: new Date("2019- 01- 09"), y: [12, 20] },
			{ x: new Date("2019- 01- 10"), y: [14, 22] },
			{ x: new Date("2019- 01- 11"), y: [16, 24] },
			{ x: new Date("2019- 01- 12"), y: [18, 26] },
			{ x: new Date("2019- 01- 13"), y: [19, 26] },
			{ x: new Date("2019- 01- 14"), y: [19, 26] },
			{ x: new Date("2019- 01- 15"), y: [18, 25] },
			{ x: new Date("2019- 01- 16"), y: [15, 23] },
			{ x: new Date("2019- 01- 17"), y: [12, 20] },
			{ x: new Date("2019- 01- 18"), y: [10, 18] },
			{ x: new Date("2019- 01- 19"), y: [8, 17] },
			{ x: new Date("2019- 01- 20"), y: [9, 18] },
			{ x: new Date("2019- 01- 21"), y: [12, 20] },
			{ x: new Date("2019- 01- 22"), y: [14, 22] },
			{ x: new Date("2019- 01- 23"), y: [16, 24] },
			{ x: new Date("2019- 01- 24"), y: [18, 26] },
			{ x: new Date("2019- 01- 25"), y: [18, 27] },
			{ x: new Date("2019- 01- 26"), y: [14, 22] },
			{ x: new Date("2019- 01- 27"), y: [13, 23] },
			{ x: new Date("2019- 01- 28"), y: [18, 26] },
			{ x: new Date("2019- 01- 29"), y: [18, 27] },
			{ x: new Date("2019- 01- 30"), y: [20, 29] }
		]
		return dps;
	}
    
    render() {
        const holidays = {
			height: 200,
			exportEnabled: true,
			exportFileName: "HolidaysGraph",
			animationEnabled: true,
			zoomEnabled: true,
			theme: "light2",
			title: {
				text: "Holidays",
				fontFamily: "Candara",
                fontSize: 20,
			},
			axisY: {
				title: "Temperature (°C)",
				fontFamily: "Candara",
				includeZero: true,
				suffix: "°C"
			},
			toolTip: {
				fontFamily: "Candara"
			},
			data: [{
				type: "rangeColumn",
				indexLabel: "{y[#index]}°",
				toolTipContent: "<strong>{x}</strong></br> Max: {y[1]}°C<br/> Min: {y[0]}°C",
				dataPoints: this.getHolidaysDataPoints(2019)
			}]
		}

        return (
            <div>
                <CanvasJSChart
                    options = {holidays}
                    onRef={ref => this.holidays_chart = ref}
                />
            </div>
        );
    }
}

export default HolidaysChart;
