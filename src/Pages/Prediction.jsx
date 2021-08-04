import React, { Component } from "react";
import "../Pages.css";
import DatePicker from "../Components/DatePicker";
import PredictionData from "../Components/PredictionData";
import WeatherIcon from "@material-ui/icons/WbSunny";
import HolidayIcon from "@material-ui/icons/AccountBalance";
import { MDBIcon } from "mdbreact";

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
      { title: "Jewish holiday", icon: <HolidayIcon />, val: 1 },
      { title: "Muslim holiday", icon: <WeatherIcon />, val: 90 },
      { title: "israel election day", icon: <WeatherIcon />, val: 90 },
      { title: "google trends", icon: <WeatherIcon />, val: 90 },
    ],
  };

  updateDate = (dateValue) => {
    this.setState({ date: dateValue });
    console.log(this.state.date);
    //update params
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
