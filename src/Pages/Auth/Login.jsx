import React,{useState} from 'react';
import "./Auth.css";
import { Button, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import { UserOutlined , LockOutlined , EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import logo from "../../assets/images/logo.svg";
import loginImage from "../../assets/images/login-image.png";
import { toast } from 'react-toastify';



const Login=()=>{
    const history=useHistory();
    const [username , setUsername]=useState("");
    const [password , setPassword]=useState("");

    const LoginHandler=()=>{
        if(username===""){
            toast.warning("لطفا نام کاربری خود را وارد کنید",{
                position:"bottom-left"
            });
        }else if(password===""){
            toast.warning("لطفا رمز عبور خود را وارد کنید",{
                position:"bottom-left"
            });
        }else{
            history.push("/dashboard/manage");
        }
    }

    return (
        <div className='login'>
            <div className='login-box-wrapper'>
                <div className="login-box">
                    <div style={{marginBottom:"25px"}}>ورود به حساب کاربری</div>
                    <div className="auth-input-box">
                        <span>نام کاربری</span>
                        <Input 
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            prefix={<UserOutlined style={{fontSize:"22px"}}/>} 
                        />
                    </div>
                    <div className="auth-input-box">
                        <span>رمز عبور</span>
                        <Input.Password
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            prefix={<LockOutlined style={{fontSize:"22px"}}/>} 
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </div>
                    <div style={{cursor:"pointer"}} className="login-forget-pass">
                        رمز عبورم را فراموش کرده ام.
                    </div>
                    <Button 
                        onClick={LoginHandler} 
                        className="auth-submit-btn"
                    >
                        ورود به پنل
                    </Button>
                    <div style={{fontSize:"16px"}}>هنوز عضو ردیف نشده اید؟ همین حالا <span onClick={()=>history.push("/signup")} style={{color:"#f1910c",cursor:"pointer"}}>فرم پیوستن به ردیف</span> را پر کنید.</div>
                </div>
            </div>
            <img src={loginImage} alt="login" />
            <img src={logo} alt="saf" />
        </div>
    )
}
export default Login;