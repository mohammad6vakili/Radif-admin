import React, { useState } from 'react';
import "./Report.css";
import DatePicker from 'react-modern-calendar-datepicker';
import grayCalendar from "../../assets/images/GrayCalendar.svg";
import { Select , Button } from 'antd';
import FormatHelper from "../../Helper/FormatHelper";
import Chart from "react-apexcharts";
const {Option}=Select;



const Report=()=>{

    const [fromDate , setFromDate]=useState(null);
    const [toDate , setToDate]=useState(null);
    const [branch , setBranch]=useState(null);
    const [service , setService]=useState(null);
    const array = [1,1,1,1,1,1,1,1,1,1,1];

    return(
        <div className='report'>
             <div className="report-header">
                <div style={{position:"relative"}}>
                    <DatePicker
                        value={fromDate}
                        inputClassName="amar-date-picker"
                        onChange={setFromDate}
                        calendarClassName="amar-calendar"
                        inputPlaceholder="از تاریخ"
                        colorPrimary="#f1910c"
                        colorPrimaryLight="#f1910c50"
                        shouldHighlightWeekends
                        locale="fa"
                    />
                    <img style={{position:"absolute",right:"80%",top:"20%",zIndex:"9999"}} src={grayCalendar} alt="calendar" />                
                </div>
                <div style={{position:"relative"}}>
                    <DatePicker
                        value={toDate}
                        inputClassName="amar-date-picker"
                        onChange={setToDate}
                        calendarClassName="amar-calendar"
                        inputPlaceholder="تا تاریخ"
                        colorPrimary="#f1910c"
                        colorPrimaryLight="#f1910c50"
                        shouldHighlightWeekends
                        locale="fa"
                    />
                    <img style={{position:"absolute",right:"80%",top:"20%",zIndex:"9999"}} src={grayCalendar} alt="calendar" />
                </div>
                <div className='statistic-header-select-wrapper'>
                    <Select
                        placeholder="خدمت"
                        onChange={(value)=>setService(value)}
                    >
                        {array.map((data,index)=>(
                            <Option value={index}>خدمت {index}</Option>
                        ))}
                    </Select>
                </div>
                <div className='statistic-header-select-wrapper'>
                    <Button>جستجو</Button>
                </div>
            </div>
            <div className='report-list-wrapper'>
                <div className='report-list-header'>
                    <div className='report-item-10'>نوبت</div>
                    <div className='report-item-20'>تاریخ</div>
                    <div className='report-item-25'>خدمت</div>
                    <div className='report-item-10'>وضعیت</div>
                    <div className='report-item-10'>نوع نوبت</div>
                    <div className='report-item-10'>باجه</div>
                    <div className='report-item-15'>کاربر</div>
                </div>
                {array.map((data)=>(
                    <div className='report-list-item'>
                        <div className='report-item-10'>۱۲۳۴</div>
                        <div className='report-item-20'>۱۴۰۰/۰۳/۲۵</div>
                        <div className='report-item-25'>استعلام و تسویه خلافی خودرو</div>
                        <div className='report-item-10'>موفق</div>
                        <div className='report-item-10'>آنلاین</div>
                        <div className='report-item-10'>۲</div>
                        <div className='report-item-15'>عباس جعفری</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Report;