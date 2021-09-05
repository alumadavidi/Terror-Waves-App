import React, { Component } from "react";
import "../Pages.css";
import DatePicker from "../Components/DatePicker";
import ConfusionMatrix from "../Components/ConfusionMatrix";
import HyperParams from "../Components/HyperParams";

import PredictionData from "../Components/PredictionData";
import WeatherIcon from "@material-ui/icons/WbSunny";
import HolidayIcon from "@material-ui/icons/AccountBalance";
import { MDBIcon } from "mdbreact";
import axios from "axios";

class Prediction extends Component {
  state = {
    hyperParams: {},
    confusionMatrix: {},
    features: {},
    date: new Date(),
    pred: undefined,
    modelAcc: undefined,
    testAcc: undefined,
    params: [],
  };

  updateConfusionMatrix = (fullYear) => {
    axios
      .get("/ConfusionMatrix", {
        params: {
          year: fullYear,
        },
      })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          this.setState({
            confusionMatrix: res.data[0],
          });

          console.log(this.state);
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

  updateHyperParams = (fullYear) => {
    axios
      .get("/Hyperparmeters", {
        params: {
          year: fullYear,
        },
      })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          console.log(res.data);
          this.setState({
            hyperParams: res.data[0],
          });
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

  updateFeatures = (fullYear) => {
    axios
      .get("/Features", {
        params: {
          year: fullYear,
        },
      })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          console.log(res.data);
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

  updateAcc = (fullYear) => {
    axios
      .get("/", {
        params: {
          year: fullYear,
        },
      })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          console.log(res.data);
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

  update = (dateValue) => {
    this.setState({ date: new Date(dateValue) });
    let dateTime = new Date(dateValue);
    let fullYear = dateTime.getFullYear();
    dateTime.setDate(dateTime.getDate() + 1);
    this.updateConfusionMatrix(fullYear);
    this.updateHyperParams(fullYear);
    this.updateFeatures(fullYear);
    this.updatePred(dateTime);
    this.updateAcc(fullYear);

    this.forceUpdate();
  };
  getConfusionMatrix = () => {
    return this.state.confusionMatrix;
  };
  getHyperParams = () => {
    return this.state.hyperParams;
  };
  getFeatures = () => {
    return this.state.features;
  };

  getPred = () => {
    return this.state.pred;
  };

  getModelAcc = () => {
    return this.state.modelAcc;
  };

  getTestAcc = () => {
    return this.state.testAcc;
  };

  getParams = () => {
    return this.state.params;
  };

  getDate = () => {
    return this.state.date;
  };

  render() {
    return (
      <div>
        <DatePicker updateDate={this.update} />
        <ConfusionMatrix
          getConfusionMatrix={() => {
            return this.getConfusionMatrix();
          }}
        ></ConfusionMatrix>

        <PredictionData
          getFeatures={() => {
            return this.getFeatures();
          }}
          getHyperParams={() => {
            return this.getHyperParams();
          }}
          getDate={() => {
            return this.getDate();
          }}
          getPred={() => {
            return this.getPred();
          }}
          getModelAcc={() => {
            return this.getModelAcc();
          }}
          getTestAcc={() => {
            return this.getTestAcc();
          }}
          getParams={() => {
            return this.getParams();
          }}
        />
      </div>
    );
  }
}

export default Prediction;
