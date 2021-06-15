import React, { Component } from "react";
import "../Pages.css";
import Admin from "../Pages/AdminPage";

class HomePage extends Component {
  state = {};
  render() {
    console.log(this.props);
    if (!this.props.isLogin()) {
      return (
        <div>
          <img
            className="homeImage"
            src="../images/home-page-image.png"
            alt=""
          />
        </div>
      );
    } else {
      return (
        <div>
          <Admin />
        </div>
      );
    }
  }
}

export default HomePage;
