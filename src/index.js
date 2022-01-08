import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import "./Helper/NotifStyle.css";
import {Provider} from "react-redux";
import { ToastContainer } from 'react-toastify';
import thunk from "redux-thunk";
import {createStore, combineReducers, applyMiddleware} from "redux";
import Reducer from "./Store/Reducer";
import { BrowserRouter } from 'react-router-dom';


const rootReducer=combineReducers({
  Reducer:Reducer
});

const store = createStore(rootReducer , applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ToastContainer rtl autoClose={6000} pauseOnFocusLoss={false}/>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);