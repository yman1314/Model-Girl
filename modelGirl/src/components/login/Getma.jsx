import React, { Component } from 'react'
import { Toast, Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import '@/../public/css/getmaStyle.scss';
import api from '@/api/user'
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      flag: false,
      value: '',
      admin: '1234',
      username: '',
      val1: '',
      val2: '',
      val3: '',
      val4: ''
    }
  }
  componentWillMount () {
    this.setState({
      username: (() => {
        if(this.props.location.search.length > 30){
          return this.props.location.search.slice(1).split('&')[0].split('=')[1]
        }else{
          return this.props.location.search.slice(1).split('=')[1]
        }
      })()
    })
  }
  componentDidMount(){
    console.log(this.state.username)
    this.refs.val1.focus();
  }

  goBack () {
    this.props.history.goBack();
  }
  goRegister () {
    this.props.history.push('/user/register')
  }

  onChange (value) {
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
      value,
    });
    console.log(this.state.value)
  }
  onChange1 (e, index) {
    this.setState({
      val1: e.target.value
    })
    if(e.target.value){
      this.refs.val2.focus();
    }  
  }
  onChange2 (e, index) {
    this.setState({
      val2: e.target.value
    })
    console.log(this.refs.val2)
    if(e.target.value){
      this.refs.val3.focus();
      // this.refs.val3.setAttributes = 'readonly';
    } else {
      // console.log(this.refs.val3)
    }
  }
  onChange3 (e, index) {
    this.setState({
      val3: e.target.value
    })
    if(e.target.value){
      this.refs.val4.focus();  
    } else {

    }
  }
  onChange4 (e, index) {
    this.setState({
      val4: e.target.value
    })
    if(this.refs.val4.value){
      this.setState({
        flag: true
      })
    } else {
      this.setState({
        flag: false
      })
    }
  }
  setG2 () {
    if(this.state.val1){
      this.refs.val1.readOnly = true
      this.refs.val2.focus();
    }else{
      this.refs.val1.focus();
      return 'readOnly'
    }
  }
  setG3 () {
    if(this.state.val1){
      if(this.state.val2){
      }else{
        this.refs.val2.focus();
        return 'readOnly'
      }
    }else{
      this.refs.val1.focus();
      return 'readOnly'
    }
  }
  setG4 () {
    if(this.state.val1){
      if(this.state.val2){
        if(this.state.val3){
          
        }else{
          this.refs.val3.focus();
          return 'readOnly'
        }
      }else{
        this.refs.val2.focus();
        this.refs.val1.attributes.readOnly = 'readOnly'
        return 'readOnly'
      }
    }else{
      this.refs.val1.focus();
      return 'readOnly'
    }
  }

  loginFn () {
    var str = '';
    var str1 = this.refs.val1.value;
    var str2 = this.refs.val2.value;
    var str3 = this.refs.val3.value;
    var str4 = this.refs.val4.value;
    str = str.concat(str1).concat(str2).concat(str3).concat(str4)
    if(str === this.state.admin){
      if(this.props.location.search.length > 30){
        let username = this.state.username;
        api.requestMalogin({username})
        .then(data => {
          if (data.data === 1) {
            Toast.success('登陆成功，跳转首页', 2);
            let timer = null
            timer = setTimeout(() => {
              localStorage.setItem('isLogin', this.state.username)
              this.props.history.push('/home')
              clearTimeout(timer);
            },2000)
          }
        })
      }else{
        this.props.history.push('/user/login/pass?username=' + this.state.username);
      }
    } else {
      Toast.fail('验证码错误', 1);
    }
  }
  render () {
    let type = ''
    let disabled = true
    if (this.state.flag === true) {
      type = ' ';
      disabled = false
    } 
    return (
      <div className = "content">
        <div className="txt1">输入验证码</div>
        <div className='inputs'>
          <input type="tel" ref='val1' maxLength='1' value={this.state.val1} onChange={this.onChange1.bind(this)}/>
          <input type="tel" ref='val2' maxLength='1' onClick={this.setG2.bind(this)} value={this.state.val2} onChange={this.onChange2.bind(this)}/>
          <input type="tel" ref='val3' maxLength='1' onClick={this.setG3.bind(this)} value={this.state.val3} onChange={this.onChange3.bind(this)}/>
          <input type="tel" ref='val4' maxLength='1' onClick={this.setG4.bind(this)} value={this.state.val4} onChange={this.onChange4.bind(this)}/>
        </div>
        <Button className="loginBtn" type={ type } disabled = { disabled } onClick = { this.loginFn.bind(this)}>确定</Button>
        <ul className='aside'>
          <Link to='/user/alter'>重新发送</Link>
          <Link to='/user/login'>账号密码登陆</Link>
        </ul>
      </div>
    )
  }

}

export default Com
