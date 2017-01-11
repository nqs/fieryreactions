/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
require('./favicon.ico');
require('./icon.png');
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './styles/styles.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);
