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



const Messages=()=>{
    const [modal , setModal]=useState(false);
    const array=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
      });
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
                        <Button onClick={()=>{
                            toast.success("پیام مورد نظر با موفقیت حذف شد",{
                                position:"bottom-left"
                            });
                            setModal(false);
                        }}>حذف کردن</Button>
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
                        <img style={{position:"absolute",right:"80%",top:"20%",zIndex:"9999"}} src={grayCalendar} alt="calendar" />
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
                <div>
                    <div>
                        ۱۴۰۰/۱۲/۲۸
                    </div>
                </div>
                {array.map((data)=>(
                    <div className='message-item'>
                        <img src={clockIcon} alt="time" />
                        <div style={{direction:"ltr",fontSize:"15px",margin:"0 10px"}}>۰۹ : ۲۸</div>
                        <div style={{marginRight:"20px"}}>عباس جعفری با شماره رزرو 2145 جهت افتتاح حساب وارد مرکز شد.</div>
                        <div className='message-item-icons'>
                            <div>
                                <img src={ticketIcon} alt="message" />
                            </div>
                            <div onClick={()=>setModal(true)}>
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