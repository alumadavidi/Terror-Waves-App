import React, { Component } from "react";
import "../Pages.css";

import NoIcon from "@material-ui/icons/Clear";
import YesIcon from "@material-ui/icons/Check";
import green from "@material-ui/core/colors/green";

class PredictionData extends Component {
  state = {
    date: this.props.date,
    classPred: this.props.classPred,
    classModelAcc: this.props.classModelAcc,
    params: this.props.params,
    icon: <NoIcon style={{ fontSize: 100 }} color="secondary" />,
  };
  render() {
    if (this.state.classPred) {
      this.setState({
        icon: <YesIcon style={{ color: green[500], fontSize: 100 }} />,
      });
    }
    return (
      <div className="PredData">
        <h1 className="predTitle"> Predict Terror wave by date </h1>

        <div className="PredLeft">
          <div className="ModelsDiv">
            <div className="ModelView">
              <h3 className="PredTitle"> Model Prediction</h3>
              <div id="icon">{this.state.icon}</div>
            </div>
          </div>
          <div className="AccDiv">
            <div className="ModelView">
              <h3 className="PredTitle">Model accuracy</h3>
              <h1 id="Acc">97%</h1>
            </div>
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
