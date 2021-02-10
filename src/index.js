import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import moment from 'moment';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import momentConfig from './configs/moment';

moment.updateLocale('fr', momentConfig);
axios.defaults.headers.common = { 'Authorization': `Bearer ${process.env.REACT_APP_NEWS_API_TOKEN}` };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
