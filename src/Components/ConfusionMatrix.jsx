import React, { Component } from "react";
import "../Pages.css";

class ConfusionMatrix extends Component {
  state = {
    dateValue: new Date(),
    startDate: new Date(1970, 1, 1),
    enddate: new Date(2019, 1, 1),
  };
  render() {
    let cm = this.props.getConfusionMatrix();
    let fn = cm.FN;
    let fp = cm.FP;
    let tn = cm.TN;
    let tp = cm.TP;
    console.log(this.props.getConfusionMatrix());
    return (
      <div className="ConfusionMatrix">
        <table className="cmTable">
          <tbody>
            <tr className="cmTable">
              <th></th>
              <th className="cmTable">Predicted: No</th>
              <th className="cmTable">Predicted: Yes</th>
            </tr>
            <tr>
              <th className="cmTable">Actual: No</th>
              <td className="cmTable">TN={tn}</td>
              <td className="cmTable">FP={fp}</td>
            </tr>
            <tr>
              <th className="cmTable">Actual:Yes</th>
              <td className="cmTable">FN={fn}</td>
              <td className="cmTable">TP={tp}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ConfusionMatrix;
