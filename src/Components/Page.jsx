import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/HomePage";
import Mail from "../Pages/Mail";
import Model from "../Pages/Model";
import Prediction from "../Pages/Prediction";
import Hello from "../Pages/hello";
import Title from "./Title";

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
            <Route path="/mail" component={Mail} />
            <Route path="/model" component={Model} />
            <Route path="/prediction" component={Prediction} />
            <Route path="/hello" component={Hello} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Page;
