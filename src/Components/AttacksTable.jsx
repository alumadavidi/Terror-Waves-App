import React, { Component } from "react";
import axios from "axios";

class AttacksTable extends Component {
	constructor() {
		super();
		this.state = {
			info: [],
			success: false
		};
	}

    componentDidUpdate(prevProps) {
        if (prevProps.date !== this.props.date || this.state.success === false) {
			this.getDataPoints();
        }
	}
		
	async getDataPoints() {
		try {
			// Get attacks the day after the selected date
			var nextDay = new Date(this.props.date)
			nextDay.setDate(nextDay.getDate() + 2);
			nextDay = nextDay.toISOString().slice(0, 10);

			let attacksResponse = await axios.get("/AttacksInfo", {
				params: {
					date : nextDay
				}
			});
			var attacksInfo = [];
			attacksResponse.data.map((attacksData) => {
				attacksInfo.push({
					city: attacksData.city,
					wounded: attacksData.nwound,
					deaths: attacksData.ndeath,
					summary: attacksData.summary
				});
			})

			this.setState({
				info: attacksInfo,
				success: true
			});
		} catch (err) {
			this.setState({
				success: false
			});
        }
	}
	
	render() {
		// Arrange the attacks information in a table
		const attacks = []
		if (this.state.info.length == 0) {
			attacks.push(
				<tr style={{fontWeight: "bold"}}>
					<td className = "attacksTable" style={{fontSize: "22"}}>
						---
					</td>
					<td className = "attacksTable">
						---
					</td>
					<td className = "attacksTable">
						---
					</td>
					<td className = "attacksTable">
						---
					</td>
				</tr>
			)
		} else {
			for (var i=0; i < this.state.info.length; i++) {
				let summary;
				if (this.state.info[i].summary === "\"") {
					summary =
					<td className = "attacksTable">
						---
					</td>
				} else {
					summary =
					<td className = "attacksTable" style={{textAlign: "left"}}>
						{this.state.info[i].summary}
					</td>
				}
				attacks.push(
					<tr>
						<td className = "attacksTable">
							{this.state.info[i].city}
						</td>
						<td className = "attacksTable">
							{this.state.info[i].wounded}
						</td>
						<td className = "attacksTable">
							{this.state.info[i].deaths}
						</td>
						{summary}
					</tr>
				)
			}
		}
			
		return (
		  <div>
			  <table
			  	className = "attacksTable"
				id="information_table"
				style={{
				  width: "96%",
				  background: "white"
				}}
			  >
				<tbody>
					<tr>
						<th className = "attacksTable" style={{width: "18%"}}>City</th>
						<th className = "attacksTable" style={{width: "10%"}}>Wounded</th>
						<th className = "attacksTable" style={{width: "10%"}}>Deaths</th>
						<th className = "attacksTable" style={{width: "62%"}}>Attack Information</th>
					</tr>
					{attacks}
				</tbody>
			  </table>
		  </div>
		);
	}
}	

export default AttacksTable;
