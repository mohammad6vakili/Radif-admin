import React, { useState } from 'react';
import "./Statistic.css";
import DatePicker from 'react-modern-calendar-datepicker';
import grayCalendar from "../../assets/images/GrayCalendar.svg";
import { Select , Button } from 'antd';
const {Option}=Select;

const Statistic=()=>{

    const [fromDate , setFromDate]=useState(null);
    const [toDate , setToDate]=useState(null);
    const [branch , setBranch]=useState(null);
    const [service , setService]=useState(null);
    const array = [1,1,1,1,1,1];

    return(
        <div className='statistic'>
            <div className="statistic-header">
                <div style={{position:"relative"}}>
                    <DatePicker
                        value={fromDate}
                        inputClassName="step-date-picker"
                        onChange={setFromDate}
                        inputPlaceholder="انتخاب تاریخ"
                        colorPrimary="#f1910c"
                        colorPrimaryLight="#f1910c50"
                        shouldHighlightWeekends
                        locale="fa"
                    />
                    <img style={{position:"absolute",left:"7px",top:"25%",zIndex:"9999"}} src={grayCalendar} alt="calendar" />
                </div>
                <div style={{position:"relative"}}>
                    <DatePicker
                        value={toDate}
                        inputClassName="step-date-picker"
                        onChange={setToDate}
                        inputPlaceholder="انتخاب تاریخ"
                        colorPrimary="#f1910c"
                        colorPrimaryLight="#f1910c50"
                        shouldHighlightWeekends
                        locale="fa"
                    />
                    <img style={{position:"absolute",left:"7px",top:"25%",zIndex:"9999"}} src={grayCalendar} alt="calendar" />
                </div>
                <div className='statistic-header-select-wrapper'>
                    <Select
                        placeholder="انتخاب کنید"
                        onChange={(value)=>setService(value)}
                    >
                        {array.map((data,index)=>(
                            <Option value={index}>خدمت {index}</Option>
                        ))}
                    </Select>
                </div>
            </div>
        </div>
    )
}
export default Statistic;