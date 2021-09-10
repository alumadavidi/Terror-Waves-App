import React, { Component } from "react";
import "../Pages.css";
import DatePicker from "../Components/DatePicker";
import ConfusionMatrix from "../Components/ConfusionMatrix";
import PredictionData from "../Components/PredictionData";
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
    getAllReqFlag: false,
  };

  updateConfusionMatrix = (fullYear) => {
    axios
      .get("/ConfusionMatrix", {
        params: {
          year: fullYear,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            confusionMatrix: res.data[0],
          });
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("There is no confusion matrix for " + String(fullYear));
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
        if (res.status === 200) {
          this.setState({
            hyperParams: res.data[0],
          });
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("There is no hyper parameters for " + String(fullYear));
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
        if (res.status === 200) {
          this.setState({
            features: res.data,
          });
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("There is no features for " + String(fullYear));
        } else {
          alert("Error! Something went wrong - server faild");
        }
      });
  };

  updateAcc = (fullYear) => {
    axios
      .get("/ModelDateResult", {
        params: {
          year_accuracy: fullYear,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            modelAcc: Number(res.data[0].model_accuracy).toFixed(1),
            testAcc: Number(res.data[0].test_accuracy).toFixed(1),
          });
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 404) {
          alert("There is no features dgsfgsfor " + String(fullYear));
        } else {
          alert("Error! Something went wrong - server faild");
        }
      });
  };
  updatePred = (dateTime) => {
    axios
      .get("/ModelPredictions", {
        params: {
          date: dateTime,
        },
      })
      .then((res) => {
        console.log(res.data[0]);
        if (res.status === 200) {
          this.setState({ pred: Boolean(res.data[0].prediction) });
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("There is no features dgsfgsfor " + String(dateTime));
        } else {
          alert("Error! Something went wrong - server faild");
        }
      });
  };

  initObjects = () => {
    this.setState({
      hyperParams: {},
      confusionMatrix: {},
      features: {},
      pred: undefined,
      modelAcc: undefined,
      testAcc: undefined,
      getAllReqFlag: false,
    });
  };

  updateFlag = () => {
    if (
      Boolean(this.state.confusionMatrix) &&
      Boolean(this.state.features) &&
      this.state.pred != undefined &&
      this.state.modelAcc != undefined &&
      this.state.testAcc != undefined
    ) {
      this.setState({ getAllReqFlag: true });
    }
  };

  update = (dateValue) => {
    this.setState({ date: new Date(dateValue) });
    let dateTime = new Date(dateValue);
    let fullYear = dateTime.getFullYear();
    dateTime.setDate(dateTime.getDate() + 1);

    let dateString = dateTime
      .toISOString()
      .substring(0, 10)
      .concat(" 00:00:00");

    this.initObjects();
    let i = 0;
    while (i < 20) {
      if (this.state.confusionMatrix === {}) {
        this.updateConfusionMatrix(fullYear);
      } else if (this.state.hyperParams === {}) {
        this.updateHyperParams(fullYear);
      } else if (this.state.hyperParams === {}) {
        this.updateFeatures(fullYear);
      } else if (this.state.pred === undefined) {
        this.updatePred(dateString);
      } else if (this.state.modelAcc === undefined) {
        this.updateAcc(fullYear);
      }
      i++;
    }

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
