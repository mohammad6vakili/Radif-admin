import React from 'react';
import "./Header.css";
import {Popover} from "antd";
import { useHistory } from 'react-router-dom';
import notifIcon from "../../assets/images/notif-icon.svg";
import profileIcon from "../../assets/images/profile-icon.svg";


const Header=()=>{
    const history=useHistory();
    const array = [1,2,3,4];

    const notifMenu = (
        <div className='header-popover-menu notif-popover'>
            {array.map((arr)=>(
                <div>
                    عباس جعفری با شماره رزرو 2145 جهت افتتاح حساب وارد مرکز شد.
                </div>
            ))}
            <div>مشاهده همه اعلان ها</div>
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