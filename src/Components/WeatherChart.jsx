import React, { Component } from "react";
import CanvasJSReact from '../canvasjs/canvasjs.react';
import axios from "axios";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class WeatherChart extends Component {
    constructor() {
		super();
        this.state = {
            temperatureDataPoints: [],
            precipitationDataPoints: []
        };
		this.toggleWeatherDataSeries = this.toggleWeatherDataSeries.bind(this);
	}
    
    componentDidMount() {
        this.getDataPoints();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.startDate !== this.props.startDate) {
            this.getDataPoints();
        }
    }
    
    async getDataPoints() {
        let response = await axios.get("/Weather", {
            params: {
                startDate : this.props.startDate,
                endDate : this.props.endDate
            }
          });
        var temperatureDps = [], precipitationDps = [];
        response.data.map((weatherData) => {
            temperatureDps.push({ x: new Date(weatherData.date), y: [weatherData.min_temp, weatherData.max_temp] });
            precipitationDps.push({ x: new Date(weatherData.date), y: weatherData.perciption });
        })

        this.setState({
            temperatureDataPoints: temperatureDps,
            precipitationDataPoints: precipitationDps
        });
    }

	toggleWeatherDataSeries(e) {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
        this.weather_chart.render();
	}
    
    render() {
        const weather = {
			height: 200,
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
				itemclick: this.toggleWeatherDataSeries
			},
			data: [{
				type: "rangeColumn",
				name: "Temperature",
				showInLegend: true,
                xValueFormatString: "YYYY/MM/DD",
				toolTipContent: "<strong>{x}</strong></br> Max Temperature: {y[1]}°C<br/> Min Temperature: {y[0]}°C",
                dataPoints: this.state.temperatureDataPoints
			},
			{
				type: "line",
				name: "Precipitation",
				axisYType: "secondary",
				showInLegend: true,
				toolTipContent: "Precipitation: {y} cm",
                dataPoints: this.state.precipitationDataPoints
			}]
		}

        return (
            <div>
                <CanvasJSChart
                    options = {weather}
                    onRef={ref => this.weather_chart = ref}
                />
            </div>
        );
    }
}

export default WeatherChart;
