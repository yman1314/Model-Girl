import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import QQlogin from '@/pages/QQlogin';
import User from '@/pages/User';
import Set from '@/pages/Pset';

class UserApp extends React.Component {
  render () {
    return(
      <div className='box'>
        <Switch>
          <Route path='/user/set' component={ Set } />
          <Route path='/user/login' component={ Login } />
          {/* <Route path='/user/alter' component={ Login } /> */}
          <Route path='/user/register' component={ Register } />
          <Route path='/user/loginqq' component = { QQlogin }/>
          <Route path='/user/loginwc' component = { QQlogin }/>
          <Route path='/user/loginmb' component = { QQlogin }/>
          <Route path='/user' component={ User } />
        </Switch>
      </div>    
    )
  }
}

export default UserApp;