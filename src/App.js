import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing/Landing';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import Dashboard from './Components/Dashboard/Dashboard';

const App=()=> {

  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={Landing} />
        <Route path={"/login"} component={Login} />
        <Route path={"/signup"} component={Signup} />
        <Route path={"/dashboard"} component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
