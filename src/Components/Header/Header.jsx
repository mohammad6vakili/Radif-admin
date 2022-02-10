import React from 'react';
import "./Header.css";
import {Popover} from "antd";
import { useHistory } from 'react-router-dom';
import notifIcon from "../../assets/images/notif-icon.svg";
import profileIcon from "../../assets/images/profile-icon.svg";
import axios from 'axios';
import Env from "../../Constant/Env.json";
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';


const Header=()=>{
    const history=useHistory();

    const [notifs , setNotifs]=useState(null);

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

    const notifMenu = (
        <div className='header-popover-menu notif-popover'>
            {notifs && notifs.length>0 && notifs.map((data , index)=>(
                <div key={index}>
                    {data.content}
                </div>
            ))}
            <div onClick={()=>history.push("/dashboard/messages")}>مشاهده همه اعلان ها</div>
        </div>
    );

    const userMenu = (
        <div className='header-popover-menu'>
            <div
                onClick={()=>history.push("/dashboard/profile")}
                style={{borderBottom:'1px solid #E2E8F0'}}
            >
                مشاهده پروفایل
            </div>
            <div onClick={()=>history.push("/")}>
                خروج از حساب کاربری
            </div>
        </div>
    );

    useEffect(()=>{
        getNotifs();
    },[])

    return(
        <div className='header'>
            <div>بانک ایران زمین شعبه ۲۳۸</div>
            <div className='header-icons'>
                <Popover placement="bottomRight" title={""} content={notifMenu} trigger="click">
                    <div>
                        <img src={notifIcon} alt="notif" />
                        <div></div>
                    </div>
                </Popover>
                <Popover placement="bottomRight" title={""} content={userMenu} trigger="click">
                    <div>
                        <img src={profileIcon} alt="profile" />
                    </div>
                </Popover>
            </div>
        </div>
    )
}
export default Header;