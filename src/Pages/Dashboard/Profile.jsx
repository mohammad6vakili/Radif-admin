import React,{useEffect,useState} from 'react';
import "./Profile.css";
import axios from 'axios';
import { Spin } from 'antd';
import {setProfile} from "../../Store/Action";
import { useDispatch , useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Env from "../../Constant/Env.json";
import profileAvatar from "../../assets/images/profile-avatar.svg";
import FormatHelper from '../../Helper/FormatHelper';


const Profile=()=>{
    const profile = useSelector(state=>state.Reducer.profile);



    return(
        <>
        {profile===null ? 
            <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                <Spin size='large' /> 
            </div>
        :        
            <div className='profile'>
                <div className='profile-top'>
                    <img src={profileAvatar} alt="avatar" />
                </div>
                <div className='profile-name'>
                    {profile.first_name} {" "} {profile.last_name}
                </div>
                <div className='profile-item'>
                    <div>کد ملی</div>
                    <div>{FormatHelper.toPersianString(profile.national_code)}</div>
                </div>
                <div className='profile-item'>
                    <div>شعبه</div>
                    <div>{profile.employee.obp.name}</div>
                </div>
                <div className='profile-item'>
                    <div>نقش</div>
                    <div>{profile.employee.role.name}</div>
                </div>
                <div className='profile-item'>
                    <div>خدمت</div>
                    <div>واحد درخواست گذرنامه</div>
                </div>
            </div>
        }
        </>
    )
}
export default Profile;