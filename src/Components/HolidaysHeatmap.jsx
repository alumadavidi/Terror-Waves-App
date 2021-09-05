import React, { Component } from "react";
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';
import axios from "axios";


class HolidaysHeatmap extends Component {
    constructor() {
        super();
        this.state = {
            dataPoints: [],
            muslimHolidays: [],
            jewishHolidays: [],
            christianHolidays: []
        };
    }
   
    componentDidMount() {
        this.getDataPoints();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.startDate !== this.props.startDate) {
            this.getDataPoints();
        }
    }
    
    async getDataPoints() {
        let response = await axios.get("/Holidays", {
            params: {
                startDate : this.props.startDate,
                endDate : this.props.endDate
            }
        });
        var dps = [], muslimDps = [], jewishDps = [], christianDps = [];
        response.data.map((holidaysData) => {
            var count = 0;
            var date = new Date(holidaysData.date)
		    date.setDate(date.getDate());
		    var formattedDate = date.toISOString().slice(0, 10);
            formattedDate = formattedDate.split('-').join('/');

            // Muslim holidays
            if (holidaysData.Eid_al_Fitr === 1) {
                muslimDps.push({ date: formattedDate, holiday: "Eid al Fitr" });
                count += 1;
            }
            if (holidaysData.Arafat_Day === 1) {
                muslimDps.push({ date: formattedDate, holiday: "Arafat Day" });
                count += 1;
            }
            if (holidaysData.Islamic_New_Year === 1) {
                muslimDps.push({ date: formattedDate, holiday: "Islamic New Year" });
                count += 1;
            }
            if (holidaysData.Sacrifice_Feast === 1) {
                muslimDps.push({ date: formattedDate, holiday: "Sacrifice Feast" });
                count += 1;
            }
            if (holidaysData.Prophet_Muhammad_Birthday === 1) {
                muslimDps.push({ date: formattedDate, holiday: "Prophet Muhammad Birthday" });
                count += 1;
            }
            if (holidaysData.Ramadan === 1) {
                muslimDps.push({ date: formattedDate, holiday: "Ramadan" });
                count += 1;
            }
            // Jewish holidays
            if (holidaysData.Passover === 1) {
                jewishDps.push({ date: formattedDate, holiday: "Passover" });
                count += 1;
            }
            if (holidaysData.Memorial_Day === 1) {
                jewishDps.push({ date: formattedDate, holiday: "Memorial Day" });
                count += 1;
            }
            if (holidaysData.Independence_Day === 1) {
                jewishDps.push({ date: formattedDate, holiday: "Independence Day" });
                count += 1;
            }
            if (holidaysData.Lag_BOmer === 1) {
                jewishDps.push({ date: formattedDate, holiday: "Lag BOmer" });
                count += 1;
            }
            if (holidaysData.Shavuot === 1) {
                jewishDps.push({ date: formattedDate, holiday: "Shavuot" });
                count += 1;
            }
            if (holidaysData.Rosh_Hashanah === 1) {
                jewishDps.push({ date: formattedDate, holiday: "Rosh Hashanah" });
                count += 1;
            }
            if (holidaysData.Yom_Kippur === 1) {
                jewishDps.push({ date: formattedDate, holiday: "Yom Kippur" });
                count += 1;
            }
            if (holidaysData.Sukkot === 1) {
                jewishDps.push({ date: formattedDate, holiday: "Sukkot" });
                count += 1;
            }
            if (holidaysData.Hanukkah === 1) {
                jewishDps.push({ date: formattedDate, holiday: "Hanukkah" });
                count += 1;
            }
            if (holidaysData.Purim === 1) {
                jewishDps.push({ date: formattedDate, holiday: "Purim" });
                count += 1;
            }
            // Christian holidays
            if (holidaysData.New_Year_Day === 1) {
                christianDps.push({ date: formattedDate, holiday: "New Year Day" });
                count += 1;
            }
            if (holidaysData.Christmas_Day === 1) {
                christianDps.push({ date: formattedDate, holiday: "Christmas Day" });
                count += 1;
            }
            if (holidaysData.Easter === 1) {
                christianDps.push({ date: formattedDate, holiday: "Easter" });
                count += 1;
            }

            if (count > 0) {
                dps.push({ date: formattedDate, count: count });
            }
        })

        this.setState({
            dataPoints: dps,
            muslimHolidays: muslimDps,
            jewishHolidays : jewishDps,
            christianHolidays : christianDps
        });
    }
    
    render() {
        return (
            <div>
                <HeatMap
                    value = {this.state.dataPoints}
                    rectSize = {16}
                    width = {140}
                    panelColors = {{
                        0: '#f2dbdb',
                        1: '#ff7779'
                    }}
                    legendCellSize = {0}
                    startDate = {new Date(this.props.startDate)}
                    endDate = {new Date(this.props.endDate)}
                    rectRender = {(props, data) => {
                        var muslimHolidaysStr = "", jewishHolidaysStr = "", christianHolidaysStr = "";
                        var first = true, i;
                        // Change date format
                        var date = new Date(data.date);
                        date.setDate(date.getDate() + 1);
                        date = date.toISOString().slice(0, 10);
                        date = date.split('-').join('/');

                        for(i=0; i < this.state.muslimHolidays.length; i++) {
                            if (this.state.muslimHolidays[i].date === date) {
                                if (!first) {
                                    muslimHolidaysStr += ", "
                                }
                                muslimHolidaysStr += this.state.muslimHolidays[i].holiday;
                                first = false
                            }
                        }
                        for(i=0; i < this.state.jewishHolidays.length; i++) {
                            if (this.state.jewishHolidays[i].date === date) {
                                jewishHolidaysStr += this.state.jewishHolidays[i].holiday;
                            }
                        }
                        for(i=0; i < this.state.christianHolidays.length; i++) {
                            if (this.state.christianHolidays[i].date === date) {
                                christianHolidaysStr += this.state.christianHolidays[i].holiday;
                            }
                        }

                        if (new Date(this.props.startDate) <= new Date(data.date)) {
                            return (
                                <Tooltip
                                    key={props.key}
                                    placement="top"
                                    content={<span><b>Date:</b> {data.date}<br></br><b>Muslim Holidays:</b> {muslimHolidaysStr != "" ? muslimHolidaysStr : 'X'}
                                        <br></br><b>Jewish Holidays:</b> {jewishHolidaysStr != "" ? jewishHolidaysStr : 'X'}
                                        <br></br><b>Christian Holidays:</b> {christianHolidaysStr != "" ? christianHolidaysStr : 'X'}</span>}>
                                    <rect {...props}/>
                                </Tooltip>                            
                            );
                        } else {
                            return (
                                <Tooltip
                                    key={props.key}
                                    placement="top"
                                    content={<span>Irrelevant date</span>}>
                                    <rect {...props}/>
                                </Tooltip>                            
                            );
                        }
                    }}
                    onRef={ref => this.holidays_heatmap = ref}
                />
            </div>
        );
    }
}

export default HolidaysHeatmap;
