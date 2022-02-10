import React,{useState} from 'react';
import "./Service.css";
import { Button , Input, Modal , Select , TimePicker} from 'antd';
import { toast } from 'react-toastify';
import moment from 'moment';
import plusWhite from "../../assets/images/plus-white.svg";
import trashIcon from "../../assets/images/trash-service.svg";
import editIcon from "../../assets/images/edit-service.svg";
import logo from "../../assets/images/logo.svg";
const {Option}=Select;


const Service=()=>{

    const format = 'HH:mm';

    const [tab , setTab]=useState(0);
    const [addKhedmat , setAddKhedmat]=useState(false);
    const [addKhedmatDahande , setAddKhedmatDahande]=useState(false);

    const [khedmat , setKhedmat]=useState(false);
    const [khedmatDahande , setKhedmatDahande]=useState(false);
    const array=[1,1,1,1,1,1,1,1];

    return(
        <div className='service'>
            <Modal
                visible={khedmat}
                onCancel={()=>setKhedmat()}
                onOk={()=>setKhedmat(false)}
                closable={false}
            >
                <div className='modal'>
                    <div className='modal-logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div style={{color:"#475569",fontSize:"18px"}}>حذف خدمت</div>
                    <div style={{width:"100%",textAlign:"center",marginTop:"10px"}}>آیا از حذف خدمت اطمینان دارید؟</div>
                    <div className='messages-modal-button'>
                        <Button onClick={()=>setKhedmat(false)}>انصراف</Button>
                        <Button onClick={()=>{
                            toast.success("خدمت مورد نظر با موفقیت حذف شد",{
                                position:"bottom-left"
                            });
                            setKhedmat(false);
                        }}>
                            حذف کردن
                        </Button>
                    </div>
                </div>
            </Modal>
            <Modal
                visible={khedmatDahande}
                onCancel={()=>setKhedmatDahande()}
                onOk={()=>setKhedmatDahande(false)}
                closable={false}
            >
                <div className='modal'>
                    <div className='modal-logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div style={{color:"#475569",fontSize:"18px"}}>حذف خدمت دهنده</div>
                    <div style={{width:"100%",textAlign:"center",marginTop:"10px"}}>آیا از حذف خدمت دهنده اطمینان دارید؟</div>
                    <div className='messages-modal-button'>
                        <Button onClick={()=>setKhedmatDahande(false)}>انصراف</Button>
                        <Button onClick={()=>{
                            toast.success("خدمت دهنده مورد نظر با موفقیت حذف شد",{
                                position:"bottom-left"
                            });
                            setKhedmatDahande(false);
                        }}>
                            حذف کردن
                        </Button>
                    </div>
                </div>
            </Modal>
            <div className='service-header'>
                <div 
                    onClick={()=>setTab(0)}
                    className={tab===0 ? "service-tab-selected":""}
                >
                    خدمت
                </div>
                <div 
                    onClick={()=>setTab(1)}
                    className={tab===1 ? "service-tab-selected":""}
                >
                    خدمت دهندگان
                </div>
            </div>
            {tab===0 &&
                <div className='service-zero-tab'>
                    <div>
                        <Button onClick={()=>setAddKhedmat(true)}>
                            <img src={plusWhite} alt="add" />
                            خدمت جدید
                        </Button>
                    </div>
                    <div className='service-main'>
                        <div className='report-list-wrapper'>
                            <div className='report-list-header'>
                                <div className='report-item-10'>کد</div>
                                <div className='report-item-15'>نام خدمت</div>
                                <div className='report-item-15'>تعداد خدمت دهنده</div>
                                <div className='report-item-15'>زمان خدمت(دقیقه)</div>
                                <div className='report-item-10'>زمان شروع</div>
                                <div className='report-item-10'>زمان پایان</div>
                                <div className='report-item-25'></div>
                            </div>
                            {array.map((data)=>(
                                <div className='report-list-item'>
                                    <div className='report-item-10'>۱۲۳۴</div>
                                    <div className='report-item-15'>صدور گذرنامه</div>
                                    <div className='report-item-15'>۲</div>
                                    <div className='report-item-15'>۲۰</div>
                                    <div style={{direction:"ltr"}} className='report-item-10'>۰۷ : ۰۰</div>
                                    <div style={{direction:"ltr"}} className='report-item-10'>۱۰ : ۳۰</div>
                                    <div className='report-item-25'>
                                        <div style={{width:"unset"}} className='message-item-icons'>
                                            <div className='service-list-icon'>
                                                <img src={editIcon} alt="message" />
                                            </div>
                                            <div onClick={()=>setKhedmat(true)} className='service-list-icon'>
                                                <img src={trashIcon} alt="trash" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
            {tab===1 &&
                <div className='service-one-tab'>
                    <div>
                        <Button onClick={()=>setAddKhedmatDahande(true)}>
                            <img src={plusWhite} alt="add" />
                            خدمت دهنده جدید
                        </Button>
                    </div>
                    <div className='service-main'>
                        <div className='report-list-wrapper'>
                            <div className='report-list-header'>
                                <div className='report-item-10'>نام</div>
                                <div className='report-item-10'>نام خانوادگی</div>
                                <div className='report-item-15'>کد ملی</div>
                                <div className='report-item-15'>نقش</div>
                                <div className='report-item-15'>خدمت</div>
                                <div className='report-item-10'>نام کاربری</div>
                                <div className='report-item-10'>کلمه عبور</div>
                                <div className='report-item-25'></div>
                            </div>
                            {array.map((data)=>(
                                <div className='report-list-item'>
                                    <div className='report-item-10'>عباس</div>
                                    <div className='report-item-10'>جعفری</div>
                                    <div className='report-item-15'>۴۳۱۱۳۲۰۱۷</div>
                                    <div className='report-item-15'>خدمت دهنده</div>
                                    <div style={{direction:"ltr"}} className='report-item-15'>صدور گذرنامه</div>
                                    <div style={{direction:"ltr"}} className='report-item-10'>a.jafari</div>
                                    <div className='report-item-10'>fmjk322</div>
                                    <div className='report-item-25'>
                                        <div style={{width:"unset"}} className='message-item-icons'>
                                            <div className='service-list-icon'>
                                                <img src={editIcon} alt="message" />
                                            </div>
                                            <div onClick={()=>setKhedmatDahande(true)} className='service-list-icon'>
                                                <img src={trashIcon} alt="trash" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
            <Modal
                visible={addKhedmat}
                width={600}
                onCancel={()=>{
                    setAddKhedmat(false);
                }}
                onOk={()=>{
                    setAddKhedmat(false);
                }}
                closable={true}
            >
                <div style={{padding:"20px 10px 10px 10px"}} className='modal manage-modal'>
                    <div className='modal-logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        تعریف خدمت جدید
                    </div>
                    <div className='service-add-modal-body'>
                        <div>
                            <div>نام خدمت</div>
                                <Select
                                    className='service-add-modal-body-select'
                                    placeholder="انتخاب کنید"
                                >
                                    {array.map((data  , index)=>(
                                    <Option value={index}>خدمت {index}</Option>
                                ))}
                            </Select>
                        </div>
                        <div></div>
                        <div>
                            <div>تعداد خدمت دهنده</div>
                            <Input
                                type={"tel"}
                                placeholder='مثلا ۲'
                            />
                        </div>
                        <div>
                            <div>مدت زمان خدمت (دقیقه)</div>
                            <Input
                                type={"tel"}
                                placeholder='مثلا ۲۰'
                            />
                        </div>
                        <div>
                            <div>ساعت شروع</div>
                            <TimePicker placeholder='ساعت شروع را انتخاب کنید' format={format} />
                        </div>
                        <div>
                            <div>ساعت پایان</div>
                            <TimePicker placeholder='ساعت پایان را انتخاب کنید' format={format} />
                        </div>
                        <div style={{width:"100%",display:"flex",alignItems:"flex-end"}}>
                            <Button onClick={()=>   setAddKhedmat(false)}>
                                ثبت و تایید
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                visible={addKhedmatDahande}
                width={600}
                onCancel={()=>{
                    setAddKhedmatDahande(false);
                }}
                onOk={()=>{
                    setAddKhedmatDahande(false);
                }}
                closable={true}
            >
                <div style={{padding:"20px 10px 10px 10px"}} className='modal manage-modal'>
                    <div className='modal-logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        تعریف خدمت دهنده جدید
                    </div>
                    <div className='service-add-modal-body'>
                        <div>
                            <div>نام</div>
                            <Input
                                type={"text"}
                                placeholder='مثلا: عباس'
                            />
                        </div>
                        <div>
                            <div>نام خانوادگی</div>
                            <Input
                                type={"text"}
                                placeholder='مثلا: جعفری'
                            />
                        </div>
                        <div>
                            <div>کد ملی</div>
                            <Input
                                type={"tel"}
                                placeholder='کد ملی را دقیق وارد کنید'
                            />
                        </div>
                        <div>
                            <div>نقش</div>
                            <Select
                                    className='service-add-modal-body-select'
                                    placeholder="انتخاب کنید"
                                >
                                    {array.map((data  , index)=>(
                                    <Option value={index}>نقش {index}</Option>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <div>خدمت</div>
                            <TimePicker placeholder='ساعت شروع را انتخاب کنید' format={format} />
                        </div>
                        <div>
                            <div>نام کاربری</div>
                            <Input
                                type={"text"}
                                placeholder='نام کاربری خود را وارد کنید'
                            />
                        </div>
                        <div>
                            <div>رمز عبور</div>
                            <Input
                                type={"password"}
                                placeholder='رمز عبور را وارد کنید'
                            />
                        </div>
                        <div>
                            <div>تکرار رمز عبور</div>
                            <Input
                                type={"password"}
                                placeholder='رمز عبور خود را دوباره وارد کنید'
                            />
                        </div>
                        <div style={{width:"100%",display:"flex",alignItems:"flex-end"}}>
                            <Button onClick={()=>setAddKhedmatDahande(false)}>
                                ثبت و تایید
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default Service;