import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ClassificationModel extends Component {
	constructor() {
		super();
		this.updateCharts = this.updateCharts.bind(this);
		this.toggleWeatherDataSeries = this.toggleWeatherDataSeries.bind(this);
	}

	updateCharts(e) {
		alert("Date: " + e.dataPoint.x);
		this.weather_chart.options.data[0].dataPoints.push({ x: new Date("2019- 01- 01"), y: [19, 26] })
		this.weather_chart.render();
	}

	toggleWeatherDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		this.weather_chart.render();
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

	// Get temperature data of the 30 days before the selected date
	getTemperatureDataPoints(date) {
		var dps = [
			{ x: new Date("2017- 01- 01"), y: [19, 26] },
			{ x: new Date("2017- 02- 01"), y: [19, 26] },
			{ x: new Date("2017- 03- 01"), y: [18, 25] },
			{ x: new Date("2017- 04- 01"), y: [15, 23] },
			{ x: new Date("2017- 05- 01"), y: [12, 20] },
			{ x: new Date("2017- 06- 01"), y: [10, 18] },
			{ x: new Date("2017- 07- 01"), y: [8, 17] },
			{ x: new Date("2017- 08- 01"), y: [9, 18] },
			{ x: new Date("2017- 09- 01"), y: [12, 20] },
			{ x: new Date("2017- 10- 01"), y: [14, 22] },
			{ x: new Date("2017- 11- 01"), y: [16, 24] },
			{ x: new Date("2017- 12- 01"), y: [18, 26] },
			{ x: new Date("2018- 01- 01"), y: [19, 26] },
			{ x: new Date("2018- 02- 01"), y: [19, 26] },
			{ x: new Date("2018- 03- 01"), y: [18, 25] },
			{ x: new Date("2018- 04- 01"), y: [15, 23] },
			{ x: new Date("2018- 05- 01"), y: [12, 20] },
			{ x: new Date("2018- 06- 01"), y: [10, 18] },
			{ x: new Date("2018- 07- 01"), y: [8, 17] },
			{ x: new Date("2018- 08- 01"), y: [9, 18] },
			{ x: new Date("2018- 09- 01"), y: [12, 20] },
			{ x: new Date("2018- 10- 01"), y: [14, 22] },
			{ x: new Date("2018- 11- 01"), y: [16, 24] },
			{ x: new Date("2018- 12- 01"), y: [18, 26] }
		]
		return dps;
	}

	getPrecipitationDataPoints(date) {
		var dps = [
			{ x: new Date("2017- 01- 01"), y: 0 },
			{ x: new Date("2017- 02- 01"), y: 0 },
			{ x: new Date("2017- 03- 01"), y: 0 },
			{ x: new Date("2017- 04- 01"), y: 3.4 },
			{ x: new Date("2017- 05- 01"), y: 1 },
			{ x: new Date("2017- 06- 01"), y: 4 },
			{ x: new Date("2017- 07- 01"), y: 0 },
			{ x: new Date("2017- 08- 01"), y: 0 },
			{ x: new Date("2017- 09- 01"), y: 0 },
			{ x: new Date("2017- 10- 01"), y: 1.2 },
			{ x: new Date("2017- 11- 01"), y: 1.5 },
			{ x: new Date("2017- 12- 01"), y: 0 },
			{ x: new Date("2018- 01- 01"), y: 0 },
			{ x: new Date("2018- 02- 01"), y: 0 },
			{ x: new Date("2018- 03- 01"), y: 0 },
			{ x: new Date("2018- 04- 01"), y: 0 },
			{ x: new Date("2018- 05- 01"), y: 0 },
			{ x: new Date("2018- 06- 01"), y: 0 },
			{ x: new Date("2018- 07- 01"), y: 0 },
			{ x: new Date("2018- 08- 01"), y: 0 },
			{ x: new Date("2018- 09- 01"), y: 0 },
			{ x: new Date("2018- 10- 01"), y: 0 },
			{ x: new Date("2018- 11- 01"), y: 0 },
			{ x: new Date("2018- 12- 01"), y: 0 }
		]
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
			exportFileName: "ClassificationModelGraph",
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
		
		const weather = {
			height: 200,
			exportEnabled: true,
			exportFileName: "WeatherGraph",
			animationEnabled: true,
			zoomEnabled: true,
			theme: "light2",
			title: {
				text: "Weather",
				fontFamily: "Candara",
				fontWeight: "bold",
                fontSize: 20,
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
				itemclick: this.toggleWeatherDataSeries
			},
			data: [{
				type: "rangeColumn",
				name: "Temperature",
				showInLegend: true,
				indexLabel: "{y[#index]}°",
				xValueFormatString: "MMM YYYY",
				toolTipContent: "<strong>{x}</strong></br> Max Temperature: {y[1]}°C<br/> Min Temperature: {y[0]}°C",
				dataPoints: this.getTemperatureDataPoints(2019)
			},
			{
				type: "line",
				name: "Precipitation",
				axisYType: "secondary",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				toolTipContent: "Precipitation: {y} cm",
				dataPoints: this.getPrecipitationDataPoints(2019)
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
				xValueFormatString: "MMM YYYY",
				toolTipContent: "<strong>{x}</strong></br> Max: {y[1]}°C<br/> Min: {y[0]}°C",
				dataPoints: this.getTemperatureDataPoints(2019)
			}]
		}
        
		return (
		<div id = "classification_charts">
			<div id = "model_chart" style= {{display: 'inline-block', width: '92%', height: '100%', marginTop: '10px', marginBottom: '15px', marginLleft: 'auto', marginRight: 'auto', paddingTop: "5px", paddingBottom: "5px"}}>
				<CanvasJSChart options = {classification_model}
				onRef={ref => this.model_chart = ref}
				/>
			</div>
			<div id = "weather_chart" style= {{display: 'inline-block', width: '45%', height: '100%', paddingTop: '5px', paddingBottom: '5px', marginLleft: 'auto', marginRight: '15px', border: '1px solid black'}}>
				<CanvasJSChart options = {weather}
				onRef={ref => this.weather_chart = ref}
				/>
			</div>
			<div id = "holidays_chart" style= {{display: 'inline-block', width: '45%', height: '100%', paddingTop: '5px', paddingBottom: '5px', marginLleft: 'auto', marginRight: 'auto', border: '1px solid black'}}>
				<CanvasJSChart options = {holidays}
				onRef={ref => this.holidays_chart = ref}
				/>
			</div>



			<div id = "holidays_chart" style= {{display: 'inline-block', width: '45%', height: '100%', paddingTop: '5px', paddingBottom: '5px', marginLleft: 'auto', marginRight: '15px', border: '1px solid black'}}>
				<CanvasJSChart options = {holidays}
				onRef={ref => this.holidays_chart = ref}
				/>
			</div>
			<div id = "holidays_chart" style= {{display: 'inline-block', width: '45%', height: '100%', paddingTop: '5px', paddingBottom: '5px', marginLleft: 'auto', marginRight: 'auto', border: '1px solid black'}}>
				<CanvasJSChart options = {holidays}
				onRef={ref => this.holidays_chart = ref}
				/>
			</div>



		</div>
		);
    }
}

export default ClassificationModel;
