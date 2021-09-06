import React, { Component } from "react";
import "../Pages.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

class DatePicker extends Component {
  state = {
    dateValue: new Date(),
    startDate: new Date(1970, 1, 1),
    enddate: new Date(2019, 1, 1),
  };
  setDate = (e) => {
    if (e.value === null) {
      console.log("error");
    }
    this.props.updateDate(e.value);
  };
  render() {
    return (
      <div className="DatePicker">
        <DatePickerComponent
          placeholder="Select Date"
          min={this.state.startDate}
          max={this.state.enddate}
          format="dd-MM-yy"
          onChange={this.setDate}
        ></DatePickerComponent>
      </div>
    );
  }
}

export default DatePicker;
