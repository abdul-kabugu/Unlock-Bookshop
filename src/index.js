import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import {MoralisProvider} from 'react-moralis'


ReactDOM.render(
  <React.StrictMode>
  <MoralisProvider appId='X7c3gzF5IhuM8iZ3XPOPvTH5JUg63TrixcEC4sMk' serverUrl='https://aphwreamp1xp.usemoralis.com:2053/server'>
    <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

