import React, { useState } from 'react';
import "./Statistic.css";
import DatePicker from 'react-modern-calendar-datepicker';
import grayCalendar from "../../assets/images/GrayCalendar.svg";
import { Select , Button } from 'antd';
import FormatHelper from "../../Helper/FormatHelper";
import Chart from "react-apexcharts";
const {Option}=Select;

const Statistic=()=>{

    const [fromDate , setFromDate]=useState(null);
    const [toDate , setToDate]=useState(null);
    const [branch , setBranch]=useState(null);
    const [service , setService]=useState(null);
    const array = [1,1,1,1,1,1];
    const [dataOne , setDataOne] =useState({
        options: {
            chart: {
              id: "basic-bar"
            },
            colors: ['#5CBA94', '#8DCFB4','#BEE3D4'],
            tooltip: {
                enabled:false
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
              categories: ["", "", "", "", "", "", "", "", "",""]
            },
            stroke: {
                curve: 'stepline',
            },
            yaxis: {
                labels: {
                        align: 'left',
                    },
                    formatter: (val) => { return FormatHelper.toPersianString(val) },
            },
        },
          series: [
            {
              name: "series-1",
              data: [39, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
      });
    const [dataTwo,setDataTwo] =useState({
        options: {
            chart: {
              id: "basic-bar"
            },
            colors: ['#f1910c'],
            tooltip: {
                enabled:false
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
              categories: ["", "", "", "", "", "", "", "", "",""]
            },
            yaxis: {
                labels: {
                        align: 'left',
                        fontSize: '11px',
                        fontFamily: 'iranSans',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    formatter: (value) => { return FormatHelper.toPersianString(value) },
                },
            },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
      });
    const [dataThree,setDataThree] =useState({
        options: {
            legend: {
                show: false,
            },
            colors: ['#5CBA94', '#8DCFB4','#BEE3D4'],
            tooltip: {
                enabled:false
            },
            dataLabels: {
                formatter: function (val, opts) {
                    return FormatHelper.toPersianString(val.toFixed(0)) + "%"
                },
                style: {
                    fontSize: '14px',
                    fontFamily:"iranSans"
                },
            }
        },
        series: [44, 55, 41],
        labels: ['A', 'B', 'C']
      });

    return(
        <div className='statistic'>
            <div className="statistic-header">
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
                    <img style={{position:"absolute",right:"74%",top:"20%",zIndex:"9999"}} src={grayCalendar} alt="calendar" />                
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
                    <img style={{position:"absolute",right:"74%",top:"20%",zIndex:"9999"}} src={grayCalendar} alt="calendar" />
                </div>
                <div className='statistic-header-select-wrapper'>
                    <Select
                        placeholder="باجه"
                        onChange={(value)=>setBranch(value)}
                    >
                        {array.map((data,index)=>(
                            <Option value={index}>خدمت {index}</Option>
                        ))}
                    </Select>
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
            <div className='statistic-chart-wrapper'>
                <div>
                    <div>
                        <Chart
                            options={dataOne.options}
                            series={dataOne.series}
                            type="bar"
                        />
                    </div>
                    <div className='chart-title'>گزارش تعداد نوبت</div>
                </div>
                <div>
                    <div>
                        <Chart
                            options={dataTwo.options}
                            series={dataTwo.series}
                            type="bar"
                        />
                    </div>
                    <div className='chart-title'>رضایتمندی مراجعه کنندگان</div>
                </div>
                <div>
                    <div>
                        <Chart
                            options={dataThree.options}
                            series={dataThree.series}
                            type="donut"
                        />
                    </div>
                    <div className='chart-title'>تعداد نوبت بر اساس خدمت</div>
                </div>
            </div>
        </div>
    )
}
export default Statistic;