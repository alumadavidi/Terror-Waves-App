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
        <table>
          <tr>
            <th></th>
            <th>Predicted: No</th>
            <th>Predicted: Yes</th>
          </tr>
          <tr>
            <th>Actual: No</th>
            <td>TN={tn}</td>
            <td>FP={fp}</td>
          </tr>
          <tr>
            <th>Actual:Yes</th>

            <td>FN={fn}</td>
            <td>TP={tp}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ConfusionMatrix;
