import React, { Component } from "react";

class AttacksTable extends Component {
	constructor() {
		super();
		this.state = {
			city: [],
			attackInformation: [],
		};
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
