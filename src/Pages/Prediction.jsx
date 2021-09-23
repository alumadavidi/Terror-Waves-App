import React, { Component } from "react";
import "../Pages.css";
import DatePicker from "../Components/DatePicker";
import ConfusionMatrix from "../Components/ConfusionMatrix";
import PredictionData from "../Components/PredictionData";
import axios from "axios";
import ErrorScreen from "../Components/ErrorScreen";

class Prediction extends Component {
  state = {
    hyperParams: {},
    confusionMatrix: {},
    features: {},
    date: new Date(),
    pred: undefined,
    modelAcc: undefined,
    testAcc: undefined,
    success: undefined,
  };

  setSuccess = (status) => {
    this.setState({
      success: status,
    });
  };

  refresh = () => {
    this.initObjects();
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
        this.setSuccess(false);
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
        this.setSuccess(false);
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
        this.setSuccess(false);
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
        this.setSuccess(false);
      });
  };
  updatePred = (dateTime) => {
    axios
      .get("/ModelPredictions", {
        params: {
          day_prediction: dateTime,
        },
      })
      .then((res) => {
        console.log(res.data[0]);
        if (res.status === 200) {
          this.setState({ pred: Boolean(res.data[0].prediction) });
        }
      })
      .catch((error) => {
        this.setSuccess(false);
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
      success: undefined,
    });
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
    this.updateConfusionMatrix(fullYear);
    this.updateHyperParams(fullYear);
    this.updateFeatures(fullYear);
    this.updatePred(dateString);
    this.updateAcc(fullYear);
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
    if (this.state.success === false) {
      return <ErrorScreen refresh={this.refresh} />;
    }
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
