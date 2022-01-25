import React from 'react';
import "./Sidebar.css";
import logo from "../../assets/images/logo.svg";
import oneIcon from "../../assets/images/side-one.svg"; 
import twoIcon from "../../assets/images/side-two.svg"; 
import threeIcon from "../../assets/images/side-three.svg"; 
import fourIcon from "../../assets/images/side-four.svg"; 
import fiveIcon from "../../assets/images/side-five.svg"; 
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';


const Sidebar=()=>{
    const history=useHistory();

    return(
        <div className='sidebar'>
            <div className='sidebar-logo-wrapper'>
                <img src={logo} alt="logo" />
                <span>پنل مدیریت ردیف</span>
            </div>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.Item
                    key="1"
                    icon={<img src={oneIcon} />}
                    onClick={()=>history.push("/dashboard/manage")}
                >
                    مدیریت رزروها
                </Menu.Item>
                <Menu.Item 
                    key="2"
                    icon={<img src={twoIcon} />}
                    onClick={()=>history.push("/dashboard/report")}
                >
                    گزارشات
                </Menu.Item>
                <Menu.Item 
                    key="3"
                    icon={<img src={threeIcon} />}
                    onClick={()=>history.push("/dashboard/service")}
                >
                    خدمات
                </Menu.Item>
                <Menu.Item 
                    key="4"
                    icon={<img src={fourIcon} />}
                    onClick={()=>history.push("/dashboard/messages")}
                >
                    پیام ها
                </Menu.Item>
                <Menu.Item 
                    key="5"
                    icon={<img src={fiveIcon} />}
                    onClick={()=>history.push("/dashboard/statistic")}
                >
                    آمار و تحلیل
                </Menu.Item>
            </Menu>
        </div>
    )
}
export default Sidebar;