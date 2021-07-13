import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class RegressionModel extends Component {
	
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

    render() { 
        const regression_model = {
			animationEnabled: true,
			exportEnabled: true,
			zoomEnabled: true,
			theme: "light2",
			title: {
				text: "Regression Model"
			},
			axisY: {
				title: "Predicted Anomaly Value"
			},
			axisX: {
				title: "Date"
			},
			data: [{
				type: "line",
				toolTipContent: "Date: {x}</br> Value: {y}",
				dataPoints: this.getModelDataPoints(2019),
				click: this.updateCharts
			}]
		}
		
        
		return (
		<div id = "regression_charts">
			<div id = "model_chart" style= {{display: 'inline-block', width: '92%', height: '100%', marginTop: '15px', marginBottom: '10px', marginLleft: 'auto', marginRight: 'auto', paddingTop: "5px", paddingBottom: "5px"}}>
				<CanvasJSChart options = {regression_model}
				onRef={ref => this.model_chart = ref}
				/>
			</div>
		</div>
		);
    }
}

export default RegressionModel;
