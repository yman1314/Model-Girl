import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import '@/../public/css/loginStyle.scss';
import Alterpd from '@/components/login/Alterpw';
import Login from '@/components/login/Login';
import Getma from '@/components/login/Getma';
import Pass from '@/components/login/Pass';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  goBack () {
    this.props.history.goBack();
  }
  goRegister () {
    this.props.history.push('/user/register')
  }

  render () {
    return (
      <div className = "content">
        <div className="login">
          <div className='ttop'>
            <span className='iconfont icon-fanhui1 back' onClick={this.goBack.bind(this)}></span>
            <span onClick={this.goRegister.bind(this)}>注册</span>
          </div>
          <Switch>
            <Route path='/user/login/next' component={ Getma } />
            <Route path='/user/login/pass' component={ Pass } />
            <Route path='/user/login/alter' component={ Alterpd } />
            <Route path='/user/login' component={ Login } />
          </Switch>
        </div>
      </div>
    )
  }

}

export default Com
