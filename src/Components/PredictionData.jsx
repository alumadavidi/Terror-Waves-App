import React, { Component } from "react";
import "../Pages.css";

import NoIcon from "@material-ui/icons/Clear";
import YesIcon from "@material-ui/icons/Check";
import green from "@material-ui/core/colors/green";
class PredictionData extends Component {
  state = {
    date: this.props.date,
    inTerrorWave: this.props.inTerrorWave,
    modelAcc: this.props.modelAcc,
    params: this.props.params,
    icon: <NoIcon style={{ fontSize: 100 }} color="secondary" />,
  };
  render() {
    if (this.state.inTerrorWave) {
      this.setState({
        icon: <YesIcon style={{ color: green[500], fontSize: 100 }} />,
      });
    }
    return (
      <div className="PredData">
        <div className="PredDataLeft">
          <div className="TerrorState">
            <h3>Terror wave prediction</h3>
            <div id="icon">{this.state.icon}</div>
          </div>
          <div className="ModelAcc">
            <h3>Model accuracy</h3>
            <h1>97%</h1>
          </div>
        </div>
        <div className="PredDataRight">
          <ul className="ParamList">
            {this.state.params.map((val, key) => {
              return (
                <li className="row" key={key}>
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                  <div id="val">{val.val}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default PredictionData;
