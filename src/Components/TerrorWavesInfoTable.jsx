import "../Image.css";
import "../App.css";
import React, { Component } from "react";
import axios from "axios";

class TerrorTableTest extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
    };
  }

  async getDataPoints() {
    try {
      let attacksResponse = await axios.get("/TerrorWavesInfo");
      var attacksInfo = [];
      attacksResponse.data.map((attacksData) => {
        attacksInfo.push({
          start_date: attacksData.start_wave_date,
          end_date: attacksData.end_wave_date,
          img: attacksData.img_name,
          desc: attacksData.description,
        });
      });

      this.setState({
        info: attacksInfo,
      });
    } catch (err) {
      this.props.setSuccess(false);
    }
  }

  componentDidMount() {
    this.getDataPoints();
  }

  render() {
    // Arrange the attacks information in a table
    const attacksImagesContainer = [];
    const attackImages = [];
    for (var i = 0; i < this.state.info.length; i++) {
      attackImages.push(
        <div class="container">
          <div class="overlay">
            <div class="image_title">
              {this.state.info[i].start_date} - {this.state.info[i].end_date}
              <p class="image_description">{this.state.info[i].desc}</p>
            </div>
          </div>
          <img
            src={require("../images/" + this.state.info[i].img).default}
            alt=""
            class="image"
          />
        </div>
      );
    }

    return (
      <div>
        <h1 className="infoTitle">Terror Waves Information</h1>
        <div class="imagesContainer">{attackImages}</div>
      </div>
    );
  }
}

export default TerrorTableTest;
