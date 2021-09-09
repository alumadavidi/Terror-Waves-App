import React, { Component } from "react";
import "../Pages.css";

import NoIcon from "@material-ui/icons/Clear";
import YesIcon from "@material-ui/icons/Check";
import HelpIcon from "@material-ui/icons/HelpOutline";
import green from "@material-ui/core/colors/green";
import HyperParams from "./HyperParams";

class PredictionData extends Component {
  state = {
    iconNo: <NoIcon style={{ fontSize: 100 }} color="secondary" />,
    iconYes: <YesIcon style={{ color: green[500], fontSize: 100 }} />,
    iconHelp: <HelpIcon style={{ fontSize: 100 }} />,
  };
  render() {
    return (
      <div className="PredData">
        <i className="fas fa-star-and-crescent"></i>

        <div className="PredLeft">
          <div className="ModelsDiv">
            <h3 className="PredTitle"> Model Prediction</h3>

            <div className="ModelView">
              <div id="icon">{this.getIcon(this.props.getPred())}</div>
            </div>
          </div>
          <div className="AccDiv">
            <h3 className="PredTitle">Model accuracy</h3>

            <div className="ModelView">
              <h1 id="Acc">{this.getAcc(this.props.getModelAcc())}</h1>
            </div>
          </div>
          <div className="AccDiv">
            <h3 className="PredTitle">Test accuracy</h3>

            <div className="ModelView">
              <h1 id="Acc">{this.getAcc(this.props.getTestAcc())}</h1>
            </div>
          </div>
        </div>

        <div className="PredDataRigh">
          <h3 className="PredTitle"> Hyper Parameters</h3>

          <HyperParams
            getData={() => {
              return this.props.getHyperParams();
            }}
          ></HyperParams>
        </div>
        <div className="PredDataRight">
          <h3 className="PredTitle">Most influential features (%)</h3>

          <HyperParams
            getData={() => {
              return this.props.getFeatures();
            }}
          ></HyperParams>
        </div>
      </div>
    );
  }

  getIcon = (pred) => {
    console.log(pred);
    if (pred === undefined) {
      return "";
    } else if (pred) {
      return this.state.iconYes;
    } else {
      return this.state.iconNo;
    }
  };
  getAcc = (acc) => {
    if (acc === undefined) {
      return "";
    } else {
      return String(acc) + "%";
    }
  };
}

export default PredictionData;
