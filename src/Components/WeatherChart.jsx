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
    
    /*
    // Get temperature data of the 30 days before the selected date
    getTemperatureDataPoints() {
        var startDate = this.props.startDate;
		var endDate = this.props.endDate;

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

    getPrecipitationDataPoints() {
        var startDate = this.props.startDate;
		var endDate = this.props.endDate;
        
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
    */
    
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
				//dataPoints: this.getTemperatureDataPoints()
                dataPoints: this.state.temperatureDataPoints
			},
			{
				type: "line",
				name: "Precipitation",
				axisYType: "secondary",
				showInLegend: true,
				toolTipContent: "Precipitation: {y} cm",
				//dataPoints: this.getPrecipitationDataPoints()
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
