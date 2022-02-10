import React,{useEffect, useState} from 'react';
import "./Manage.css";
import {Button,Popover,Modal,Input,Select,Spin} from "antd";
import DatePicker,{ Calendar , utils } from "react-modern-calendar-datepicker";
import { useHistory } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {setProfile} from "../../Store/Action";
import { toast } from 'react-toastify';
import axios from 'axios';
import Env from "../../Constant/Env.json";
import moment from 'jalali-moment';
import FormatHelper from "../../Helper/FormatHelper";
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
    const dispatch = useDispatch();

    const profile = useSelector(state=>state.Reducer.profile);

    const [step , setStep]=useState(0);
    const [modal , setModal]=useState(false);

    const [turnList , setTurnList]=useState(null);
    const [times , setTimes]=useState(null);
    const [services , setServices]=useState(null);
    
    const [selectedDayCalendar, setSelectedDayCalendar]=useState(null);
    const [selectedDay, setSelectedDay]=useState(null);
    const [date , setDate]=useState(null);
    
    const [selectedTime , setSelectedTime]=useState(null);
    const [name , setName]=useState("");
    const [service , setService]=useState(null);

    const [selectedTurn , setSelectedTurn]=useState(null);

    const array = [1,2,3,4,5,6,7,8,9];


    const getQueue=async(index)=>{
        const token = localStorage.getItem("token");
            if(index===undefined){
                    try{
                        const response = await axios.get(Env.baseUrl + "/rqueue/turn/",{
                            headers:{
                                "Authorization":"Token "+token
                            }
                        });
                        setTurnList(response.data.results);
                    }catch({err,response}){
                            toast.error(response && response.data.message,{
                                position:"bottom-left"
                            });
                        }
                }else{
                    try{
                        const response = await axios.get(Env.baseUrl +`/rqueue/turn/?created_at=${index}`,{
                            headers:{
                                "Authorization":"Token "+token
                            }
                        });
                        setTurnList(response.data.results);
                    }catch({err,response}){
                            toast.error(response && response.data.message,{
                                position:"bottom-left"
                            });
                        }
                }
            }

            const getServices=async()=>{
                const token = localStorage.getItem("token");
                try{
                    const response = await axios.get(Env.baseUrl + "/service/service/",{
                        headers:{
                            "Authorization":"Token "+token
                        }
                    });
                    setServices(response.data.results);
                }catch({err , response}){
                    toast.error(response && response.data.message,{
                        position:"bottom-left"
                    })
                }
            }
            
    const nextHandler=async()=>{
        const token = localStorage.getItem("token");
        if(step===0 && selectedDay===null){
            toast.warning("لطفا تاریخ را انتخاب کنید",{
                position:"bottom-left"
            });
        }else if(step===0 && selectedDay!==null){
            try{
                const response = await axios.post(Env.baseUrl + "/rqueue/turn-service-list/",{
                    service_id:profile.employee_services[0].obb_service.service,
                    organization_brand_id:profile.employee.obp_id,
                    date: moment.from(FormatHelper.toEnglishString(date.replace("/","-").replace("/","-")), 'fa', 'YYYY/MM/DD').format('YYYY-MM-DD'),
                    lat:"35.6992",
                    long:"51.3378",
                    priority:1,
                    meter:100
                },
                {
                    headers:{
                        "Authorization":"Token "+ token
                    }
                });
                setTimes(response.data.ContentData[0].turns);
                setStep(step + 1);
            }catch({err,response}){
                toast.error(response && response.data.message,{
                    position:"bottom-left"
                })
            }
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
                try{
                    const response = await axios.post(Env.baseUrl + "/rqueue/register-turn/",{
                        turn_id:selectedTime,
                        is_other:true,
                        other_info:{
                            first_name:name,
                            service:service
                        }
                    },
                    {
                        headers:{
                            "Authorization":"Token "+ token
                        }
                    });
                    if(response.data.Header.Status===200){
                        setStep(0);
                        setModal(false);
                        setSelectedTime(null);
                        setSelectedDay(null);
                        setName("");
                        setService(null);
                        toast.success("نوبت با موفقیت ثبت شد",{
                            position:"bottom-left"
                        });
                    }else{
                        toast.error("خطا در برقراری ارتباط",{
                            position:"bottom-left"
                        });
                    }
                }catch({err,response}){
                    toast.error(response && response.data.message,{
                        position:"bottom-left"
                    });
                }
            }
        }
    }

    const itemMenu = (
        <div className='manage-item-popover-menu'>
          <div onClick={()=>changeStatus("present")} style={{borderBottom:'1px solid #E2E8F0'}}>
              <img src={presentIcon} alt="present" />
              حضور مشتری
          </div>
          <div onClick={()=>changeStatus("absent")} style={{borderBottom:'1px solid #E2E8F0'}}>
              <img src={absentIcon} alt="absent" />
              لغو / عدم حضور مشتری
          </div>
          <div>
              <img src={editIcon} alt="edit" />
              ویرایش نوبت مشتری
          </div>
        </div>
    );

    const getProfile=async()=>{
        const token = localStorage.getItem("token");
        try{
            const response = await axios.get(Env.baseUrl + "/accounts/profile/",{
                headers:{
                    "Authorization":"Token "+token
                }
            });
            dispatch(setProfile(response.data.ContentData));
        }catch({err,response}){
            toast.error(response && response.data.message,{
                position:"bottom-left"
            })
        }
    }

    const changeStatus=async(index)=>{
        const token = localStorage.getItem("token");
        try{
            const response = await axios.patch(Env.baseUrl + `/rqueue/turn/${selectedTurn}/`,{
                status:"reserved",
                presence_status:index
            },
            {
                headers:{
                    "Authorization":"Token "+token
                }
            });
            dispatch(setProfile(response.data.ContentData));
        }catch({err,response}){
            toast.error(response && response.data.message,{
                position:"bottom-left"
            })
        }
    }

    useEffect(()=>{
        getQueue();
        getProfile();
        getServices();
        setSelectedDayCalendar(utils('fa').getToday()); 
    },[])
    
    useEffect(()=>{
        if(selectedDay){
            setDate(FormatHelper.toPersianString(selectedDay.year+"/"+selectedDay.month+"/"+selectedDay.day));
        }
    },[selectedDay])

    useEffect(async()=>{
        setDate(FormatHelper.toPersianString(selectedDayCalendar.year+"/"+selectedDayCalendar.month+"/"+selectedDayCalendar.day));
        if(selectedDayCalendar){
            getQueue(moment.from(FormatHelper.toEnglishString(date.replace("/","-").replace("/","-")), 'fa', 'YYYY/MM/DD').format('YYYY-MM-DD'));
        }
    },[selectedDayCalendar])

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
                                    minimumDate={utils('fa').getToday()}
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
                                {times && times.length>0 && times.map((data,index)=>(
                                    <div 
                                        onClick={()=>{
                                            if(data.status!=="reserved"){
                                                setSelectedTime(data.id);
                                            }
                                        }}
                                        style={data.status==="reserved" ? {opacity:".5"} : {opacity:"1"}}
                                        className={selectedTime===index ? "manage-modal-selected-time" : ""}
                                    >
                                        {FormatHelper.toPersianString(moment(data.time).locale('fa').format('HH:mm'))}
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
                                            {services && services.length>0 && services.map((data  , index)=>(
                                                <Option key={index} value={data.id}>{data.name}</Option>
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
                                    <div style={{margin:"0 15px"}}>
                                        {FormatHelper.toPersianString(selectedDay.year+"/"+selectedDay.month+"/"+selectedDay.day)}
                                    </div>
                                    <div style={{margin:"0 15px"}}>
                                            {times && times.map((data)=>{
                                                    if(data.id===selectedTime){
                                                        return FormatHelper.toPersianString(moment(data.time).locale('fa').format('HH:mm'))
                                                    }
                                                })
                                            }
                                    </div>
                                    <div style={{margin:"0 15px"}}>{name}</div>
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
                    {selectedDayCalendar &&
                        <div>نوبت های  {" "}
                            {FormatHelper.toPersianString(selectedDayCalendar.day)}
                            {selectedDayCalendar.month===1 && " فروردین "}
                            {selectedDayCalendar.month===2 && " اردیبهشت "}
                            {selectedDayCalendar.month===3 && " خرداد "}
                            {selectedDayCalendar.month===4 && " تیر "}
                            {selectedDayCalendar.month===5 && " مرداد "}
                            {selectedDayCalendar.month===6 && " شهریور "}
                            {selectedDayCalendar.month===7 && " مهر "}
                            {selectedDayCalendar.month===8 && " آبان "}
                            {selectedDayCalendar.month===9 && " آذر "}
                            {selectedDayCalendar.month===10 && " دی "}
                            {selectedDayCalendar.month===11 && " بهمن "}
                            {selectedDayCalendar.month===12 && " اسفند "}
                            {FormatHelper.toPersianString(selectedDayCalendar.year)}
                        </div>
                    }
                    <Button
                        onClick={()=>setModal(true)}
                    >
                        <img src={plusIcon} alt="new" />
                        ایجاد نوبت
                    </Button>
                </div>
                <div className='manage-right-list'>
                    {turnList===null &&
                        <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                            <Spin size='large'/>
                        </div>
                    }
                    {turnList && turnList.length>0 && turnList.map((data,index)=>(
                        <div key={index}>
                            <Popover
                                placement="bottomLeft" 
                                title={""}
                                onVisibleChange={()=>setSelectedTurn(data.id)}
                                content={itemMenu}
                                trigger="click"
                            >
                                <img src={menuIcon} alt="menu" />
                            </Popover>
                            {data.others_info ? 
                                <div>
                                    <div>{data.others_info.first_name}</div>
                                    <div>
                                        {services.map((serv)=>{
                                            if(serv.id===data.others_info.service){
                                                return serv.name
                                            }
                                        })}
                                    </div>
                                </div>
                            :
                                <div>
                                    <div>{data.user.first_name} {" "} {data.user.last_name}</div>
                                    <div>{data.queue_list.service.name}</div>
                                </div>
                            }
                            <div>
                                {data.presence_status==="Pending" &&
                                    <div className='manage-right-list-item-label'>
                                        در انتظار
                                    </div>
                                }
                                {data.presence_status==="Present" &&
                                    <div className='manage-right-list-item-label-present'>
                                        حضور
                                    </div>
                                }
                                {data.presence_status==="Absent" &&
                                    <div className='manage-right-list-item-label-absent'>
                                        عدم حضور
                                    </div>
                                }
                                <div>
                                    <img src={clockIcon} alt="time" />
                                    <div>
                                        {FormatHelper.toPersianString(moment(data.time).locale('fa').format('HH:mm'))}
                                    </div>
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