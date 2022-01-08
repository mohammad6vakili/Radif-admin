import React from 'react';
import "./Landing.css";
import Logo from "../../assets/images/logo.svg";
import { Button } from 'antd';
import userIcon from "../../assets/images/user-icon.svg";
import constroctBg from "../../assets/images/landing-constroct-bg.svg";


const Landing=()=>{
    return(
        <div className='landing'>
            <div className='landing-header'>
                <img src={Logo} alt="logo" />
                <div className='landing-header-links'>
                    <div>خانه</div>
                    <div>مزایای ردیف</div>
                    <div>دریافت اپ</div>
                    <div>درباره ما</div>
                    <div>بلاگ</div>
                    <div>تماس با ما</div>
                </div>
                <Button className="landing-header-btn">
                    <img src={userIcon} alt="login" />
                    <span>ورود به حساب کاربری</span>
                </Button>
            </div>
            <div className="landing-section-one">
                <img src={constroctBg} alt="bg" />
            </div>
        </div>
    )
}
export default Landing;