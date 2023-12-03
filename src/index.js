import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App1} from './Routeapp.js';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
// import Appdata from './components/additional/App2';
// import App_1 from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App1 />
    
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
