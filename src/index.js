import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import axios from 'axios';

import store from './redux/store';
import App from './App';
import momentConfig from './configs/moment';

import 'bootstrap/dist/css/bootstrap.min.css';

moment.updateLocale('fr', momentConfig);
axios.defaults.headers.common = { 'Authorization': `Bearer ${process.env.REACT_APP_NEWS_API_TOKEN}` };

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);