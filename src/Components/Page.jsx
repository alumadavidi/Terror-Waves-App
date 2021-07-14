import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/HomePage";
import AnomalyGraph from "../Pages/AnomalyGraph";
import ClassificationModel from "../Pages/ClassificationModel";
import Prediction from "../Pages/Prediction";
import TerrorWavesInformation from "../Pages/TerrorWavesInformation";

class Page extends Component {
  state = {};
  render() {
    return (
      <div className="Page">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  isLogin={() => {
                    return this.props.isLogin();
                  }}
                  {...props}
                />
              )}
            />
            <Route path="/anomaly-graph" component={AnomalyGraph} />
            <Route path="/classification-model" component={ClassificationModel} />
            <Route path="/prediction" component={Prediction} />
            <Route path="/terror-waves-information" component={TerrorWavesInformation} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Page;
