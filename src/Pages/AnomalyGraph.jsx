import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.stock.react';

var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class AnomalyGraph extends Component {
    constructor() {
		super();
        this.state = {
            city: null,
            attackInformation: null
       }
		this.getAttackInformation = this.getAttackInformation.bind(this);
	}

	getAttackInformation(e) {
		alert("Date: " + e.dataPoint.x);
        this.setState({
            city: "Jerusalem",
            attackInformation: "Suicide bombing"
        })
	}
    
    getAnomalyDataPoints() {
		var dps = []
		var year, month, day
        for (year = 1970; year <= 2020; year++) {
            for (month = 1; month <= 12; month++) {
                for (day = 1; day <= 30; day++) {
                    dps.push({x: new Date(year, month, day), y: day})
                }
            }
        }
		return dps;
	}
     
    render() {
        const anomaly = {
            height: 390,
            title: {
                text:"Anomaly Detection",
                fontFamily: "Candara",
                fontSize: 30,
                fontWeight: "bold"
            },
            exportFileName: "AnomalyGraph",
            charts: [{
                theme: "light2",
                axisX: {
                    labelFontSize: 10
                },
                axisY: {        
                    title: "Anomaly Value",
                    fontFamily: "Candara"
                },
                data: [{  
                    dataPoints : this.getAnomalyDataPoints(),
                    toolTipContent: "Date: {x}</br> Value: {y}",
                    click: this.getAttackInformation
                }]
            }],
            rangeSelector: {        
                buttons: [{
                  range: 1, 
                  rangeType: "month",
                  label: "1m"
                },{            
                  range: 3,
                  rangeType: "month",
                  label: "3m"
                },{            
                    range: 6,
                    rangeType: "month",
                    label: "6m"
                },{            
                    range: 1,
                    rangeType: "year",
                    label: "1y"
                },{            
                    range: 5,
                    rangeType: "year",
                    label: "5y"
                }],
                buttonStyle: {
                    labelFontSize: 18,
                    labelFontFamily: "Candara"
                },
                inputFields: {
                    style: {
                      fontSize: 18,
                      fontFamily: "Candara"
                    },
                    startValue: new Date("2020-01-01"),
                    endValue: new Date("2020-12-31")
                }
            },
            navigator: {
                enabled: false
            }
        };

        return (
          <div> 
            <div id = "anomaly_chart" style= {{display: 'inline-block', width: '92%', marginTop: '10px', marginBottom: '0px', marginLleft: 'auto', marginRight: 'auto', paddingTop: "5px", paddingBottom: "5px"}}>
                <CanvasJSStockChart options = {anomaly}/>
            </div>
            <table id = "information_table" style={{fontFamily: 'candara', textAlign: 'center', fontSize: '50%', width: '70%', border: '1px solid black'}}>
                <tr>
                    <th>City</th>
                    <th>Attack Information</th>
                </tr>
                <tr>
                    <td>{this.state.city}</td>
                    <td>{this.state.attackInformation}</td>
                </tr>
                <tr>
                <td>{this.state.city}</td>
                    <td>{this.state.attackInformation}</td>
                </tr>
            </table>
          </div>
        );
    }
}

export default AnomalyGraph;
