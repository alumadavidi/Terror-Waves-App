import React, { Component } from "react";
import "../App.css";
import Login from "./Login";

class Title extends Component {
  render() {
    if (window.location.pathname === "/") {
      return (
        <div className="Title">
          <Login
            isLogin={() => {
              return this.props.isLogin();
            }}
            Login={() => {
              this.props.Login();
            }}
            Logout={() => {
              this.props.Logout();
            }}
          />
        </div>
      );
    } else {
      return <div className="Title"></div>;
    }
  }
}

export default Title;
