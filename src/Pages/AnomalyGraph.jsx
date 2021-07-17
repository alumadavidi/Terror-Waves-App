import React, { Component } from "react";
import CanvasJSReact from "../canvasjs/canvasjs.stock.react";

var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class AnomalyGraph extends Component {
  constructor() {
    super();
    this.state = {
      city: [],
      attackInformation: [],
    };
    this.getAttackInformation = this.getAttackInformation.bind(this);
  }

  getAttackInformation(e) {
    alert("Date: " + e.dataPoint.x);
    this.setState({
      city: ["Jerusalem", "Tel-Aviv"],
      attackInformation: ["Suicide bombing", "Stabbing attack"],
    });
  }

  getAnomalyDataPoints() {
    var dps = [];
    var year, month, day;
    for (year = 1970; year <= 2020; year++) {
      for (month = 1; month <= 12; month++) {
        for (day = 1; day <= 30; day++) {
          dps.push({ x: new Date(year, month, day), y: day });
        }
      }
    }
    return dps;
  }

  render() {
    // Arrange the attacks information in a table
    const attacks = []
    for (var i=0; i < this.state.city.length; i++) {
      attacks.push(<tr><td>{this.state.city[i]}</td><td>{this.state.attackInformation[i]}</td></tr>)
    }

    const anomaly = {
      height: 390,
      title: {
        text: "Anomaly Detection",
        fontFamily: "Candara",
        fontSize: 30,
        fontWeight: "bold",
      },
      exportFileName: "AnomalyGraph",
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
              click: this.getAttackInformation,
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
          startValue: new Date("2020-01-01"),
          endValue: new Date("2020-12-31"),
        },
      },
      navigator: {
        enabled: false,
      },
    };

    return (
      <div>
        <div
          id="anomaly_chart"
          style={{
            display: "inline-block",
            width: "92%",
            marginTop: "65px",
            marginBottom: "0px",
            marginLleft: "auto",
            marginRight: "auto",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          <CanvasJSStockChart options={anomaly} />
        </div>

        <table
          id="information_table"
          style={{
            fontFamily: "candara",
            textAlign: "center",
            fontSize: "12",
            width: "80%",
            border: "1px solid black",
          }}
        >
          <tr>
            <th>City</th>
            <th>Attack Information</th>
          </tr>
          {attacks}
        </table>
      </div>
    );
  }
}

export default AnomalyGraph;
