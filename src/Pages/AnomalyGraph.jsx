import React, { Component } from "react";
import AnomalyChart from "../Components/AnomalyChart";
import AttacksTable from "../Components/AttacksTable";

class AnomalyGraph extends Component {
  constructor() {
    super();
    this.state = {
      date: null
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(e) {
    var date =  new Date(e.dataPoint.x);
    date.setDate(date.getDate() + 1);
    var formattedDate = date.toISOString().slice(0, 10);
    this.setState({ date : formattedDate });
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
            setDate = {this.setDate}
          />
        </div>
        <div
            style={{
              paddingLeft: "150px"
            }}
          >
            <AttacksTable
              date = {this.state.date}
            />
        </div>
      </div>
    );
  }
}

export default AnomalyGraph;
