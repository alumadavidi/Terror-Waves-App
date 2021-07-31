import React, { Component } from "react";
import AnomalyChart from "../Components/AnomalyChart";
import AttacksTable from "../Components/AttacksTable";

class AnomalyGraph extends Component {
  constructor() {
    super();
    this.state = {
      date: "---"
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(e) {
    var date = e.dataPoint.x.toISOString().slice(0, 10);
    this.setState({ date : date });
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
              paddingLeft: "40px",
              paddingBottom: "20px"
            }}
          >
          <div style= {{float: 'left', fontSize: 16, fontFamily: 'Candara', fontWeight: 'bold', paddingTop: '20px', paddingBottom: '15px', textAlign: 'left'}}>
						<div style= {{float: 'left'}}>
              Attacks on the selected date:
						</div>
						<div style= {{float: 'left', paddingLeft: '5px', color: '#f43e3a'}}>
							{this.state.date != "---" ? this.state.date.split('-').join('/') : this.state.date}
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
