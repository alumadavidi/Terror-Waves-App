import React, { Component } from 'react';
import ModelHeatmap from "../Components/ModelHeatmap";
import WeatherChart from '../Components/WeatherChart';
import AttacksChart from "../Components/AttacksChart";
import GoogleTrendsIsraelChart from '../Components/GoogleTrendsIsraelChart';
import GoogleTrendsPalestineChart from '../Components/GoogleTrendsPalestineChart';
import HolidaysHeatmap from '../Components/HolidaysHeatmap';
import ElectionsHeatmap from '../Components/ElectionsHeatmap';
import YearPicker from '../Components/YearPicker';
import ErrorScreen from '../Components/ErrorScreen';

class ClassificationModel extends Component {
	constructor() {
		super();
		this.state = {
			year: 2019,
			date: "2019/12/31",
			graphsStartDate : "2019/12/01",
			graphsEndDate : "2019/12/30",			
			// Indication of success connecting to server
			success : null
		}
		this.updateModel = this.updateModel.bind(this);
		this.updateCharts = this.updateCharts.bind(this);
		this.setSuccess = this.setSuccess.bind(this);
		this.refresh = this.refresh.bind(this);
	}

	setSuccess(status) {
		this.setState({
			success : status
		});		
	}

	refresh() {
		this.setState({
			year: 2019,
			date: "2019/12/31",
			graphsStartDate : "2019/12/01",
			graphsEndDate : "2019/12/30",
			success : null
		});
	}
	
	updateModel(selectedYear) {
		this.setState({
			year: selectedYear,
			date: selectedYear + "/12/31",
			graphsStartDate : selectedYear + "/12/01",
			graphsEndDate : selectedYear + "/12/30",
		});
	}
	
	updateCharts(selectedDate) {
		// Get graphs start date (last 30 days)
		var startDate = new Date(selectedDate)
		startDate.setDate(startDate.getDate() - 31);
		var formattedStartDate = startDate.toISOString().slice(0, 10);
		// Get graphs end date
		var endDate = new Date(selectedDate)
		endDate.setDate(endDate.getDate());
		var formattedEndDate = endDate.toISOString().slice(0, 10);

		this.setState({
			date: selectedDate,
			graphsStartDate : formattedStartDate,
			graphsEndDate : formattedEndDate
		});
	}

