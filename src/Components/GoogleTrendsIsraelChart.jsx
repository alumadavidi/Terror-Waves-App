import React, { Component } from "react";
import CanvasJSReact from '../canvasjs/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class GoogleTrendsIsraelChart extends Component {
    constructor() {
		super();
		this.toggleGoogleIsraelDataSeries = this.toggleGoogleIsraelDataSeries.bind(this);
	}

	toggleGoogleIsraelDataSeries(e) {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
        this.google_trends_israel_chart.render();
	}

	getGoogleTrendsIsraelDataPoints(word) {
		var date = this.props.date;

		var dps = []
		var year = 2019
		var month = 1
		var day, value
		for (day = 1; day <= 30; day++) {
			value = Math.floor(Math.random() * 100);
			dps.push({x: new Date(year, month, day), y: value})
		}
		return dps;
	}
    
    render() {
        const googleTrendsIsrael = {
			height: 200,
			//exportEnabled: true,
			//exportFileName: "Google_Trends_Israel_Graph",
			animationEnabled: true,
			zoomEnabled: true,
			theme: "light2",
			title: {
				text: "Google Trends - Israel",
				fontFamily: "Candara",
				fontWeight: "bold",
                fontSize: 20
			},
			axisY: {
				title: "Value",
				titleFontFamily: "Candara",
				titleFontWeight: "bold",
				includeZero: true
			},
			toolTip: {
				shared: false,
				fontFamily: "Candara",
				content: "<strong>{x}</strong></br> Word: {name}</br> Value: {y}"
			},
			legend: {
				fontFamily: "Candara",
				fontSize: 12,
				horizontalAlign: "center",
       			verticalAlign: "top",
				cursor: "pointer",
				itemclick: this.toggleGoogleIsraelDataSeries
			},
			data: [
			{
				type: "line",
				name: "شهادة",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsIsraelDataPoints("شهادة")
			},
			{
				type: "line",
				name: "استشهاد",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsIsraelDataPoints("استشهاد")
			},
			{
				type: "line",
				name: "شهيد",
				visible: true,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsIsraelDataPoints("شهيد")
			},
			{
				type: "line",
				name: "جهاد",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsIsraelDataPoints("جهاد")
			},
			{
				type: "line",
				name: "كافر",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsIsraelDataPoints("كافر")
			}]
		}


        return (
			<div>
				<CanvasJSChart
					options = {googleTrendsIsrael}
					onRef={ref => this.google_trends_israel_chart = ref}
				/>
			</div>
        );
    }
}

export default GoogleTrendsIsraelChart;
