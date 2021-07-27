import React, { Component } from "react";
import CanvasJSReact from '../canvasjs/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class GoogleTrendsPalestineChart extends Component {
    constructor() {
		super();
		this.toggleGooglePalestineDataSeries = this.toggleGooglePalestineDataSeries.bind(this);
	}

	toggleGooglePalestineDataSeries(e) {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
        this.google_trends_palestine_chart.render();
	}

	getGoogleTrendsPalestineDataPoints(word) {
		var startDate = this.props.startDate;
		var endDate = this.props.endDate;

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
		const googleTrendsPalestine = {
			height: 200,
			//exportEnabled: true,
			//exportFileName: "GoogleTrendsPalestineGraph",
			animationEnabled: true,
			zoomEnabled: true,
			theme: "light2",
			title: {
				text: "Google Trends - Palestine",
				fontFamily: "Candara",
				fontWeight: "bold",
                fontSize: 20,
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
				itemclick: this.toggleGooglePalestineDataSeries
			},
			data: [
			{
				type: "line",
				name: "شهادة",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsPalestineDataPoints("شهادة")
			},
			{
				type: "line",
				name: "استشهاد",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsPalestineDataPoints("استشهاد")
			},
			{
				type: "line",
				name: "شهيد",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsPalestineDataPoints("شهيد")
			},
			{
				type: "line",
				name: "جهاد",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsPalestineDataPoints("جهاد")
			},
			{
				type: "line",
				name: "كافر",
				visible: true,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsPalestineDataPoints("كافر")
			}]
		}


        return (
			<div>
				<CanvasJSChart
					options = {googleTrendsPalestine}
					onRef={ref => this.google_trends_palestine_chart = ref}
				/>
			</div>
        );
    }
}

export default GoogleTrendsPalestineChart;
