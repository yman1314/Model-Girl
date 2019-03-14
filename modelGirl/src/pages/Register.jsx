import React, { Component } from 'react';
import { InputItem, Toast, Button } from 'antd-mobile';
import '@/../public/css/registerStyle.scss';
import api from '@/api/user';
// const admin = {"1234"}

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hasError: false,
      value: '',
      hasPasswordError: false,
      passwordvalue: '',
      code:'',
      admin: '',
      codeFlag: false,
      msg: "发送验证码",
      btnflag: false
    }
  }
  toLogin () {
    this.props.history.push('/user/login')
  }
  goBack () {
    this.props.history.goBack();
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
    console.log(value)
    if (value.replace(/\s/g, '').length < 11) {
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
   
  codeState (e) {
    this.setState({
      code: e.target.value
    })
  }
  registerFn (username, password) {
    if (this.state.code === "") {
      this.setState({
        codeFlag: false,
      }); 
      Toast.info("验证码为空")
    } else if(this.state.code !== '1234') {
      this.setState({
        codeFlag: false,
      });
      Toast.fail("验证码错误")
    } else {
      this.setState({
        codeFlag: true
      });
      api.requestRigister({username, password})
      .then(data => {
        console.log(data)
        // console.log(data.data)
        if (data === -1) {
          Toast.fail('该用户已注册', 1);
        } else if (data === 0) {
          Toast.info('注册失败', 1);
        } else {
          Toast.success('注册成功，跳转登陆', 1);
          let timer = null
          timer = setTimeout(() => {
            this.props.history.push('/user/login')
            clearTimeout(timer);
          },1500)
        }
      })
    }

  }
  goHome () {
    this.props.history.push('/home')
  }

  codeFn (username) {
    let timer = null
    let time = 10
    timer = setInterval(() => {
      time--;
      this.setState({
        msg : time + 's后重新发送',
        btnflag: true
      })
      if (time === 0) {
        this.setState({
          msg: '发送验证码',
          btnflag: false
        })
        clearInterval(timer)
      }
    }, 1000)
  }
  render () {
    let type = ''
    let disabled = true
    if (this.state.hasError === false && this.state.hasPasswordError === false && this.state.value.length > 0 && this.state.passwordvalue.length > 0) {
      type = '';
      disabled = false
    } 
    return (
      <div className = "content">
        <div className="register">
          <div className='ttop'>
            <span className='iconfont icon-fanhui1 back' onClick={this.goBack.bind(this)}></span>
            <span onClick={this.goHome.bind(this)}>首页</span>
          </div>
          <div className="txt1">注册一个新账号</div>
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
          <div className="getCode">
            <input type="text" className="code" name="code" onChange={this.codeState.bind(this)} value={this.state.code} />
            <Button type="ghost" inline size="small" disabled = { this.state.btnflag } className="am-button-borderfix sendCode"   onClick = { this.codeFn.bind(this, this.state.value)}>{this.state.msg}</Button>
          </div>
          <div className="border2"></div>
          <InputItem
            className="password"
            type="password"
            clear
            placeholder="设置您的密码"
            error={this.state.hasPasswordError}
            onErrorClick={this.onPasswordErrorClick.bind(this)}
            onChange={this.onPasswordChange.bind(this)}
            value={this.state.passwordvalue}
          ></InputItem>
          <div className="border3"></div>
          <Button className="registerBtn" type={ type } disabled = { disabled } onClick = { this.registerFn.bind(this, this.state.value, this.state.passwordvalue)}>注册</Button>
          <div className="goLogin" onClick={this.toLogin.bind(this)}>去登录</div>
        </div>
      </div>
    )
  }
}

export default Com