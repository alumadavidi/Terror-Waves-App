import React, { Component } from "react";
import "../Pages.css";
import DatePicker from "../Components/DatePicker";
import PredictionData from "../Components/PredictionData";
import WeatherIcon from "@material-ui/icons/WbSunny";
import HolidayIcon from "@material-ui/icons/AccountBalance";
import { MDBIcon } from "mdbreact";
import axios from "axios";

class Prediction extends Component {
  state = {
    date: new Date(),
    pred: false,
    modelAcc: 80,
    params: [
      {
        title: "Israel weather",
        icon: <MDBIcon icon="mosque" />,
        val: 90,
      },
      { title: "Jewish holiday", icon: <HolidayIcon />, val: "-" },
      { title: "Muslim holiday", icon: <WeatherIcon />, val: "-" },
      { title: "israel election day", icon: <WeatherIcon />, val: "-" },
      { title: "google trends", icon: <WeatherIcon />, val: "-" },
    ],
  };

  updateDate = (dateValue) => {
    this.setState({ date: dateValue });
    console.log(this.state.date);

    let obj = {
      username: `${this.state.inputUser}`,
      password: `${this.state.inputPsw}`,
    };

    axios
      .post("/login", obj)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("Invalid username or password");
        } else {
          alert("Error! Something went wrong - server faild");
        }
      });
  };

  render() {
    return (
      <div>
        <DatePicker updateDate={this.updateDate} />

        <PredictionData
          date={this.state.date}
          pred={this.state.classPred}
          modelAcc={this.state.classModelAcc}
          params={this.state.params}
        />
      </div>
    );
  }
}

export default Prediction;
