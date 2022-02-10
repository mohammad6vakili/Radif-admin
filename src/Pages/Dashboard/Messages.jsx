import React, { useState } from 'react';
import "./Messages.css";
import DatePicker from 'react-modern-calendar-datepicker';
import grayCalendar from "../../assets/images/GrayCalendar.svg";
import { SearchOutlined } from '@ant-design/icons';
import clockIcon from "../../assets/images/clock.svg";
import trashIcon from "../../assets/images/trash.svg";
import ticketIcon from "../../assets/images/ticket.svg";
import logo from "../../assets/images/logo.svg";
import { Input , Modal , Button} from 'antd';
import { toast } from 'react-toastify';
import moment from 'jalali-moment';
import FormatHelper from "../../Helper/FormatHelper";
import axios from 'axios';
import Env from "../../Constant/Env.json";
import { useEffect } from 'react';



const Messages=()=>{
    const [modal , setModal]=useState(false);

    const [notifs , setNotifs]=useState(null);
    const [selectedNotif , setSelectedNotif]=useState(null);

    const getNotifs=async()=>{
        const token = localStorage.getItem("token");
        try{
            const response = await axios.get(Env.baseUrl + "/notification/notification/",{
                headers:{
                    "Authorization":"Token "+token
                }
            });
            setNotifs(response.data.results);
        }catch({err,response}){
            toast.error(response && response.data.message,{
                position:"bottom-left"
            });
        }
    }

    const deleteNotif=async(id)=>{
        const token = localStorage.getItem("token");
        try{
            const response = await axios.delete(Env.baseUrl + `/notification/notification/${id}/`,{
                headers:{
                    "Authorization":"Token "+token
                }
            });
            getNotifs();
            toast.success("پیام مورد نظر با موفقیت حذف شد",{
                position:"bottom-left"
            });
            setModal(false);
        }catch({err , response}){
            toast.error(response && response.data.message,{
                position:"bottom-left"
            })
        }
    }

    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
      });

      useEffect(()=>{
        getNotifs(); 
      },[])

    return(
        <div className='messages'>
            <Modal
                visible={modal}
                onCancel={()=>setModal()}
                onOk={()=>setModal(false)}
                closable={false}
            >
                <div className='modal'>
                    <div className='modal-logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div style={{color:"#475569",fontSize:"18px"}}>حذف پیام</div>
                    <div style={{width:"100%",textAlign:"center",marginTop:"10px"}}>آیا از حذف پیام اطمینان دارید؟</div>
                    <div className='messages-modal-button'>
                        <Button onClick={()=>setModal(false)}>انصراف</Button>
                        <Button onClick={()=>deleteNotif(selectedNotif)}>حذف کردن</Button>
                    </div>
                </div>
            </Modal>
            <div className="messages-header">
                <div className='message-header-right'>پیام ها</div>
                <div className='message-header-left'>
                    <div style={{position:"relative"}}>
                        <DatePicker
                            value={selectedDayRange}
                            inputClassName="amar-date-picker"
                            onChange={setSelectedDayRange}
                            calendarClassName="amar-calendar"
                            inputPlaceholder="تا تاریخ"
                            colorPrimary="#f1910c"
                            colorPrimaryLight="#f1910c50"
                            shouldHighlightWeekends
                            locale="fa"
                        />
                        <img style={{position:"absolute",right:"80%",top:"20%",zIndex:"999"}} src={grayCalendar} alt="calendar" />
                    </div>
                    <div style={{position:"relative"}}>
                        <Input
                            className='message-header-input'
                            placeholder='چیزی جستجو کنید...'
                            suffix={<SearchOutlined style={{color:"gray",fontSize:"22px"}} />}
                        />
                    </div>
                </div>
            </div>
            <div className='message-items-body'>
                {/* <div>
                    <div>
                        ۱۴۰۰/۱۲/۲۸
                    </div>
                </div> */}
                {notifs && notifs.length>0 && notifs.map((data)=>(
                    <div className='message-item'>
                        <img src={clockIcon} alt="time" />
                        <div style={{direction:"ltr",fontSize:"15px",margin:"0 10px"}}>
                            {FormatHelper.toPersianString(moment(data.date).locale('fa').format('HH:mm'))}
                        </div>
                        <div style={{marginRight:"20px"}}>{data.content}</div>
                        <div className='message-item-icons'>
                            <div onClick={()=>{setModal(true);setSelectedNotif(data.id);}}>
                                <img src={trashIcon} alt="trash" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Messages;