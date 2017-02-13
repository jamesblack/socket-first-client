import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './stores'
import './index.css';
import LoginScreen from './components/login-screen/'
import MainMenu from './components/main-menu/'

import { syncHistoryWithStore } from 'mobx-react-router'
import { Router, Route, browserHistory } from 'react-router'

import { routingStore } from './stores'

const history = syncHistoryWithStore(browserHistory, routingStore)

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="login" component={LoginScreen} />
      <Route path="mainmenu" component={MainMenu} />
    </Route>
  </Router>,
  document.getElementById('root')
);