    render() {
		// Error connecting to server
		if (this.state.success === false) {
			return (
				<div>
					<ErrorScreen
						refresh = {this.refresh}
					/>
				</div>
			)
		// Success connecting to server
		} else {
			let googleAndSpecialDays;
			const specialDaysHeatmaps =
			<div>
				<div id = "special_days_header" style= {{fontFamily: 'Candara', fontWeight: 'bold', fontSize: 20, paddingBottom: '5px'}}>
					Special Days
				</div>
				<div id = "holidays_heatmap" style= {{float: 'left', fontFamily: 'Candara', fontWeight: 'bold', fontSize: 16, paddingBottom: '5px', paddingLeft: '40px', marginRight: '45px'}}>
					Holidays
					<HolidaysHeatmap
						setSuccess = {this.setSuccess}
						startDate = {this.state.graphsStartDate}
						endDate = {this.state.graphsEndDate}
					/>
				</div>
				<div id = "elections_heatmap" style= {{float: 'left', fontFamily: 'Candara', fontWeight: 'bold', fontSize: 16, paddingBottom: '5px', paddingLeft: '40px'}}>
					Elections
					<ElectionsHeatmap
						setSuccess = {this.setSuccess}
						startDate = {this.state.graphsStartDate}
						endDate = {this.state.graphsEndDate}
					/>
				</div>
			</div>

			if (this.state.year >= 2004) {
				googleAndSpecialDays =
				<div>
					<div id = "google_trends_israel_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginTop: '10px', marginLleft: 'auto', marginRight: '15px', border: '1px solid black'}}>
						<GoogleTrendsIsraelChart
							setSuccess = {this.setSuccess}
							startDate = {this.state.graphsStartDate}
							endDate = {this.state.graphsEndDate}
							year = {this.state.year}
						/>
					</div>
					<div id = "google_trends_palestine_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginTop: '10px', marginLleft: 'auto', marginRight: 'auto', border: '1px solid black'}}>
						<GoogleTrendsPalestineChart
							setSuccess = {this.setSuccess}
							startDate = {this.state.graphsStartDate}
							endDate = {this.state.graphsEndDate}
							year = {this.state.year}
						/>
					</div>
					<div id = "special_days_heatmaps" style= {{display: 'inline-block', background: 'white', width: '45%', height: '100%', marginTop: '10px', marginLleft: 'auto', marginRight: 'auto', paddingLeft: '5px', marginBottom: '20px', border: '1px solid black'}}>
						{specialDaysHeatmaps}
					</div>
				</div>			
			} else {
				googleAndSpecialDays =
				<div>
					<div id = "special_days_heatmaps" style= {{display: 'inline-block', background: 'white', width: '45%', height: '100%', marginTop: '10px', marginLleft: 'auto', marginRight: '15px', marginBottom: '20px', border: '1px solid black'}}>
						{specialDaysHeatmaps}
					</div>
					<div id = "google_trends_no_data" style= {{display: 'inline-block', background: 'white', width: '45%', height: '206px', marginTop: '10px', marginLleft: 'auto', marginRight: 'auto', marginBottom: '20px', border: '1px solid black'}}>
						<h1 id = "google_trends_header" style= {{fontFamily: 'Candara', fontWeight: 'bold', fontSize: 20, paddingBottom: '5px'}}>
							Google Trends
						</h1>
						<p id = "google_trends_content" style= {{float: 'left', fontFamily: 'Candara', fontSize: 16, color: 'red', marginTop: '60px', paddingLeft: '98px'}}>
							No Google Trends data before 2004
						</p>
					</div>
				</div>
			}

			return (
				<div id = "classification_charts">
					<div id = "model_heatmap" style= {{fontFamily: 'Candara', fontWeight: 'bold', display: 'inline-block', background: 'white', width: '94%', height: '100%', marginTop: '10px', marginBottom: '15px', marginLleft: 'auto', marginRight: 'auto', paddingTop: '10px', paddingLeft: '5px', border: '1px solid black'}}>
						<div id = "model_header" style= {{fontSize: 25}}>
							Classification Model
						</div>
						<div id = "year_picker">
							<div style= {{float: 'left', fontSize: 16, paddingLeft: '15px', paddingRight: '15px', paddingTop: '9px'}}>
								Year: 
							</div>
							<div style= {{float: 'left', fontSize: 14, width: '12%', paddingBottom: '8px', marginRight: '60%'}}>
								<YearPicker
									updateModel = {this.updateModel}
								/>
							</div>
						</div>
						<div style= {{float: 'left', fontSize: 15, paddingTop: '9px', textAlign: 'left'}}>
							<div style= {{float: 'left'}}>
								Selected Date: 
							</div>
							<div style= {{float: 'left', paddingLeft: '5px', paddingBottom: '10px', color: '#f43e3a'}}>
								{this.state.date}
							</div>
						</div>
						<ModelHeatmap						
							setSuccess = {this.setSuccess}
							updateCharts = {this.updateCharts}
							year = {this.state.year}
						/>
					</div>
					<div style= {{fontFamily: 'Candara', fontSize: 18, fontWeight: 'bold', paddingLeft: '15px', paddingRight: '15px', paddingBottom: '10px'}}>
						Data of the 30 days before the selected date
					</div>
					<div id = "weather_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginLleft: 'auto', marginRight: '15px', border: '1px solid black'}}>
						<WeatherChart							
							setSuccess = {this.setSuccess}
							startDate = {this.state.graphsStartDate}
							endDate = {this.state.graphsEndDate}
						/>
					</div>
					<div id = "attacks_chart" style= {{display: 'inline-block', width: '45%', height: '100%', marginLleft: 'auto', marginRight: 'auto', border: '1px solid black'}}>
						<AttacksChart
							setSuccess = {this.setSuccess}							
							startDate = {this.state.graphsStartDate}
							endDate = {this.state.graphsEndDate}
						/>
					</div>
					{googleAndSpecialDays}
				</div>
			)
		}
    }
}

export default ClassificationModel;
