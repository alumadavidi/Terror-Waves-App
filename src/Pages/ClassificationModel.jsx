import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs/canvasjs.react';
import ModelHeatmap from "../Components/ModelHeatmap";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ClassificationModel extends Component {
	constructor() {
		super();
		this.updateCharts = this.updateCharts.bind(this);
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}

	updateCharts(e) {
		alert("Date: " + e.dataPoint.x);
		this.weather_chart.options.data[0].dataPoints.push({ x: new Date("2019- 01- 01"), y: [19, 26] })

		this.attacks_chart.render();
		this.weather_chart.render();
		this.holidays_chart.render();
		this.google_trends_israel_chart.render();
		this.google_trends_palestine_chart.render();
	}

	toggleDataSeries(e) {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}

		if (e.chart.title.text === "Terror Attacks") {
			this.attacks_chart.render();
		}
		else if (e.chart.title.text === "Weather") {
			this.weather_chart.render();
		}
		else if (e.chart.title.text === "Google Trends - Israel") {
			this.google_trends_israel_chart.render();
		}
		else if (e.chart.title.text === "Google Trends - Palestine") {
			this.google_trends_palestine_chart.render();
		}
	}

	getModelDataPoints(year) {
		var dps = []
		var year = 2019
		var month, day
		for (month = 1; month <= 12; month++) {
			for (day = 1; day <= 30; day++) {
				dps.push({x: new Date(year, month, day), y: day})
			}
		}
		return dps;
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

	// Get temperature data of the 30 days before the selected date
	getTemperatureDataPoints(date) {
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

	getPrecipitationDataPoints(date) {
		var dps = [
			{ x: new Date("2019- 01- 01"), y: 0},
			{ x: new Date("2019- 01- 02"), y: 0 },
			{ x: new Date("2019- 01- 03"), y: 0 },
			{ x: new Date("2019- 01- 04"), y: 1.2 },
			{ x: new Date("2019- 01- 05"), y: 0},
			{ x: new Date("2019- 01- 06"), y: 0 },
			{ x: new Date("2019- 01- 07"), y: 3 },
			{ x: new Date("2019- 01- 08"), y: 4.5 },
			{ x: new Date("2019- 01- 09"), y: 3 },
			{ x: new Date("2019- 01- 10"), y: 0 },
			{ x: new Date("2019- 01- 11"), y: 0 },
			{ x: new Date("2019- 01- 12"), y: 0 },
			{ x: new Date("2019- 01- 13"), y: 0 },
			{ x: new Date("2019- 01- 14"), y: 0 },
			{ x: new Date("2019- 01- 15"), y: 0 },
			{ x: new Date("2019- 01- 16"), y: 0.9 },
			{ x: new Date("2019- 01- 17"), y: 1.2 },
			{ x: new Date("2019- 01- 18"), y: 0 },
			{ x: new Date("2019- 01- 19"), y: 0 },
			{ x: new Date("2019- 01- 20"), y: 0 },
			{ x: new Date("2019- 01- 21"), y: 0 },
			{ x: new Date("2019- 01- 22"), y: 0 },
			{ x: new Date("2019- 01- 23"), y: 0 },
			{ x: new Date("2019- 01- 24"), y: 0 },
			{ x: new Date("2019- 01- 25"), y: 5.4 },
			{ x: new Date("2019- 01- 26"), y: 4.8 },
			{ x: new Date("2019- 01- 27"), y: 3.3 },
			{ x: new Date("2019- 01- 28"), y: 0 },
			{ x: new Date("2019- 01- 29"), y: 0 },
			{ x: new Date("2019- 01- 30"), y: 0 }
		]
		return dps;
	}

	getGoogleTrendsDataPoints(date, country) {
		if (country === "Israel") {

		} else {

		}

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

	getHolidaysDataPoints(date) {
		var dps = []
		return dps;
	}

    render() { 
        const classification_model = {
			height: 350,
			animationEnabled: true,
			exportEnabled: true,
			exportFileName: "Classification_Model_Graph",
			zoomEnabled: true,
			theme: "light2",
			title: {
				text: "Classification Model",
				fontFamily: "Candara",
                fontSize: 30,
                fontWeight: "bold"
			},
			axisY: {
				title: "Prediction",
				fontFamily: "Candara"
			},
			data: [{
				type: "line",
				toolTipContent: "Date: {x}</br> Value: {y}",
				dataPoints: this.getModelDataPoints(2019),
				click: this.updateCharts
			}]
		}

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
				itemclick: this.toggleDataSeries
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
		
		const weather = {
			height: 200,
			exportEnabled: true,
			exportFileName: "Weather_Graph",
			animationEnabled: true,
			zoomEnabled: true,
			theme: "light2",
			title: {
				text: "Weather",
				fontFamily: "Candara",
				fontWeight: "bold",
                fontSize: 20
			},
			axisY: {
				title: "Temperature (°C)",
				titleFontFamily: "Candara",
				titleFontWeight: "bold",
				titleFontColor: "#6D78AD",
				lineColor: "#6D78AD",
				labelFontColor: "#6D78AD",
				tickColor: "#6D78AD",
				includeZero: true,
				suffix: "°C"
			},
			axisY2: {
				title: "Precipitation (cm)",
				titleFontFamily: "Candara",
				titleFontWeight: "bold",
				titleFontColor: "#51CDA0",
				lineColor: "#51CDA0",
				labelFontColor: "#51CDA0",
				tickColor: "#51CDA0",
				includeZero: true,
				suffix: " cm"
			},
			toolTip: {
				shared: true,
				fontFamily: "Candara"
			},
			legend: {
				fontFamily: "Candara",
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "rangeColumn",
				name: "Temperature",
				showInLegend: true,
				indexLabel: "{y[#index]}°",
				toolTipContent: "<strong>{x}</strong></br> Max Temperature: {y[1]}°C<br/> Min Temperature: {y[0]}°C",
				dataPoints: this.getTemperatureDataPoints(2019)
			},
			{
				type: "line",
				name: "Precipitation",
				axisYType: "secondary",
				showInLegend: true,
				toolTipContent: "Precipitation: {y} cm",
				dataPoints: this.getPrecipitationDataPoints(2019)
			}]
		}

		const googleTrendsIsrael = {
			height: 200,
			exportEnabled: true,
			exportFileName: "Google_Trends_Israel_Graph",
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
				itemclick: this.toggleDataSeries
			},
			data: [
			{
				type: "line",
				name: "شهادة",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsDataPoints(2019, "Israel")
			},
			{
				type: "line",
				name: "استشهاد",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsDataPoints(2019, "Israel")
			},
			{
				type: "line",
				name: "شهيد",
				visible: true,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsDataPoints(2019, "Israel")
			},
			{
				type: "line",
				name: "جهاد",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsDataPoints(2019, "Israel")
			},
			{
				type: "line",
				name: "كافر",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsDataPoints(2019, "Israel")
			}]
		}

		const googleTrendsPalestine = {
			height: 200,
			exportEnabled: true,
			exportFileName: "GoogleTrendsPalestineGraph",
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
				itemclick: this.toggleDataSeries
			},
			data: [
			{
				type: "line",
				name: "شهادة",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsDataPoints(2019, "Palestine")
			},
			{
				type: "line",
				name: "استشهاد",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsDataPoints(2019, "Palestine")
			},
			{
				type: "line",
				name: "شهيد",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsDataPoints(2019, "Palestine")
			},
			{
				type: "line",
				name: "جهاد",
				visible: false,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsDataPoints(2019, "Palestine")
			},
			{
				type: "line",
				name: "كافر",
				visible: true,
				showInLegend: true,
				dataPoints: this.getGoogleTrendsDataPoints(2019, "Palestine")
			}]
		}

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
				dataPoints: this.getTemperatureDataPoints(2019)
			}]
		}
        
		return (
			<div id = "classification_charts">
				<div id = "model_heatmap" style= {{display: 'inline-block', background: 'white', width: '92%', height: '100%', marginTop: '10px', marginBottom: '15px', marginLleft: 'auto', marginRight: 'auto', paddingTop: '10px', paddingLeft: '5px', border: '1px solid black'}}>
					<div id = "model_header" style= {{fontFamily: 'Candara', fontWeight: 'bold', fontSize: 25, paddingBottom: '15px'}}>
						Classification Model
					</div>
					<ModelHeatmap
					onRef={ref => this.model_heatmap = ref}
					/>
				</div>
				<div id = "weather_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginLleft: 'auto', marginRight: '15px', border: '1px solid black'}}>
					<CanvasJSChart options = {weather}
					onRef={ref => this.weather_chart = ref}
					/>
				</div>
				<div id = "attacks_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginLleft: 'auto', marginRight: 'auto', border: '1px solid black'}}>
					<CanvasJSChart options = {attacks}
					onRef={ref => this.attacks_chart = ref}
					/>
				</div>
				<div id = "google_trends_israel_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginTop: '10px', marginLleft: 'auto', marginRight: '15px', border: '1px solid black'}}>
					<CanvasJSChart options = {googleTrendsIsrael}
					onRef={ref => this.google_trends_israel_chart = ref}
					/>
				</div>
				<div id = "google_trends_palestine_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginTop: '10px', marginLleft: 'auto', marginRight: 'auto', border: '1px solid black'}}>
					<CanvasJSChart options = {googleTrendsPalestine}
					onRef={ref => this.google_trends_palestine_chart = ref}
					/>
				</div>


				<div id = "holidays_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginTop: '10px', marginLleft: 'auto', marginRight: '15px', border: '1px solid black'}}>
					<CanvasJSChart options = {holidays}
					onRef={ref => this.holidays_chart = ref}
					/>
				</div>
			</div>
		);
    }
}

export default ClassificationModel;
