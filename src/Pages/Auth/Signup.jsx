import React,{useState} from 'react';
import "./Auth.css";
import { Button, Input , Select , Modal} from 'antd';
import { useHistory } from 'react-router-dom';
import logo from "../../assets/images/logo.svg";
import signupImage from "../../assets/images/signup-image.png";
import { toast } from 'react-toastify';
const { Option } = Select;


const Login=()=>{
    const history=useHistory();
    const [name , setName]=useState("");
    const [province , setProvince]=useState("");
    const [city , setCity]=useState("");
    const [email , setEmail]=useState("");
    const [mobile , setMobile]=useState("");
    
    const [modal , setModal]=useState(false);

    const SignupHandler=()=>{
        if(name===""){
            toast.warning("لطفا نام و نام خانوادگی خود را وارد کنید",{
                position:"bottom-left"
            });
        }else if(province===""){
            toast.warning("لطفا استان خود را وارد کنید",{
                position:"bottom-left"
            });
        }else if(city===""){
            toast.warning("لطفا شهر خود را وارد کنید",{
                position:"bottom-left"
            });
        }else if(email===""){
            toast.warning("لطفا ایمیل خود را وارد کنید",{
                position:"bottom-left"
            });
        }else if(mobile===""){
            toast.warning("لطفا شماره تلفن همراه خود را وارد کنید",{
                position:"bottom-left"
            });
        }else if(mobile.length!==11){
            toast.warning("فرمت شماره موبایل وارد شده اشتباه است",{
                position:"bottom-left"
            });
        }else{
            setModal(true);
        }
    }

    return (
        <div style={{direction:"ltr"}} className='login'>
            <Modal
                visible={modal}
                onCancel={()=>history.push("/")}                
                onOk={()=>history.push("/")}                
                closable={false}
            >
                <div className='modal'>
                    <div className='modal-logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div style={{color:"#475569"}}>از اینکه وقت گذاشتید، از شما ممنونیم. همکاران ما در اولین فرصت با شما تماس خواهند گرفت.</div>
                    <div 
                        onClick={()=>history.push("/")}
                        style={{color:"#F1910C",marginTop:"20px",width:"100%",textAlign:"center",cursor:"pointer"}}
                    >
                        بازگشت به صفحه اصلی
                    </div>
                </div>
            </Modal>
            <div className='login-box-wrapper'>
                <div style={{height:"90vh"}} className="login-box">
                    <div style={{marginBottom:"30px"}}>پیوستن به ردیف</div>
                    <div style={{marginBottom:"10px"}} className="auth-input-box">
                        <span>نام و نام خانوادگی</span>
                        <Input
                            style={{marginTop:"5px"}}
                            value={name}
                            placeHolder={"مثلا : محمد وکیلی"}
                            onChange={(e)=>setName(e.target.value)}
                            prefix={<span></span>} 
                        />
                    </div>
                    <div style={{marginBottom:"10px"}} className="auth-input-box">
                        <span>استان</span>
                        <Select
                            style={{marginTop:"5px"}}
                            showSearch
                            placeholder="انتخاب کنید"
                            optionFilterProp="children"
                            onChange={(value)=>setProvince(value)}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </div>
                    <div style={{marginBottom:"10px"}} className="auth-input-box">
                        <span>شهر</span>
                        <Select
                            style={{marginTop:"5px"}}
                            showSearch
                            placeholder="انتخاب کنید"
                            optionFilterProp="children"
                            onChange={(value)=>setCity(value)}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </div>
                    <div style={{marginBottom:"10px"}} className="auth-input-box">
                        <span>آدرس ایمیل</span>
                        <Input
                            style={{marginTop:"5px"}}
                            type={"email"}
                            placeHolder={"Example@Example.com"}
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            prefix={<span></span>} 
                        />
                    </div>
                    <div style={{marginBottom:"10px"}} className="auth-input-box">
                        <span>شماره تلفن همراه</span>
                        <Input
                            style={{marginTop:"5px"}}
                            type={"tel"}
                            placeHolder={"09121234567"}
                            value={mobile}
                            onChange={(e)=>setMobile(e.target.value)}
                            prefix={<span></span>} 
                        />
                    </div>
                    <Button
                        onClick={SignupHandler} 
                        className="auth-submit-btn"
                    >
                        پیوستن به ردیف
                    </Button>
                </div>
            </div>
            <img src={signupImage} alt="login" />
        </div>
    )
}
export default Login;