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
	}
	
	render() {
		this.getAttackInformation();

		// Arrange the attacks information in a table
		const attacks = []
		for (var i=0; i < this.state.city.length; i++) {
			attacks.push(<tr><td>{this.state.city[i]}</td><td>{this.state.attackInformation[i]}</td></tr>)
		}
	
		return (
		  <div>
			  <table
				id="information_table"
				style={{
				  fontFamily: "candara",
				  textAlign: "center",
				  fontSize: "12",
				  width: "80%",
				  border: "1px solid black",
				  background: "white"
				}}
			  >
				<tr>
				  <th>City</th>
				  <th>Attack Information</th>
				</tr>
				{attacks}
			  </table>
		  </div>
		);
	}
}	

export default AttacksTable;
