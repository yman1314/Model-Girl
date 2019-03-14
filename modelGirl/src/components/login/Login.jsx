import React, { Component } from 'react'
import { InputItem, Toast, Button } from 'antd-mobile';
import { NavLink, Link } from 'react-router-dom';
import '@/../public/css/loginStyle.scss';
import api from '@/api/user'

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hasError: false,
      value: '',
      hasPasswordError: false,
      passwordvalue: ''
    }
  }
  componentDidMount(){
    console.log(this)
  }

  goBack () {
    this.props.history.goBack();
  }
  goRegister () {
    this.props.history.push('/user/register')
  }

  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('请输入正确格式的手机号码');
    }
  }
  onPasswordErrorClick () {
    if (this.state.hasPasswordError) {
      Toast.info('请输入正确格式的密码');
    }
  }
  onChange (value) {
    if (value.replace(/^1[3|4|5|6|7|8|9][0-9]\d{8}$/, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value: value.replace(/\s/g, '')
    });
    console.log(this.state.value)
  }
  onPasswordChange (passwordvalue) {
    if (passwordvalue.replace(/\s/g, '').length < 4) {
      this.setState({
        hasPasswordError: true,
      });
    } else {
      this.setState({
        hasPasswordError: false,
      });
    }
    this.setState({
      passwordvalue,
    });
    console.log(this.state.passwordvalue)
  }

  loginFn (username, password) {
    console.log(username)
    api.requestData({username, password})
      .then(data => {
        if (data === +1) {
          Toast.success('登陆成功', 1);
          let timer = null
          timer = setTimeout(() => {
            localStorage.setItem('isLogin', this.state.value);
            this.props.history.push('/home')
            clearTimeout(timer);
          },1000)
        } else if (data === -1) {
          Toast.info('没有该用户', 1);
        } else if (data === 0) {
          Toast.success('密码错误', 1);
        } else {
          Toast.fail('登录失败', 1);
        }
      })
  }
  render () {
    console.log(this.state.hasError)
    console.log(this.state.hasPasswordError)
    let type = ''
    let disabled = true
    if (this.state.hasError === false && this.state.hasPasswordError === false && this.state.value.length > 0 && this.state.passwordvalue.length > 0) {
      type = ' ';
      disabled = false
    } 
    return (
      <div className = "content">
        <div className="txt1">手机密码登录</div>
        <InputItem
          className="username"
          type="phone"
          clear
          placeholder="请输入您的手机号"
          error={this.state.hasError}
          onErrorClick={this.onErrorClick}
          onChange={this.onChange.bind(this)}
          value={this.state.value}
        ></InputItem>
        <div className="border1"></div>
        {/* <input type="text" className="password" placeholder="输入密码" /> */}
        <InputItem
          className="password"
          type="password"
          clear
          placeholder="请输入您的密码"
          error={this.state.hasPasswordError}
          onErrorClick={this.onPasswordErrorClick.bind(this)}
          onChange={this.onPasswordChange.bind(this)}
          value={this.state.passwordvalue}
        ></InputItem>
        <div className="border2"></div>
        <Button className="loginBtn" type={ type } disabled = { disabled } onClick = { this.loginFn.bind(this, this.state.value, this.state.passwordvalue)}>登录</Button>
        <ul className='aside'>
          <Link to='/user/login/alter'>忘记密码</Link>
          <Link to='/user/login/alter?tologin=1'>验证码登录</Link>
        </ul>
        <div className="thirdLogin">第三方登录</div>
        <ul className='tologin'>
          <NavLink to = "/user/loginwc">
            <span className='iconfont icon-weixin'></span>
            <span>微信</span>
          </NavLink >
          <NavLink to = "/user/loginqq">
            <span className='iconfont icon-qq'></span>
            <span>QQ</span>
          </NavLink >
          <NavLink to = "/user/loginmb">
            <span className='iconfont icon-weibo'></span>
            <span>微博</span>
          </NavLink >
        </ul>
      </div>
    )
  }

}

export default Com
