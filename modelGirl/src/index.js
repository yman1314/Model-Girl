import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './layout/App';
import UserApp from './layout/UserApp';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './main.scss';
import 'antd-mobile/dist/antd-mobile.css';
import store from './store';
import { Provider } from 'react-redux';

  ReactDOM.render(
    <Provider store = { store }>
      <Router>
        <Switch>
          <Route path='/userapp' component = { UserApp } />
          <Route path='/' component = { App } />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
