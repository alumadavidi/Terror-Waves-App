import React, { Component } from "react";
import CanvasJSReact from '../canvasjs/canvasjs.react';
import axios from "axios";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class AttacksChart extends Component {
    constructor() {
		super();
		this.state = {
            attacksDataPoints: [],
			deathsDataPoints: [],
			woundedDataPoints: []

        };
		this.toggleAttacksDataSeries = this.toggleAttacksDataSeries.bind(this);
	}

	/*
    componentDidMount() {
        this.getDataPoints();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.startDate !== this.props.startDate) {
			this.getDataPoints();
        }
	}
	*/

	async getDataPoints() {
        let response = await axios.get("/Anomalies"); // Change to "/Attacks"
        var attacksDps = [], deathsDps = [], woundedDps = [];
        response.data.map((attacksData) => {
			attacksDps.push({ x: new Date(attacksData.date), y: attacksData.num_attack });
			deathsDps.push({ x: new Date(attacksData.date), y: attacksData.num_deaths });
			woundedDps.push({ x: new Date(attacksData.date), y: attacksData.num_wounded });
        })

        this.setState({
            attacksDataPoints: attacksDps,
			deathsDataPoints: deathsDps,
			woundedDataPoints: woundedDps
        });
	}


	toggleAttacksDataSeries(e) {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
        this.attacks_chart.render();
	}

    getNumAttacksDataPoints() {
		var startDate = this.props.startDate;
		var endDate = this.props.endDate;

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

	getNumDeathsDataPoints() {
		var startDate = this.props.startDate;
		var endDate = this.props.endDate;

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

	getNumWoundedDataPoints() {
		var startDate = this.props.startDate;
		var endDate = this.props.endDate;

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
    
    render() {
        const attacks = {
			height: 200,
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
				itemclick: this.toggleAttacksDataSeries
			},
			data: [{
				type: "column",
				name: "Attacks",
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				toolTipContent: "<strong>{x}</strong></br> Attacks: {y}",
				dataPoints: this.getNumAttacksDataPoints()
				//dataPoints: this.state.attacksDataPoints
			},
			{
				type: "column",
				name: "Deaths",
				showInLegend: true,
				toolTipContent: "Deaths: {y}",
				dataPoints: this.getNumDeathsDataPoints()
				//dataPoints: this.state.deathsDataPoints
			},
			{
				type: "column",
				name: "Wounded",
				showInLegend: true,
				toolTipContent: "Wounded: {y}",
				dataPoints: this.getNumWoundedDataPoints()
				//dataPoints: this.state.woundedDataPoints
			}]
		}

        return (
            <div>
                <CanvasJSChart
                    options = {attacks}
                    onRef={ref => this.attacks_chart = ref}
                />
            </div>
        );
    }
}

export default AttacksChart;
