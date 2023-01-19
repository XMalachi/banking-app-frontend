import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { countries } from "./Data";
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from './components/Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
// <!--Start of Tawk.to Script

(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/63c860ae47425128790e6f5d/1gn3bjb2k';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();


root.render(
  <BrowserRouter>
    <Provider store={store}>
    <React.StrictMode>
        <App images={countries} />
    </React.StrictMode>
  </Provider>
    
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
