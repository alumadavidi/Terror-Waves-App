import React, { Component } from "react";
import TerrorWavesInfoTable from "../Components/TerrorWavesInfoTable";
import ErrorScreen from "../Components/ErrorScreen";
import "../App.css";

class TerrorWavesInformation extends Component {
  constructor() {
    super();
    this.state = {
      // Indication of success connecting to server
      success: null
    };
    this.setSuccess = this.setSuccess.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  setSuccess(status) {
    this.setState({
      success: status
    });
  }

  refresh() {
    this.setState({
      success: null
    });
  }

  render() {
    // Error connecting to server
    if (this.state.success === false) {
      return (
        <div>
          <ErrorScreen
            refresh={this.refresh}
          />
        </div>
      );
      // Success connecting to server
    } else {
      return (
        <div>
          <TerrorWavesInfoTable
            setSuccess={this.setSuccess}
          />
        </div>
      );
    }
  }
}

export default TerrorWavesInformation;
