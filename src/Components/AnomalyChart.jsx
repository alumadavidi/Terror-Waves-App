import React, { Component } from "react";
import CanvasJSReact from "../canvasjs/canvasjs.stock.react";
import axios from "axios";

var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class AnomalyChart extends Component {
    constructor() {
        super();
        this.state = {
            startValue: new Date("1970-01-30"),
            endValue: new Date("2019-12-30"),
            dataPoints: [{x: new Date("2019-12-30"), y: 0}],
            success: false
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

    componentDidUpdate() {
        if (this.state.success === false) {
            this.getDataPoints();
        }
    }
    
    async getDataPoints() {
        try {
            let response = await axios.get("/Anomalies");
            var dps = [];
            response.data.map((anomalyData) => {
                dps.push({ x: new Date(anomalyData.date), y: anomalyData.loss });
            })

            this.setState({
                dataPoints: dps,
                success: true
            });
        } catch (err) {
			if (err.message.includes('404') || err.message.includes('500')) {
				this.props.setSuccess(false);
			} else {				
				this.setState({
					success: false
				});
			}
        }
    }

    render() {
        const anomaly = {
            height: 390,
            animationEnabled: true,
            title: {
            text: "Anomaly Detection",
            fontFamily: "Candara",
            fontSize: 28,
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
                title: "Loss",
                fontFamily: "Candara",
                minimum: 0,
                maximum: 1,
                },
                data: [
                {
                    dataPoints: this.state.dataPoints,
                    xValueFormatString: "YYYY/MM/DD",
                    toolTipContent: "Date: {x}</br> Loss: {y}",
                    click: this.props.setDateAndLoss,
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
