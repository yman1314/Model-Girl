import React, { Component } from 'react'
import { InputItem, Toast, Button } from 'antd-mobile';
// import { NavLink, Link } from 'react-router-dom';
import '@/../public/css/loginStyle.scss';
import api from '@/api/user'

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hasError: false,
      value: '',
      hasPasswordError: false,
      passwordvalue: '',
      username: '',
    }
  }
  componentWillMount () {
    this.setState({
      username: this.props.location.search.slice(1).split('=')[1]
    })
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
      Toast.info('密码格式不正确');
    }
  }
  onPasswordErrorClick () {
    if (this.state.hasPasswordError) {
      // Toast.info('');
    }
  }
  onChange (value) {
    if ( value.length > 0 && (value.replace(/\s/g, '').length > 17 || value.replace(/\s/g, '').length < 6)) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
    console.log(this.state.value)
  }
  onPasswordChange (passwordvalue) {
    if (passwordvalue.replace(/\s/g, '').length < 6 && passwordvalue.length > 0) {
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

  loginFn () {
    if(this.state.value === this.state.passwordvalue){
      let username = this.state.username;
      let password = this.state.value;
      console.log(username)
      console.log(password)
      api.requestAlterPw({username, password})
      .then(data => {
        console.log(data)
        if (data.data === 1) {
          Toast.success('修改成功，跳转登陆', 2);
          let timer = null
          timer = setTimeout(() => {
            this.props.history.push('/user/login')
            clearTimeout(timer);
          },2000)
        }
      })
    } else {
      Toast.fail('与新密码设置不一致', 2);
    }
  }
  render () {
    let type = ''
    let disabled = true
    if (this.state.value.length > 0 && this.state.passwordvalue.length > 0) {
      type = ' ';
      disabled = false
    } 
    return (
      <div className = "content">
        <div className="txt1">重置密码</div>
        <InputItem
          className="username"
          type="text"
          clear
          maxLength='16'
          placeholder="请输入新密码"
          error={this.state.hasError}
          onErrorClick={this.onErrorClick.bind(this)}
          onChange={this.onChange.bind(this)}
          value={this.state.value}
        ></InputItem>
        <div className="border1"></div>
        <InputItem
          className="password"
          type="text"
          clear
          maxLength='16'
          placeholder="再次输入密码"
          error={this.state.hasPasswordError}
          onErrorClick={this.onPasswordErrorClick.bind(this)}
          onChange={this.onPasswordChange.bind(this)}
          value={this.state.passwordvalue}
        ></InputItem>
        <div className="border2">6-16位数字或字母</div>
        <Button className="loginBtn" type={ type } disabled = { disabled } onClick = { this.loginFn.bind(this)}>确认</Button>
      </div>
    )
  }

}

export default Com
