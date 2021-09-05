import React, { Component } from "react";
import AnomalyChart from "../Components/AnomalyChart";
import AttacksTable from "../Components/AttacksTable";

class AnomalyGraph extends Component {
  constructor() {
    super();
    this.state = {
      date: "---",
      loss: "---"
    };
    this.setDateAndLoss = this.setDateAndLoss.bind(this);
  }

  setDateAndLoss(e) {
    var date = e.dataPoint.x.toISOString().slice(0, 10);
    date = date.split('-').join('/');
    var loss = parseFloat(e.dataPoint.y).toFixed(8);
    this.setState({ 
      date : date,
      loss : loss
    });
  }

  render() {
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
          <AnomalyChart
            setDateAndLoss = {this.setDateAndLoss}
          />
        </div>
        <div
            style={{
              paddingLeft: "40px",
              paddingBottom: "20px"
            }}
          >
          <div
            style={{
              float: 'left',
              fontSize: 16,
              fontFamily: 'Candara',
              fontWeight: 'bold',
              paddingBottom: '10px',
              textAlign: 'left'
            }}
          >
						<div
              style={{
                float: 'left'
              }}
            >
              Selected Date:
						</div>
						<div
              style={{
                float: 'left',
                paddingLeft: '5px',
                color: '#f43e3a'
              }}
            >
							{this.state.date}
						</div>
            <div
              style={{
                float: 'left',
                paddingLeft: '20px'
              }}
            >
              Loss Value:
						</div>
						<div
              style={{
                float: 'left',
                paddingLeft: '5px',
                paddingBottom: '5px',
                color: '#f43e3a'
              }}
            >
							{this.state.loss}
						</div>
            <div>
              Attacks on the next day:
						</div>
					</div>
          <AttacksTable
            date = {this.state.date}
          />
        </div>
      </div>
    );
  }
}

export default AnomalyGraph;
