import React, { Component } from 'react'
import { InputItem, Toast, Button } from 'antd-mobile';
import { NavLink, Link } from 'react-router-dom';
import '@/../public/css/loginStyle.scss';
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hasError: false,
      value: '',
      toLogin: ''
    }
  }
  componentWillMount () {
    this.setState({
      toLogin: this.props.location.search.slice(1).split('=')[1]
    })
    console.log(typeof this.state.toLogin);
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

  loginFn (username) {
    let toLogin = this.state.toLogin
    if(toLogin !== undefined){
      this.props.history.push('/user/login/next?username=' + username + '&toLogin=' + toLogin)
    } else {
      this.props.history.push('/user/login/next?username=' + username)
    }
    
  }

  render () {
    let type = ''
    let disabled = true
    if (this.state.hasError === false && this.state.value.length > 0 ) {
      type = ' ';
      disabled = false
    } 
    return (
      <div className = "content">
          <div className="txt1">验证手机号</div>
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
          <Button className="loginBtn" type={ type } disabled = { disabled } onClick = { this.loginFn.bind(this, this.state.value)}>发送验证码</Button>
          <ul className='aside1'>
            <Link to='/user/login'>账号密码登陆</Link>
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
