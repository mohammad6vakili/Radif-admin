import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { useHistory } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import Dashboard from './Components/Dashboard/Dashboard';

const App=()=> {

  const history=useHistory();

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      history.push("/login");
    }else{
      history.push("/dashboard/manage");
    }
  },[])

  return (
    <>
      <div className="App">
        <Switch>
          <Route path={"/"} exact component={Landing} />
          <Route path={"/login"} component={Login} />
          <Route path={"/signup"} component={Signup} />
          <Route path={"/dashboard"} component={Dashboard} />
        </Switch>
      </div>
      <div className='mobile'>
        برای ورود به پنل لطفا با موبایل وارد نشوید
      </div>
    </>
  );
}

export default App;
