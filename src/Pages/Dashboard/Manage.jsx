import React,{useEffect, useState} from 'react';
import "./Manage.css";
import {Button,Popover,Modal,Input,Select} from "antd";
import DatePicker,{ Calendar } from "react-modern-calendar-datepicker";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from "../../assets/images/logo.svg";
import successLogo from "../../assets/images/success-logo.svg";
import plusIcon from "../../assets/images/plus.svg";
import menuIcon from "../../assets/images/vertical-menu.svg";
import clockIcon from "../../assets/images/clock.svg";
import presentIcon from "../../assets/images/present.svg";
import absentIcon from "../../assets/images/absent.svg";
import editIcon from "../../assets/images/edit.svg";
import calendarStep from "../../assets/images/CalendarStep.svg";
import clockStep from "../../assets/images/ClockStep.svg";
import selectedClockStep from "../../assets/images/SelectedClockStep.svg";
import profileStep from "../../assets/images/ProfileStep.svg";
import selectedProfileStep from "../../assets/images/SelectedProfileStep.svg";
import grayCalendar from "../../assets/images/GrayCalendar.svg";
import line from "../../assets/images/line.svg";
const {Option}=Select;


const Manage=() =>{
    const history = useHistory();
    const [step , setStep]=useState(0);
    const [modal , setModal]=useState(false);
    const [selectedDayCalendar, setSelectedDayCalendar]=useState(null);
    const [selectedDay, setSelectedDay]=useState(null);
    const [selectedTime , setSelectedTime]=useState(null);
    const [name , setName]=useState("");
    const [service , setService]=useState(null);
    const array = [1,2,3,4,5,6,7,8,9];
    const timeArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

    const nextHandler=()=>{
        if(step===0 && selectedDay===null){
            toast.warning("لطفا تاریخ را انتخاب کنید",{
                position:"bottom-left"
            });
        }else if(step===1 && selectedTime===null){
            toast.warning("لطفا زمان مراجعه را انتخاب کنید",{
                position:"bottom-left"
            });
        }else if(step===2 && name===""){
            toast.warning("لطفا نام مشتری را وارد کنید",{
                position:"bottom-left"
            });
        }else if(step===2 && service===null){
            toast.warning("لطفا خدمت مورد نیاز را را انتخاب کنید",{
                position:"bottom-left"
            });
        }else{
            if(step !== 3){
                setStep(step+1);
            }else{
                setStep(0);
                setModal(false);
                setSelectedTime(null);
                setSelectedDay(null);
                setName("");
                setService(null);
                toast.success("نوبت با موفقیت ثبت شد",{
                    position:"bottom-left"
                });
            }
        }
    }

    const itemMenu = (
        <div className='manage-item-popover-menu'>
          <div style={{borderBottom:'1px solid #E2E8F0'}}>
              <img src={presentIcon} alt="present" />
              حضور مشتری
          </div>
          <div style={{borderBottom:'1px solid #E2E8F0'}}>
              <img src={absentIcon} alt="absent" />
              لغو / عدم حضور مشتری
          </div>
          <div>
              <img src={editIcon} alt="edit" />
              ویرایش نوبت مشتری
          </div>
        </div>
    );
    

    return(
        <div className='manage'>
            <Modal
                visible={modal}
                width={800}
                onCancel={()=>{
                    setStep(0);
                    setModal(false);
                    setSelectedTime(null);
                    setSelectedDay(null);
                    setName("");
                    setService(null);
                }}
                onOk={()=>{
                    setStep(0);
                    setModal(false);
                    setSelectedTime(null);
                    setSelectedDay(null);
                    setName("");
                    setService(null);
                }}
                closable={true}
            >
                <div className='modal manage-modal'>
                    <div className='modal-logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        ایجاد نوبت جدید
                    </div>
                    {step!==3 &&
                        <div className='manage-modal-steps'>
                            <div 
                                onClick={()=>step>=0 && setStep(0)}
                                className='step step-selected'
                            >
                                <img src={calendarStep} alt="step" />
                                <span>انتخاب تاریخ</span>
                            </div>

                            <img src={line} alt="line" />
                            
                            <div 
                                onClick={()=>step===2 && setStep(1)}
                                className={`step ${step>=1 && "step-selected"}`}
                            >
                                {step>=1 ?
                                    <img src={selectedClockStep} alt="step" />
                                    :
                                    <img src={clockStep} alt="step" />
                                }
                                <span>انتخاب زمان</span>
                            </div>

                            <img src={line} alt="line" />
                            
                            <div 
                                className={`step ${step===2 && "step-selected"}`}
                            >
                                {step===2 ?
                                    <img src={selectedProfileStep} alt="step" />
                                    :
                                    <img src={profileStep} alt="step" />
                                }
                                <span>اطلاعات مشتری</span>
                            </div>
                        </div>
                    }
                    <div className='manage-modal-step-body'>
                        {step===0 &&
                            <div style={{position:"relative"}}>
                                <DatePicker
                                    value={selectedDay}
                                    inputClassName="step-date-picker"
                                    onChange={setSelectedDay}
                                    inputPlaceholder="انتخاب تاریخ"
                                    colorPrimary="#f1910c"
                                    colorPrimaryLight="#f1910c50"
                                    shouldHighlightWeekends
                                    locale="fa"
                                />
                                <img style={{position:"absolute",left:"7px",top:"25%",zIndex:"9999"}} src={grayCalendar} alt="calendar" />
                            </div>
                        }
                        {step===1 &&
                            <div className='manage-modal-time-step'>
                                {timeArray.map((data,index)=>(
                                    <div 
                                        onClick={()=>setSelectedTime(index)}
                                        className={selectedTime===index ? "manage-modal-selected-time" : ""}
                                    >
                                        ۸:۱۵ - ۸:۳۰
                                    </div>
                                ))}
                            </div>
                        }
                        {step===2 &&
                            <>
                                <div className='manage-modal-personal-step'>
                                    <div>
                                        <div>نام و نام خانوادگی مشتری</div>
                                        <Input
                                            value={name}
                                            onChange={(e)=>setName(e.target.value)}
                                            placeholder='مثلا : محمد وکیلی' 
                                        />
                                    </div>
                                    <div>
                                        <div>نوع خدمت</div>
                                        <Select
                                            placeholder="انتخاب کنید"
                                            onChange={(value)=>setService(value)}
                                        >
                                            {array.map((data  , index)=>(
                                                <Option value={index}>خدمت {index}</Option>
                                            ))}
                                        </Select>
                                    </div>
                                </div>
                            </>
                        }
                        {step===3 &&
                            <div className='manage-modal-success'>
                                <img src={successLogo} alt="saf" />
                                <div>نوبت برای مشتری ردیف شد.</div>
                                <div 
                                    style={{
                                        width:"100%",
                                        marginTop:"5px",
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        color:"#475569",
                                        fontWeight:"600",
                                        fontSize:"18px"
                                    }}
                                >
                                    <div style={{margin:"0 15px"}}>۱۴۰۰/۰۲/۲۵</div>
                                    <div style={{margin:"0 15px"}}>۸:۱۵ - ۸:۳۰</div>
                                    <div style={{margin:"0 15px"}}>محمد وکیلی</div>
                                </div>
                            </div>
                        }
                    </div>
                    <Button 
                        onClick={nextHandler} 
                        className='manage-modal-next-btn'
                    >
                        {step===3 ? "ثبت و تایید" : "مرحله بعد"}
                    </Button>
                </div>
            </Modal>
            <div className='manage-right'>
                <div className='manage-right-title'>
                    <div>نوبت های  ۸ بهمن ۱۴۰۰</div>
                    <Button
                        onClick={()=>setModal(true)}
                    >
                        <img src={plusIcon} alt="new" />
                        ایجاد نوبت
                    </Button>
                </div>
                <div className='manage-right-list'>
                    {array.map((data)=>(
                        <div>
                            <Popover
                                placement="bottomLeft" 
                                title={""} 
                                content={itemMenu} 
                                trigger="click"
                            >
                                <img src={menuIcon} alt="menu" />
                            </Popover>
                            <div>
                                <div>محمد وکیلی</div>
                                <div>افتتاح حساب قرض الحسنه</div>
                            </div>
                            <div>
                                <div className='manage-right-list-item-label'>
                                    در انتظار
                                </div>
                                <div>
                                    <img src={clockIcon} alt="time" />
                                    <div>۱۲:۱۵ - ۱۲:۳۰</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='manage-left'>
                <Calendar
                    calendarClassName="manage-calendar"
                    value={selectedDayCalendar}
                    onChange={setSelectedDayCalendar}
                    colorPrimary="#f1910c"
                    colorPrimaryLight="#f1910c50"
                    shouldHighlightWeekends
                    locale='fa'
                />
            </div>
        </div>
    )
}
export default Manage;