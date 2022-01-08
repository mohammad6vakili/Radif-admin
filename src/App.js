import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing/Landing';

const App=()=> {

  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
