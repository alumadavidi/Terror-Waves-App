import React, { Component } from "react";
import AnomalyChart from "../Components/AnomalyChart";
import AttacksTable from "../Components/AttacksTable";
import ErrorScreen from "../Components/ErrorScreen";

class AnomalyGraph extends Component {
  constructor() {
    super();
    this.state = {
      date: "---",
      loss: "---",
      // Indication of success connecting to server
      success: null,
    };
    this.setDateAndLoss = this.setDateAndLoss.bind(this);
    this.setSuccess = this.setSuccess.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  setSuccess(status) {
    this.setState({
      success: status,
    });
  }

  refresh() {
    this.setState({
      date: "---",
      loss: "---",
      success: null,
    });
  }

  setDateAndLoss(e) {
    var date = e.dataPoint.x.toISOString().slice(0, 10);
    date = date.split("-").join("/");
    var loss = parseFloat(e.dataPoint.y).toFixed(8);
    this.setState({
      date: date,
      loss: loss,
    });
  }

  render() {
    // Error connecting to server
    if (this.state.success === false) {
      return (
        <div>
          <ErrorScreen refresh={this.refresh} />
        </div>
      );
      // Success connecting to server
    } else {
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
              setSuccess={this.setSuccess}
              setDateAndLoss={this.setDateAndLoss}
            />
          </div>
          <div
            style={{
              paddingLeft: "40px",
              paddingBottom: "20px",
            }}
          >
            <div
              style={{
                float: "left",
                fontSize: 16,
                fontFamily: "Candara",
                fontWeight: "bold",
                paddingBottom: "10px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  float: "left",
                }}
              >
                Selected Date:
              </div>
              <div
                style={{
                  float: "left",
                  paddingLeft: "5px",
                  color: "#f43e3a",
                }}
              >
                {this.state.date}
              </div>
              <div
                style={{
                  float: "left",
                  paddingLeft: "20px",
                }}
              >
                Loss Value:
              </div>
              <div
                style={{
                  float: "left",
                  paddingLeft: "5px",
                  paddingBottom: "5px",
                  color: "#f43e3a",
                }}
              >
                {this.state.loss}
              </div>
              <div>Attacks on the next day:</div>
            </div>
            <AttacksTable setSuccess={this.setSuccess} date={this.state.date} />
          </div>
        </div>
      );
    }
  }
}

export default AnomalyGraph;
