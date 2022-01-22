import React from 'react';
import "./Landing.css";
import Logo from "../../assets/images/logo.svg";
import { Button } from 'antd';
import userIcon from "../../assets/images/user-icon.svg";
import constroctBg from "../../assets/images/landing-constroct-bg.svg";
import manImage from "../../assets/images/landing-man-img.png";
import playIcon from "../../assets/images/play.svg";
import lineBg from "../../assets/images/landing-full-line.svg";
import twoMobile from "../../assets/images/landing-two-mobile.png";
import bazar from "../../assets/images/bazar.png";
import myket from "../../assets/images/myket.png";
import google from "../../assets/images/google.png";
import direct from "../../assets/images/direct.png";


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
                <div>
                    <div>همه چیز ردیفه !</div>
                    <div>
                        مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه مداد رنگی جای خالی او با هیچ رنگی  پر نشد، به یاد هم باشیم شاید فردا ما هم در کنار هم نباشیم…
                    </div>
                    <div>
                        <Button>
                            <img style={{marginLeft:"5px"}} src={playIcon} alt="play icon" />
                            درباره ردیف
                        </Button>
                        <Button>
                            پیوستن به ردیف
                        </Button>
                    </div>
                </div>
                <div>
                    <img src={manImage} alt="landing" />
                </div>
            </div>
            <div style={{width:"100%"}}>
                <img style={{width:"100%"}} src={lineBg} alt="bg" />
            </div>
            <div className='landing-section-two'>
                <div>
                    <div>دانلود اپلیکیشن ردیف</div>
                    <div style={{height:"200px"}}>
                        <img src={myket} alt="myket" />
                        <img src={bazar} alt="bazar" />
                        <img src={google} alt="google play" />
                        <img src={direct} alt="direct" />
                    </div>
                </div>
                <div>
                    <img src={twoMobile} alt="app" />
                </div>
            </div>
        </div>
    )
}
export default Landing;