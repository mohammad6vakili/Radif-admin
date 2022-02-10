import React,{useState} from 'react';
import "./Auth.css";
import { Button, Input , Select , Modal} from 'antd';
import { useHistory } from 'react-router-dom';
import logo from "../../assets/images/logo.svg";
import signupImage from "../../assets/images/signup-image.png";
import { toast } from 'react-toastify';
import axios from "axios";
import Env from "../../Constant/Env.json";
import { useEffect } from 'react';
const { Option } = Select;


const Login=()=>{
    const history=useHistory();
    const [cities , setCities]=useState(null);
    const [provinces , setProvinces]=useState(null);

    const [name , setName]=useState("");
    const [province , setProvince]=useState("");
    const [city , setCity]=useState("");
    const [email , setEmail]=useState("");
    const [mobile , setMobile]=useState("");
    
    const [modal , setModal]=useState(false);

    const getProvinces=async()=>{
        try{
            const response = await axios.get(Env.baseUrl + "/location/province-list/");
            setProvinces(response.data.ContentData);
        }catch({err,response}){
            toast.error(response && response.data.message,{
                position:"bottom-left"
            })
        }
    }

    const getCities=async(id)=>{
        try{
            const response = await axios.post(Env.baseUrl + "/location/city-list/",{
                province_id:id
            });
            setCities(response.data.ContentData);
        }catch({err,response}){
            toast.error(response && response.data.message,{
                position:"bottom-left"
            })
        }
    }
    
    const SignupHandler=async(e)=>{
        e.preventDefault();
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
            try{
                const response = await axios.post(Env.baseUrl + "/accounts/join-us/",{
                    name:name,
                    email:email,
                    phone:mobile,
                    city:city
                });
                console.log(response.data);
                setModal(true);
            }catch({err,response}){
                toast.error(response && response.data.message,{
                    position:"bottom-left"
                })
            }
            setModal(true);
        }
    }

    useEffect(()=>{
        getProvinces();
    },[])

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
                <form onSubmit={SignupHandler} style={{height:"90vh"}} className="login-box">
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
                            onChange={(value)=>{
                                getCities(value);
                                setProvince(value);
                            }}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {provinces && provinces.length>0 && provinces.map((data)=>(
                                <Option value={data.id} key={data.id}>{data.name}</Option>
                            ))}
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
                            {cities && cities.length>0 && cities.map((data)=>(
                                <Option value={data.id} key={data.id}>{data.name}</Option>
                            ))}
                        </Select>
                    </div>
                    <div style={{marginBottom:"10px"}} className="auth-input-box">
                        <span>آدرس ایمیل</span>
                        <Input
                            required
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
                        htmlType='submit'
                        className="auth-submit-btn"
                    >
                        پیوستن به ردیف
                    </Button>
                </form>
            </div>
            <img src={signupImage} alt="login" />
        </div>
    )
}
export default Login;