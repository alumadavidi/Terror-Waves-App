import React, { Component } from "react";
import axios from "axios";

class AttacksTable extends Component {
	constructor() {
		super();
		this.state = {
			info: []
		};
	}

    componentDidUpdate(prevProps) {
        if (prevProps.date !== this.props.date) {
			this.getDataPoints();
        }
	}
		
	async getDataPoints() {
		let attacksResponse = await axios.get("/AttacksInfo", {
			params: {
				date : this.props.date
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
            info: attacksInfo
        });
	}
	
	render() {
		// Arrange the attacks information in a table
		const attacks = []
		if (this.state.info.length == 0) {
			attacks.push(
				<tr style={{fontWeight: "bold"}}>
					<td style={{fontSize: "22"}}>
						---
					</td>
					<td>
						---
					</td>
					<td>
						---
					</td>
					<td>
						---
					</td>
				</tr>
			)
		} else {
			for (var i=0; i < this.state.info.length; i++) {
				attacks.push(
					<tr>
						<td>
							{this.state.info[i].city}
						</td>
						<td>
							{this.state.info[i].wounded}
						</td>
						<td>
							{this.state.info[i].deaths}
						</td>
						<td style={{textAlign: "left"}}>
							{this.state.info[i].summary}
						</td>
					</tr>
				)
			}
		}
			
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
						<th style={{width: "18%"}}>City</th>
						<th style={{width: "10%"}}>Wounded</th>
						<th style={{width: "10%"}}>Deaths</th>
						<th style={{width: "62%"}}>Attack Information</th>
					</tr>
					{attacks}
				</tbody>
			  </table>
		  </div>
		);
	}
}	

export default AttacksTable;
