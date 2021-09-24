import React, { Component } from "react";
import axios from "axios";
import "../Pages.css";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ErrorScreen from "../Components/ErrorScreen";
import TrainButton from "../Components/TrainButton";
import YearPicker from "../Components/YearPicker";

class AdminPage extends Component {
  state = {
    success: undefined,
    trainButtonPressed: false,
  };

  setButtonPressed = (status) => {
    this.setState({
      trainButtonPressed: status,
    });
  };
  getButtonPress = () => {
    return this.state.trainButtonPressed;
  };

  setSuccess = (status) => {
    this.setState({
      success: status,
    });
  };

  refresh = () => {
    this.setState({
      success: undefined,
    });
  };
  handleDragLeave = (e) => {
    e.preventDefault();
  };
  handleDragEnter = (e) => {
    e.preventDefault();
  };
  handleDragOver = (e) => {
    e.preventDefault();
  };
  handleOnDrop = (e) => {
    e.preventDefault();

    const data = new FormData();

    let fileNum = 0;
    let uploaded = false;

    Array.from(e.dataTransfer.files)
      .filter((file) => file.type === "application/vnd.ms-excel")
      .forEach(async (file) => {
        data.append("" + fileNum, file);
        fileNum = fileNum + 1;
      });
    console.log(e.dataTransfer.files.length);
    if (fileNum === 0) {
      alert("Files have not been uploaded - type error");
      return;
    }

    axios
      .post("/ModelData", data)
      .then((res) => {
        if (e.dataTransfer.files.length > fileNum) {
          alert(
            "something went wrong - please check your files name or type and try again"
          );
        } else if (res.status === 200) {
          alert("files uploded succecfuly");
          this.setState({ trainButtonPressed: false });
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert(
            "something went wrong - please check your files name or type and try again"
          );
        } else {
          this.setSuccess(false);
        }
      });
  };

  render() {
    if (this.state.success === false) {
      return <ErrorScreen refresh={this.refresh} />;
    }
    return (
      <div className="uploadPage">
        <TrainButton
          setStatus={(status) => {
            this.setButtonPressed(status);
          }}
          getStatus={() => this.getButtonPress()}
          onError={() => this.setSuccess(false)}
        />
        <div
          className="drag-area"
          onDragEnter={(e) => {
            this.handleDragEnter(e);
          }}
          onDragLeave={(e) => {
            this.handleDragLeave(e);
          }}
          onDragOver={(e) => {
            this.handleDragOver(e);
          }}
          onDrop={(e) => {
            this.handleOnDrop(e);
          }}
        >
          <div className="icon">
            <CloudUploadIcon style={{ fontSize: 100 }} />
          </div>
          <header>Drag & Drop to Upload File</header>
        </div>
      </div>
    );
  }
}

export default AdminPage;
