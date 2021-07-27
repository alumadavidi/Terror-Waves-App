import React, { Component } from "react";
import CanvasJSReact from "../canvasjs/canvasjs.stock.react";

var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class AnomalyChart extends Component {
    constructor() {
        super();
        this.state = {
            date: null,
            startValue: new Date("2019-01-01"),
            endValue: new Date("2019-12-31")
        };
    }
  
    shouldComponentUpdate() {
        return false
    }
 
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

    render() {
        const anomaly = {
            height: 390,
            title: {
            text: "Anomaly Detection",
            fontFamily: "Candara",
            fontSize: 30,
            fontWeight: "bold",
            },
            charts: [
            {
                theme: "light2",
                axisX: {
                labelFontSize: 10,
                },
                axisY: {
                title: "Anomaly Value",
                fontFamily: "Candara",
                },
                data: [
                {
                    dataPoints: this.getAnomalyDataPoints(),
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
