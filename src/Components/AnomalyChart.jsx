import React, { Component } from "react";
import CanvasJSReact from "../canvasjs/canvasjs.stock.react";
import axios from "axios";

var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class AnomalyChart extends Component {
    constructor() {
        super();
        this.state = {
            date: null,
            startValue: new Date("1970-01-30"),
            endValue: new Date("2019-12-30"),
            dataPoints: [{x: new Date("2019-12-30"), y: 0}]
        };
    }
   
    shouldComponentUpdate() {        
        if (this.state.dataPoints.length <= 1) {
            return true;
        }
        return false;
    }
    
    componentDidMount() {
        this.getDataPoints();
    }
    
    async getDataPoints() {       
        let response = await axios.get("/Anomalies");
        var dps = [];
        response.data.map((anomalyData) => {
            dps.push({ x: new Date(anomalyData.date), y: anomalyData.loss });
        })

        this.setState({
            dataPoints: dps,
            isLoaded: true
        });
    }
 
    /*
    getAnomalyDataPoints() {
        var dps = [];
        var year, month, day;
        for (year = 1970; year <= 2019; year++) {
            for (month = 1; month <= 12; month++) {
                for (day = 1; day <= 30; day++) {
                    dps.push({ x: new Date(year, month, day), y: day });
                }
            }
        }
        return dps;       
    }
    */

    render() {
        /*
        if (this.state.dataPoints.length > 0) {
            alert("render: " + this.state.dataPoints.length + "\nDate: " + this.state.dataPoints[0].x)
        }
        */

        const anomaly = {
            height: 390,
            animationEnabled: true,
            title: {
            text: "Anomaly Detection",
            fontFamily: "Candara",
            fontSize: 30,
            fontWeight: "bold",
            },
            charts: [
            {
                theme: "light2",
                toolTip: {
                    shared: true
                },
                axisX: {
                    labelFontSize: 10,
                    labelMaxWidth: 100,
                    crosshair: {
                        enabled: true,
                        lineDashType: "dot",
                    },
                },
                axisY: {
                title: "Anomaly Value",
                fontFamily: "Candara",
                minimum: 0,
                maximum: 1,
                },
                data: [
                {
                    //dataPoints: this.getAnomalyDataPoints(),
                    dataPoints: this.state.dataPoints,
                    xValueFormatString: "YYYY/MM/DD",
                    toolTipContent: "Date: {x}</br> Value: {y}",
                    click: this.props.setDate,
                },
                ],
            },
            ],
            rangeSelector: {
            buttons: [
                {
                range: 1,
                rangeType: "month",
                label: "1m",
                },
                {
                range: 3,
                rangeType: "month",
                label: "3m",
                },
                {
                range: 6,
                rangeType: "month",
                label: "6m",
                },
                {
                range: 1,
                rangeType: "year",
                label: "1y",
                },
                {
                range: 5,
                rangeType: "year",
                label: "5y",
                },
                {
                rangeType: "all",
                label: "All",
                }
            ],
            buttonStyle: {
                labelFontSize: 18,
                labelFontFamily: "Candara",
            },
            inputFields: {
                style: {
                fontSize: 18,
                fontFamily: "Candara",
                },
                startValue: this.state.startValue,
                endValue: this.state.endValue
            },
            },
            navigator: {
            enabled: false,
            },
        };

        return (
            <div>
                <CanvasJSStockChart
                    options={anomaly}
                />
            </div>
        );
    }
}

export default AnomalyChart;
