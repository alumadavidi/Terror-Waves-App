import React, { Component } from "react";
import "../Pages.css";

class HyperParams extends Component {
  render() {
    let data = this.props.getData();

    return (
      <div>
        <ul className="ParamList">
          {Object.keys(data).map((key, i) => {
            return (
              <li className="row" key={key}>
                <div id="title">{key.replaceAll("_", " ")}</div>
                <div id="val">{Number(data[key]).toFixed(2)}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default HyperParams;
