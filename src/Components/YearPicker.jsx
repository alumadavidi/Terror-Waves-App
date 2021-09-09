import React, { Component } from "react";
import Select from 'react-select';


class YearPicker extends Component {
	constructor() {
		super();
        this.state = {
            selectedOption: {value: 2019, label: 2019},
          };
		this.handleChange = this.handleChange.bind(this);
	}

  handleChange(selectedOption) {
    this.setState({ selectedOption });
    this.props.updateModel(selectedOption.value);
  };

  getOptions() {
    var years = []
    for (var year = 2019; year >= 1970; year--) {
        years.push({value: year, label: year})
    }
    return years;
  }
  
  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={this.getOptions()}
      />
    );
  }
}

export default YearPicker;
