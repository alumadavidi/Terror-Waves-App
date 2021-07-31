import React, { Component } from "react";
import axios from "axios";

class AttacksTable extends Component {
	constructor() {
		super();
		this.state = {
			city: [],
			attackInformation: [],
			info: []
		};
	}

	/*
    componentDidMount() {
        this.getDataPoints();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.date !== this.props.date) {
			this.getDataPoints();
        }
	}
	*/
	
	async getDataPoints() {
        let attacksResponse = await axios.get("/Anomalies"); // Change to "/AttacksInfo"
        var attacksInfo = [];
        attacksResponse.data.map((attacksData) => {
			attacksInfo.push({ city: attacksData.city, description: attacksData.description });
        })

        this.setState({
            info: attacksInfo
        });
	}
	
	getAttackInformation() {
		var date = this.props.date;
		alert("Table: " + date);

		this.state.city = ["Tel-Aviv", "Jerusalem"]
		this.state.attackInformation = ["Attack Attack Attack Attack Attack Attack Attack Attack Attack Attack Attack Attack Attack Attack Attack Attack Attack Attack Attack", "Attack Attack Attack"]
	}
	
	render() {
		this.getAttackInformation();

		// Arrange the attacks information in a table
		const attacks = []
		if (this.state.city.length == 0) {
			attacks.push(<tr style={{fontWeight: "bold"}}><td style={{fontSize: "22"}}>---</td><td>---</td></tr>)
		} else {
			for (var i=0; i < this.state.city.length; i++) {
				attacks.push(<tr><td>{this.state.city[i]}</td><td style={{textAlign: "left"}}>{this.state.attackInformation[i]}</td></tr>)
			}
		}

		/*
		// Arrange the attacks information in a table
		const attacks = []
		if (this.state.info.length == 0) {
			attacks.push(<tr style={{fontWeight: "bold"}}><td style={{fontSize: "22"}}>---</td><td>---</td></tr>)
		} else {
			for (var i=0; i < this.state.info.length; i++) {
				attacks.push(<tr><td>{this.state.info[i].city}</td><td style={{textAlign: "left"}}>{this.state.info[i].description}</td></tr>)
			}
		}
		*/
	
		return (
		  <div>
			  <table
				id="information_table"
				style={{
				  width: "96%",
				  background: "white"
				}}
			  >
				<tbody>
					<tr>
					<th style={{width: "20%"}}>City</th>
					<th style={{width: "80%"}}>Attack Information</th>
					</tr>
					{attacks}
				</tbody>
			  </table>
		  </div>
		);
	}
}	

export default AttacksTable;
