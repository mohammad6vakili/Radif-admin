import React from 'react';
import "./Dashboard.css";
import { Route , Switch } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Manage from "../../Pages/Dashboard/Manage";
import Report from "../../Pages/Dashboard/Report";
import Service from "../../Pages/Dashboard/Service";
import Messages from "../../Pages/Dashboard/Messages";
import Statistic from "../../Pages/Dashboard/Statistic";


const Dashboard=()=>{
    return(
        <div className='dashboard'>
            <Sidebar/>
            <div className='dashboard-body'>
                <Header/>
                <div className='dashboard-body-main'>
                <Switch>
                    <Route path={"/dashboard/manage"} component={Manage} />
                    <Route path={"/dashboard/report"} component={Report} />
                    <Route path={"/dashboard/service"} component={Service} />
                    <Route path={"/dashboard/messages"} component={Messages} />
                    <Route path={"/dashboard/statistic"} component={Statistic} />
                </Switch>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;