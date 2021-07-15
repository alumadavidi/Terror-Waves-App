import React, { Component } from 'react';
import ModelHeatmap from "../Components/ModelHeatmap";
import WeatherChart from '../Components/WeatherChart';
import AttacksChart from "../Components/AttacksChart";
import GoogleTrendsIsraelChart from '../Components/GoogleTrendsIsraelChart';
import GoogleTrendsPalestineChart from '../Components/GoogleTrendsPalestineChart';
import HolidaysChart from "../Components/HolidaysChart";


class ClassificationModel extends Component {
	constructor() {
		super();
		this.updateCharts = this.updateCharts.bind(this);
	}

	updateCharts(e) {
		alert("Date: " + e.dataPoint.x);
		this.weather_chart.options.data[0].dataPoints.push({ x: new Date("2019- 01- 31"), y: [19, 26] })

		this.attacks_chart.render();
		this.weather_chart.render();
		this.holidays_chart.render();
		this.google_trends_israel_chart.render();
		this.google_trends_palestine_chart.render();
	}


    render() {         
		return (
			<div id = "classification_charts">
				<div id = "model_heatmap" style= {{display: 'inline-block', background: 'white', width: '92%', height: '100%', marginTop: '10px', marginBottom: '15px', marginLleft: 'auto', marginRight: 'auto', paddingTop: '10px', paddingLeft: '5px', border: '1px solid black'}}>
					<div id = "model_header" style= {{fontFamily: 'Candara', fontWeight: 'bold', fontSize: 25, paddingBottom: '15px'}}>
						Classification Model
					</div>
					<ModelHeatmap />
				</div>
				<div id = "weather_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginLleft: 'auto', marginRight: '15px', border: '1px solid black'}}>
					<WeatherChart />
				</div>
				<div id = "attacks_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginLleft: 'auto', marginRight: 'auto', border: '1px solid black'}}>
					<AttacksChart />
				</div>
				<div id = "google_trends_israel_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginTop: '10px', marginLleft: 'auto', marginRight: '15px', border: '1px solid black'}}>
					<GoogleTrendsIsraelChart />
				</div>
				<div id = "google_trends_palestine_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginTop: '10px', marginLleft: 'auto', marginRight: 'auto', border: '1px solid black'}}>
					<GoogleTrendsPalestineChart />
				</div>

				<div id = "holidays_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginTop: '10px', marginLleft: 'auto', marginRight: '15px', border: '1px solid black'}}>
					<HolidaysChart />
				</div>
			</div>
		);
    }
}

export default ClassificationModel;
