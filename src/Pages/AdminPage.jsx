import React, { Component } from "react";
import { parse } from "papaparse";
import axios from "axios";
import "../Pages.css";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

class AdminPage extends Component {
  handleDragEnter = () => {};
  handleDragLeave = () => {};
  handleDragOver = (e) => {
    e.preventDefault();
  };
  handleOnDrop = (e) => {
    e.preventDefault();

    const data = new FormData();

    let fileNum = 0;

    Array.from(e.dataTransfer.files)
      .filter((file) => file.type === "application/vnd.ms-excel")
      .forEach(async (file) => {
        data.append("" + fileNum, file);
        fileNum = fileNum + 1;
      });

    axios
      .post("/uploadcsv", data)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
        } else {
        }
      })
      .catch((error) => {});
  };

  render() {
    return (
      <div className="uploadPage">
        <div
          className="drag-area"
          onDragEnter={(e) => {
            this.handleDragEnter();
          }}
          onDragLeave={(e) => {
            this.handleDragLeave();
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
