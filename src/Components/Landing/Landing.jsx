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
import whyOne from "../../assets/images/why-icon-one.svg";
import whyTwo from "../../assets/images/why-icon-two.svg";
import whyThree from "../../assets/images/why-icon-three.svg";
import whyFour from "../../assets/images/why-icon-four.svg";
import ansar from "../../assets/images/ansar.svg";
import mellat from "../../assets/images/mellat.svg";
import iranzamin from "../../assets/images/iranzamin.svg";
import shahr from "../../assets/images/shahr.svg";
import parsian from "../../assets/images/parsian.svg";
import safOne from "../../assets/images/saf-one.png";
import safTwo from "../../assets/images/saf-two.png";
import clockIcon from "../../assets/images/clock.svg";
import upFooterBg from "../../assets/images/upfooter-bg.png";


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
            <div className="landing-section-three">
                <div className='landing-section-three-title'>
                    چرا اپلیکیشن ردیف ؟
                </div>
                <div className='landing-section-three-texts'>
                    <div
                        style={{width:"30%"}}
                        className='landing-section-three-small-text'
                    >
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                    </div>
                    <div className='landing-section-three-small-textbox'>
                        <div>
                            <img src={whyOne} alt="why radif" />
                            <div>
                                <div>آسیاب به نوبت !</div>
                                <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
                            </div>
                        </div>
                        <div>
                            <img src={whyTwo} alt="why radif" />
                            <div>
                                <div>آسیاب به نوبت !</div>
                                <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
                            </div>
                        </div>
                    </div>
                    <div className='landing-section-three-small-textbox'>
                        <div>
                            <img src={whyThree} alt="why radif" />
                            <div>
                                <div>آسیاب به نوبت !</div>
                                <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
                            </div>
                        </div>
                        <div>
                            <img src={whyFour} alt="why radif" />
                            <div>
                                <div>آسیاب به نوبت !</div>
                                <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="landing-section-four">
                <div>مشتریان ما</div>
                <div>
                    <img src={parsian} alt="our customer" />
                    <img src={shahr} alt="our customer" />
                    <img src={iranzamin} alt="our customer" />
                    <img src={mellat} alt="our customer" />
                    <img src={ansar} alt="our customer" />
                </div>
            </div>
            <div className="landing-section-five">
                <div>شما می توانید همین حالا فرم پیوستن مرکز خود را برای ما ارسال کنید تا مرکز شما هم برای مشتریان ردیف نمایش داده شود.</div>
                <Button>پیوستن به ردیف</Button>
            </div>
            <div className="landing-section-six">
                <div className='landing-blog-box-vertical'>
                    <img src={safOne} alt="saf" />
                    <div>
                        <div>سیستم های مدیریت صف</div>
                        <div>
                            <img style={{width:"20px"}} src={clockIcon} alt="clock" />
                            <span style={{fontSize:"12px",color:"#64748B",marginRight:"5px"}}>۱۴۰۰/۰۲/۲۵</span>
                        </div>
                        <div>
                            سیستم های مدیریت صف  ما برای پاسخگویی به نیازهای صنعت بانکداری بصورت هوشمندانه طراحی شده است. تجربه سالیان ما و حضور گسترده در بازار فروش این اجازه را به ما داده است.
                        </div>
                    </div>
                </div>
                <div className='landing-blog-box-horizintal-wrapper'>
                    <div>
                        <img src={safTwo} alt="saf" />
                        <div>
                            <div>سیستم های مدیریت صف</div>
                            <div>
                                <img style={{width:"20px"}} src={clockIcon} alt="clock" />
                                <span style={{fontSize:"12px",color:"#64748B",marginRight:"5px"}}>۱۴۰۰/۰۲/۲۵</span>
                            </div>
                            <div>
                                سیستم های مدیریت صف  ما برای پاسخگویی به نیازهای صنعت بانکداری بصورت هوشمندانه طراحی شده است. تجربه سالیان ما و حضور گسترده در بازار فروش این اجازه را به ما داده است.
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={safTwo} alt="saf" />
                        <div>
                            <div>سیستم های مدیریت صف</div>
                            <div>
                                <img style={{width:"20px"}} src={clockIcon} alt="clock" />
                                <span style={{fontSize:"12px",color:"#64748B",marginRight:"5px"}}>۱۴۰۰/۰۲/۲۵</span>
                            </div>
                            <div>
                                سیستم های مدیریت صف  ما برای پاسخگویی به نیازهای صنعت بانکداری بصورت هوشمندانه طراحی شده است. تجربه سالیان ما و حضور گسترده در بازار فروش این اجازه را به ما داده است.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='landing-blog-box-vertical'>
                    <img src={safOne} alt="saf" />
                    <div>
                        <div>سیستم های مدیریت صف</div>
                        <div>
                            <img style={{width:"20px"}} src={clockIcon} alt="clock" />
                            <span style={{fontSize:"12px",color:"#64748B",marginRight:"5px"}}>۱۴۰۰/۰۲/۲۵</span>
                        </div>
                        <div>
                            سیستم های مدیریت صف  ما برای پاسخگویی به نیازهای صنعت بانکداری بصورت هوشمندانه طراحی شده است. تجربه سالیان ما و حضور گسترده در بازار فروش این اجازه را به ما داده است.
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width:"100%",marginTop:"30px"}}>
                <img style={{width:"100%"}} src={upFooterBg} alt="bg" />
            </div>
        </div>
    )
}
export default Landing;