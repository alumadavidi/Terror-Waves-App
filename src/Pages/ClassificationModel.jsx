import React, { Component } from 'react';
import ModelHeatmap from "../Components/ModelHeatmap";
import WeatherChart from '../Components/WeatherChart';
import AttacksChart from "../Components/AttacksChart";
import GoogleTrendsIsraelChart from '../Components/GoogleTrendsIsraelChart';
import GoogleTrendsPalestineChart from '../Components/GoogleTrendsPalestineChart';
import HolidaysHeatmap from '../Components/HolidaysHeatmap';
import ElectionsHeatmap from '../Components/ElectionsHeatmap';


class ClassificationModel extends Component {
	constructor() {
		super();
		this.state = {
			date: new Date(("2019- 01- 01"))
		}
		this.updateCharts = this.updateCharts.bind(this);
	}

	updateCharts(selectedDate) {
		alert("Model Page\nDate: " + selectedDate);	
		this.setState({
			date: selectedDate
		});
		//alert("Page\nDate: " + this.state.date);
		

		/*
		this.weather_chart.render();
		this.attacks_chart.render();
		this.google_trends_israel_chart.render();
		this.google_trends_palestine_chart.render();
		this.holidays_chart.render();
		*/
	}


    render() {         
		return (
			<div id = "classification_charts">
				<div id = "model_heatmap" style= {{fontFamily: 'Candara', fontWeight: 'bold', display: 'inline-block', background: 'white', width: '92%', height: '100%', marginTop: '10px', marginBottom: '15px', marginLleft: 'auto', marginRight: 'auto', paddingTop: '10px', paddingLeft: '5px', border: '1px solid black'}}>
					<div id = "model_header" style= {{fontSize: 25, paddingBottom: '15px'}}>
						Classification Model
					</div>
					<ModelHeatmap
						updateCharts = {this.updateCharts}
					/>
				</div>
				<div id = "weather_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginLleft: 'auto', marginRight: '15px', border: '1px solid black'}}>
					<WeatherChart
						date = {this.state.date}
					/>
				</div>
				<div id = "attacks_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginLleft: 'auto', marginRight: 'auto', border: '1px solid black'}}>
					<AttacksChart 
						date = {this.state.date}
					/>
				</div>
				<div id = "google_trends_israel_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginTop: '10px', marginLleft: 'auto', marginRight: '15px', border: '1px solid black'}}>
					<GoogleTrendsIsraelChart
						date = {this.state.date}
					/>
				</div>
				<div id = "google_trends_palestine_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginTop: '10px', marginLleft: 'auto', marginRight: 'auto', border: '1px solid black'}}>
					<GoogleTrendsPalestineChart
						date = {this.state.date}
					/>
				</div>
				<div id = "special_days_heatmaps" style= {{display: 'inline-block', background: 'white', width: '45%', height: '100%', marginTop: '10px', marginLleft: 'auto', marginRight: 'auto', paddingLeft: '5px', marginBottom: '20px', border: '1px solid black'}}>
					<div id = "special_days_header" style= {{fontFamily: 'Candara', fontWeight: 'bold', fontSize: 20, paddingBottom: '5px'}}>
						Special Days
					</div>
					<div id = "holidays_heatmap" style= {{float: 'left', fontFamily: 'Candara', fontWeight: 'bold', fontSize: 16, paddingBottom: '5px', paddingLeft: '30px', marginRight: '100px'}}>
						Holidays
						<HolidaysHeatmap
							date = {this.state.date}
						/>
					</div>
					<div id = "elections_heatmap" style= {{float: 'left', fontFamily: 'Candara', fontWeight: 'bold', fontSize: 16, paddingBottom: '5px'}}>
						Elections
						<ElectionsHeatmap
							date = {this.state.date}
						/>
					</div>
				</div>				
			</div>
		);
    }
}

export default ClassificationModel;
