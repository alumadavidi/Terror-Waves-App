import React, { Component } from "react";
import "../Pages.css";
import DatePicker from "../Components/DatePicker";
import PredictionData from "../Components/PredictionData";
import WeatherIcon from "@material-ui/icons/WbSunny";
import HolidayIcon from "@material-ui/icons/AccountBalance";

class Prediction extends Component {
  state = {
    date: new Date(),
    inTerrorWave: false,
    modelAcc: 90,
    params: [
      { title: "weather", icon: <WeatherIcon />, val: 90 },
      { title: "holiday", icon: <HolidayIcon />, val: 1 },
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
          inTerrorWave={this.state.inTerrorWave}
          modelAcc={this.state.ModelAcc}
          params={this.state.params}
        />
      </div>
    );
  }
}

export default Prediction;
