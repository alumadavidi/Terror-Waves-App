import React, { Component } from "react";
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';
import axios from "axios";


class HolidaysHeatmap extends Component {
    constructor() {
        super();
        this.state = {
            startDate: new Date("2016/01/12"),
            endDate: new Date("2016/02/11"),
            dataPoints: [],
            muslimHolidays: [],
            jewishHolidays: [],
            christianHolidays: []
        };
    }

    /*
    componentDidMount() {
        this.getDataPoints();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.startDate !== this.props.startDate) {
            this.getDataPoints();
        }
    }
    */

    async getDataPoints() {
        let response = await axios.get("/Holidays", {
            params: {
                startDate : this.props.startDate,
                endDate : this.props.endDate
            }
          });
        var dps = [], muslimDps = [], jewishDps = [], christianDps = [];
        var count = 0;
        response.data.map((holidaysData) => {
            // Muslim holidays
            if (holidaysData.Eid_al_Fitr === 1) {
                muslimDps.push({ date: holidaysData.date, holiday: "Eid al Fitr" });
                count += 1;
            }
            if (holidaysData.Arafat_Day === 1) {
                muslimDps.push({ date: holidaysData.date, holiday: "Arafat Day" });
                count += 1;
            }
            if (holidaysData.Islamic_New_Year === 1) {
                muslimDps.push({ date: holidaysData.date, holiday: "Islamic New Year" });
                count += 1;
            }
            if (holidaysData.Sacrifice_Feast === 1) {
                muslimDps.push({ date: holidaysData.date, holiday: "Sacrifice Feast" });
                count += 1;
            }
            if (holidaysData.Prophet_Muhammad_Birthday === 1) {
                muslimDps.push({ date: holidaysData.date, holiday: "Prophet Muhammad Birthday" });
                count += 1;
            }
            if (holidaysData.Ramadan === 1) {
                muslimDps.push({ date: holidaysData.date, holiday: "Ramadan" });
                count += 1;
            }
            // Jewish holidays
            if (holidaysData.Passover === 1) {
                jewishDps.push({ date: holidaysData.date, holiday: "Passover" });
                count += 1;
            }
            if (holidaysData.Memorial_Day === 1) {
                jewishDps.push({ date: holidaysData.date, holiday: "Memorial Day" });
                count += 1;
            }
            if (holidaysData.Independence_Day === 1) {
                jewishDps.push({ date: holidaysData.date, holiday: "Independence Day" });
                count += 1;
            }
            if (holidaysData.Lag_BOmer === 1) {
                jewishDps.push({ date: holidaysData.date, holiday: "Lag BOmer" });
                count += 1;
            }
            if (holidaysData.Shavuot === 1) {
                jewishDps.push({ date: holidaysData.date, holiday: "Shavuot" });
                count += 1;
            }
            if (holidaysData.Rosh_Hashanah === 1) {
                jewishDps.push({ date: holidaysData.date, holiday: "Rosh Hashanah" });
                count += 1;
            }
            if (holidaysData.Yom_Kippur === 1) {
                jewishDps.push({ date: holidaysData.date, holiday: "Yom Kippur" });
                count += 1;
            }
            if (holidaysData.Sukkot === 1) {
                jewishDps.push({ date: holidaysData.date, holiday: "Sukkot" });
                count += 1;
            }
            if (holidaysData.Hanukkah === 1) {
                jewishDps.push({ date: holidaysData.date, holiday: "Hanukkah" });
                count += 1;
            }
            if (holidaysData.Purim === 1) {
                jewishDps.push({ date: holidaysData.date, holiday: "Purim" });
                count += 1;
            }
            // Christian holidays
            if (holidaysData.New_Year_Day === 1) {
                christianDps.push({ date: holidaysData.date, holiday: "New Year Day" });
                count += 1;
            }
            if (holidaysData.Christmas_Day === 1) {
                christianDps.push({ date: holidaysData.date, holiday: "Christmas Day" });
                count += 1;
            }
            if (holidaysData.Easter === 1) {
                christianDps.push({ date: holidaysData.date, holiday: "Easter" });
                count += 1;
            }

            if (count > 0) {
                dps.push({ date: holidaysData.date, count: count });
            }
        })

        this.setState({
            dataPoints: dps,
            muslimHolidays: muslimDps,
            jewishHolidays : jewishDps,
            christianHolidays : christianDps
        });
    }

    
    getHolidaysDataPoints() {
        var startDate = this.props.startDate;
		var endDate = this.props.endDate;
        
        var dps = [
            { date: '2016/01/15', count: 1 },
            { date: '2016/01/16', count: 1 },
            { date: '2016/01/17', count: 2 },
            { date: '2016/02/01', count: 4 },
            { date: '2016/02/02', count: 3 },
            { date: '2016/02/10', count: 1 },
            ];
        return dps;
	}
    
    
    render() {
        return (
            <div>
                <HeatMap
                    value = {this.getHolidaysDataPoints()}
                    //value = {this.state.dataPoints}
                    rectSize = {16}
                    width = {140}
                    panelColors= {{
                        0: '#f2dbdb',
                        1: '#ff7779'
                      }}
                    legendCellSize = {0}
                    startDate = {this.state.startDate}
                    endDate = {this.state.endDate}
                    rectRender = {(props, data) => {
                        var muslimHolidaysStr = "", jewishHolidaysStr = "", christianHolidaysStr = "";
                        var dateStr = new Date(data.date).toString();
                        var first = true;
                        for(var i=0; i < this.state.muslimHolidays.length; i++) {
                            if (new Date(this.state.muslimHolidays[i].date).toString() === dateStr) {
                                if (!first) {
                                    muslimHolidaysStr += ", "
                                }
                                muslimHolidaysStr += this.state.muslimHolidays[i].holiday
                                first = false
                            }
                        }
                        for(var i=0; i < this.state.jewishHolidays.length; i++) {
                            if (new Date(this.state.jewishHolidays[i].date).toString === dateStr) {
                                jewishHolidaysStr += this.state.jewishHolidays[i].holiday
                            }
                        }
                        for(var i=0; i < this.state.christianHolidays.length; i++) {
                            if (new Date(this.state.christianHolidays[i].date).toString === dateStr) {
                                christianHolidaysStr += this.state.christianHolidays[i].holiday
                            }
                        }

                        /*
                        if (new Date("2016/01/12").toString() === new Date(data.date).toString()) {
                            muslimHolidaysStr = "Eid al-Fitr, Ramadan"
                            christianHolidaysStr = "Christmas Day"
                        }
                        */


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
                    }}
                    onRef={ref => this.holidays_heatmap = ref}
                />
            </div>
        );
    }
}

export default HolidaysHeatmap;
