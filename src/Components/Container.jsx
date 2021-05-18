import React, { Component } from "react";
import "../App.css";
import Sidebar from "./Sidebar";
import Page from "./Page";
import Title from "./Title";

class Container extends Component {
  state = {
    isLogin: false,
  };

  setLogin = (toSet) => {
    this.setState({ isLogin: toSet });
  };
  getLogin = () => {
    console.log(",,", this.state.isLogin);
    return this.state.isLogin;
  };

  render() {
    if (this.state.isLogin) {
      return (
        <div className="Row">
          <div className="App">
            <Title
              isLogin={() => {
                return this.getLogin();
              }}
              Login={() => {
                this.setLogin(true);
              }}
              Logout={() => {
                this.setLogin(false);
              }}
            />
            <Page
              isLogin={() => {
                return this.getLogin();
              }}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="Row">
          <div className="App">
            <Title
              isLogin={() => {
                return this.getLogin();
              }}
              Login={() => {
                this.setLogin(true);
              }}
              Logout={() => {
                this.setLogin(false);
              }}
            />
            <Sidebar />
            <Page
              isLogin={() => {
                return this.getLogin();
              }}
            />
          </div>
        </div>
      );
    }
  }
}

export default Container;
