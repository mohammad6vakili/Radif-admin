import React from 'react';
import "./Profile.css";
import profileAvatar from "../../assets/images/profile-avatar.svg";


const Profile=()=>{
    return(
        <div className='profile'>
            <div className='profile-top'>
                <img src={profileAvatar} alt="avatar" />
            </div>
            <div className='profile-name'>
                محمدعلی وکیلی دوست
            </div>
            <div className='profile-item'>
                <div>کد ملی</div>
                <div>۴۳۱۱۳۲۰۱۶۷</div>
            </div>
            <div className='profile-item'>
                <div>شعبه</div>
                <div>تهرانپارس</div>
            </div>
            <div className='profile-item'>
                <div>نقش</div>
                <div>کارشناس</div>
            </div>
            <div className='profile-item'>
                <div>خدمت</div>
                <div>واحد درخواست گذرنامه</div>
            </div>
            <div className='profile-item'>
                <div>باجه</div>
                <div>۲</div>
            </div>
        </div>
    )
}
export default Profile;