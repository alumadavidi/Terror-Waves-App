import React, { Component } from "react";
import "../Pages.css";
import axios from "axios";

class TrainButton extends Component {
  state = {
    pressed: false,
  };

  press = () => {
    this.props.setStatus(true);
    let obj = {
      test_year: `${2019}`,
    };

    axios
      .post("/ModelDateResult", obj)
      .then((res) => {
        if (res.status === 200) {
        }
      })
      .catch((error) => {
        this.props.onError();
      });
  };

  render() {
    if (this.props.getStatus()) {
      return (
        <div>
          <button className="train-button-pressed" onClick={() => this.press()}>
            <span>Train!</span>
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="train-button" onClick={() => this.press()}>
            <span>Train!</span>
          </button>
        </div>
      );
    }
  }
}

export default TrainButton;
