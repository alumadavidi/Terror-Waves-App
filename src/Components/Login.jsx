import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class Login extends Component {
  state = {
    link: "/adminpage",
    userName: "admin",
    password: "1234",
    inputUser: "",
    inputPsw: "",
  };

  inputUser = (event) => {
    this.setState({ inputUser: event.target.value });
  };

  inputPsw = (event) => {
    this.setState({ inputPsw: event.target.value });
  };

  handleLogin = (propFunc) => {
    let obj = {
      username: `${this.state.inputUser}`,
      password: `${this.state.inputPsw}`,
    };

    axios
      .post("/login", obj)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          propFunc();
        }
      })
      .catch((error) => {});
  };

  handleLogout = (propFunc) => {
    propFunc();
    this.setState({ inputUser: "" });
    this.setState({ inputPsw: "" });
  };

  render() {
    if (this.props.isLogin()) {
      return (
        <div className="login">
          <h1 className="loginlable">Hello Admin</h1>
          <div className="containerbutton">
            <button
              className="logoutbutton"
              type="submit"
              onClick={() => {
                this.handleLogout(this.props.Logout);
              }}
            >
              Logout
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="login">
          <h1 className="loginlable">login as admin</h1>

          <div className="containerdetails">
            <input
              type="text"
              placeholder="Enter Username"
              name="inputPsw"
              onChange={this.inputUser}
              required
            />
          </div>
          <div className="containerdetails">
            <input
              type="password"
              placeholder="Enter Password"
              onChange={this.inputPsw}
              name="inputUser"
              required
            />
          </div>
          <div className="login">
            <div className="containerbutton">
              <button
                className="loginbutton"
                type="submit"
                onClick={() => {
                  this.handleLogin(this.props.Login);
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Login;
