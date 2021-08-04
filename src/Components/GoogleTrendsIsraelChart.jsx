import React, { Component } from "react";
import CanvasJSReact from '../canvasjs/canvasjs.react';
import axios from "axios";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class GoogleTrendsIsraelChart extends Component {
    constructor() {
		super();
		this.state = {
			شهادة: [],
			شهيد: [],
			جهاد: [],
			كافر: [],
			كفار: [],
			الأقصى: [],
			وضوء: [],
			عملية: [],
			تبرعات: [],
			صدقة: [],
			حلق: [],
			فتوى: [],
			الكوثر: [],
			استشهاد: [],
			الحور_العين: [],
			سورة_الفاتحة: [],
			سورة_الانفال: [],
			في_سبيل_الله: []
        };
		this.toggleGoogleIsraelDataSeries = this.toggleGoogleIsraelDataSeries.bind(this);
	}

	componentDidMount() {
        this.getDataPoints();
    }

	
    componentDidUpdate(prevProps) {
        if (prevProps.startDate !== this.props.startDate && this.props.year >= 2004) {
			this.getDataPoints();
        }
    }

	async getDataPoints() {
        let response = await axios.get("/GoogleTrendsIsrael", {
            params: {
                startDate : this.props.startDate,
                endDate : this.props.endDate
            }
          });
        var شهادة_dps = [], شهيد_dps = [], جهاد_dps = [], كافر_dps = [], كفار_dps = [], الأقصى_dps = [], وضوء_dps = [], عملية_dps = [],
		تبرعات_dps = [], صدقة_dps = [], حلق_dps = [], فتوى_dps = [], الكوثر_dps = [], استشهاد_dps = [], الحور_العين_dps = [],
		سورة_الفاتحة_dps = [], سورة_الانفال_dps = [], في_سبيل_الله_dps = [];
        response.data.map((googleData) => {
            شهادة_dps.push({ x: new Date(googleData.date), y: googleData.شهادة });
			شهيد_dps.push({ x: new Date(googleData.date), y: googleData.شهيد });
			جهاد_dps.push({ x: new Date(googleData.date), y: googleData.جهاد });
			كافر_dps.push({ x: new Date(googleData.date), y: googleData.كافر });
			كفار_dps.push({ x: new Date(googleData.date), y: googleData.كفار });
			الأقصى_dps.push({ x: new Date(googleData.date), y: googleData.الأقصى });
			وضوء_dps.push({ x: new Date(googleData.date), y: googleData.وضوء });
			عملية_dps.push({ x: new Date(googleData.date), y: googleData.عملية });
			تبرعات_dps.push({ x: new Date(googleData.date), y: googleData.تبرعات });
			صدقة_dps.push({ x: new Date(googleData.date), y: googleData.صدقة });
			حلق_dps.push({ x: new Date(googleData.date), y: googleData.حلق });
			فتوى_dps.push({ x: new Date(googleData.date), y: googleData.فتوى });
			الكوثر_dps.push({ x: new Date(googleData.date), y: googleData.الكوثر });
			استشهاد_dps.push({ x: new Date(googleData.date), y: googleData.استشهاد });
			الحور_العين_dps.push({ x: new Date(googleData.date), y: googleData.الحور_العين });
			سورة_الفاتحة_dps.push({ x: new Date(googleData.date), y: googleData.سورة_الفاتحة });
			سورة_الانفال_dps.push({ x: new Date(googleData.date), y: googleData.سورة_الانفال });
			في_سبيل_الله_dps.push({ x: new Date(googleData.date), y: googleData.في_سبيل_الله });
        })

        this.setState({
			شهادة : شهادة_dps,
			شهيد : شهيد_dps,
			جهاد : جهاد_dps,
			كافر : كافر_dps,
			كفار : كفار_dps,
			الأقصى : الأقصى_dps,
			وضوء : وضوء_dps,
			عملية : عملية_dps,
			تبرعات : تبرعات_dps,
			صدقة : صدقة_dps,
			حلق : حلق_dps,
			فتوى : فتوى_dps,
			الكوثر : الكوثر_dps,
			استشهاد : استشهاد_dps,
			الحور_العين : الحور_العين_dps,
			سورة_الفاتحة : سورة_الفاتحة_dps,
			سورة_الانفال : سورة_الانفال_dps,
			في_سبيل_الله : في_سبيل_الله_dps
        });
	}

	toggleGoogleIsraelDataSeries(e) {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
        this.google_trends_israel_chart.render();
	}

	/*
	getGoogleTrendsIsraelDataPoints(word) {
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
	*/
    
    render() {
        const googleTrendsIsrael = {
			height: 230,
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
       			verticalAlign: "top",
				itemWidth: 70,
				cursor: "pointer",
				itemclick: this.toggleGoogleIsraelDataSeries
			},
			data: [
			{
				type: "line",
				name: "شهادة",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("شهادة")
				dataPoints: this.state.شهادة
			},
			{
				type: "line",
				name: "شهيد",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("شهيد")
				dataPoints: this.state.شهيد
			},
			{
				type: "line",
				name: "جهاد",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("جهاد")
				dataPoints: this.state.جهاد
			},
			{
				type: "line",
				name: "كافر",
				visible: true,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("كافر")
				dataPoints: this.state.كافر
			},
			{
				type: "line",
				name: "كفار",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("جهاد")
				dataPoints: this.state.كفار
			},
			{
				type: "line",
				name: "الأقصى",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("جهاد")
				dataPoints: this.state.الأقصى
			},
			{
				type: "line",
				name: "وضوء",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("جهاد")
				dataPoints: this.state.وضوء
			},
			{
				type: "line",
				name: "عملية",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("جهاد")
				dataPoints: this.state.عملية
			},
			{
				type: "line",
				name: "تبرعات",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("جهاد")
				dataPoints: this.state.تبرعات
			},
			{
				type: "line",
				name: "صدقة",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("جهاد")
				dataPoints: this.state.صدقة
			},
			{
				type: "line",
				name: "حلق",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("جهاد")
				dataPoints: this.state.حلق
			},
			{
				type: "line",
				name: "فتوى",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("جهاد")
				dataPoints: this.state.فتوى
			},
			{
				type: "line",
				name: "الكوثر",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("جهاد")
				dataPoints: this.state.الكوثر
			},
			{
				type: "line",
				name: "استشهاد",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("استشهاد")
				dataPoints: this.state.استشهاد
			},
			{
				type: "line",
				name: "الحور العين",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("جهاد")
				dataPoints: this.state.الحور_العين
			},
			{
				type: "line",
				name: "سورة الفاتحة",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("جهاد")
				dataPoints: this.state.سورة_الفاتحة
			},
			{
				type: "line",
				name: "سورة الانفال",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("جهاد")
				dataPoints: this.state.سورة_الانفال
			},
			{
				type: "line",
				name: "في سبيل الله",
				visible: false,
				showInLegend: true,
				xValueFormatString: "YYYY/MM/DD",
				//dataPoints: this.getGoogleTrendsIsraelDataPoints("جهاد")
				dataPoints: this.state.في_سبيل_الله
			}]
		}

        return (
			<div>
				<CanvasJSChart
					options = {googleTrendsIsrael}
					onRef={ref => this.google_trends_israel_chart = ref}
				/>
			</div>
        );
    }
}

export default GoogleTrendsIsraelChart;
