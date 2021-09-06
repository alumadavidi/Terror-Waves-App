import React, { Component } from "react";
import "../Pages.css";

class HyperParams extends Component {
  render() {
    let hp = this.props.getHyperParams();

    return (
      <div>
        <ul className="ParamList">
          <h3 className="PredTitle"> features</h3>

          {Object.keys(hp).map((key, i) => {
            return (
              <li className="row" key={key}>
                <div id="title">{key.replaceAll("_", " ")}</div>
                <div id="val">{hp[key]}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default HyperParams;
