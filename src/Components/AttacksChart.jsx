import React, { Component } from "react";
import CanvasJSReact from '../canvasjs/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class AttacksChart extends Component {
    constructor() {
		super();
		this.toggleAttacksDataSeries = this.toggleAttacksDataSeries.bind(this);
	}

	toggleAttacksDataSeries(e) {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
        this.attacks_chart.render();
	}

    getNumAttacksDataPoints(date) {
		var dps = []
		var year = 2019
		var month = 1
		var day, value
		for (day = 1; day <= 30; day++) {
			value = Math.floor(Math.random() * 3);
			dps.push({x: new Date(year, month, day), y: value})
		}
		return dps;
	}

	getNumDeathsDataPoints(date) {
		var dps = []
		var year = 2019
		var month = 1
		var day, value
		for (day = 1; day <= 30; day++) {
			value = Math.floor(Math.random() * 3);
			dps.push({x: new Date(year, month, day), y: value})
		}
		return dps;
	}

	getNumWoundedDataPoints(date) {
		var dps = []
		var year = 2019
		var month = 1
		var day, value
		for (day = 1; day <= 30; day++) {
			value = Math.floor(Math.random() * 3);
			dps.push({x: new Date(year, month, day), y: value})
		}
		return dps;
	}
    
    render() {
        const attacks = {
			height: 200,
			exportEnabled: true,
			exportFileName: "Attacks_Graph",
			animationEnabled: true,
			zoomEnabled: true,
			theme: "light2",
			title: {
				text: "Terror Attacks",
				fontFamily: "Candara",
				fontWeight: "bold",
                fontSize: 20
			},
			axisY: {
				title: "Information",
				titleFontFamily: "Candara",
				titleFontWeight: "bold",
				includeZero: true
			},
			toolTip: {
				shared: true,
				fontFamily: "Candara"
			},
			legend: {
				fontFamily: "Candara",
				cursor: "pointer",
				itemclick: this.toggleAttacksDataSeries
			},
			data: [{
				type: "column",
				name: "Attacks",
				showInLegend: true,
				toolTipContent: "<strong>{x}</strong></br> Attacks: {y}",
				dataPoints: this.getNumAttacksDataPoints(2019)
			},
			{
				type: "column",
				name: "Deaths",
				showInLegend: true,
				toolTipContent: "Deaths: {y}",
				dataPoints: this.getNumDeathsDataPoints(2019)
			},
			{
				type: "column",
				name: "Wounded",
				showInLegend: true,
				toolTipContent: "Wounded: {y}",
				dataPoints: this.getNumWoundedDataPoints(2019)
			}]
		}

        return (
            <div>
                <CanvasJSChart
                    options = {attacks}
                    onRef={ref => this.attacks_chart = ref}
                />
            </div>
        );
    }
}

export default AttacksChart;
