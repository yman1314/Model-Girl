import React from 'react';
import '@/../public/css/msgStyle.scss';
import { Link } from 'react-router-dom'
import Footer from '@/components/footer/Footer';

class Com extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // bottomShow: false,
      isLogin: ''
    }
  }
  componentDidMount () {
    this.setState({
      isLogin: localStorage.getItem('isLogin')
    })
  }
  toMsg () {
    if (this.state.isLogin) {
      this.props.history.push('/menu');
    } else {
      this.refs.bott.style.bottom = 0
    }
  }
  toUser () {
    this.props.history.push('/user');
  }
  bottHidden () {
    this.refs.bott.style.bottom = '-1.86rem';
  }
  bottHid () {
    console.log(getComputedStyle(this.refs.bott).bottom)
    if (getComputedStyle(this.refs.bott).bottom === '0px') {
      console.log('ok')
      this.refs.bott.style.bottom = '-1.86rem';
    } else{
      console.log('1')
    }
  }
  toLetter () {
    if (this.state.isLogin) {
      this.props.history.push('/menu');
    } else {
      this.refs.bott.style.bottom = 0
    }
  }
  toCare () {
    if (this.state.isLogin) {
      this.props.history.push('/msg/care');
    } else {
      this.refs.bott.style.bottom = 0
    }
  }
  toComment () {
    if (this.state.isLogin) {
      this.props.history.push('/menu');
    } else {
      this.refs.bott.style.bottom = 0
    }
  }
  toZan () {
    if (this.state.isLogin) {
      this.props.history.push('/msg/comment');
    } else {
      this.refs.bott.style.bottom = 0
    }
  }
  toInfo () {
    if (this.state.isLogin) {
      this.props.history.push('/msg/info');
    } else {
      this.refs.bott.style.bottom = 0
    }
  }

  render () {
    return (
      <div className='msgContainer'  onClick = {this.bottHid.bind(this)} ref='con'>
        <header className='header'>
          <span className='iconfont icon-liebiao' onClick={this.toMsg.bind(this)}></span>
          <span>消息</span>
          <span className='iconfont icon-wo_de2' onClick={this.toUser.bind(this)}></span>
        </header>
        <div className='content'>
          <ul>
            <li onClick={this.toZan.bind(this)}>
              <span className='iconfont icon-shoucang'></span>
              <span>收到的赞和收藏</span>
              <span className='iconfont icon-arrow-right'></span>
            </li>
            <li onClick={this.toComment.bind(this)}>
              <span className='iconfont icon-aite'></span>
              <span>收到的评论和艾特</span>
              <span className='iconfont icon-arrow-right'></span>
            </li>
            <li onClick={this.toCare.bind(this)}>
              <span className='iconfont icon-guanzhu'></span>
              <span>新增关注</span>
              <span className='iconfont icon-arrow-right'></span>
            </li>
            <li onClick={this.toInfo.bind(this)}>
              <span className='iconfont icon-pinglun'></span>
              <span>通知消息</span>
              <span className='iconfont icon-arrow-right'></span>
            </li>
          </ul>
          <h3 onClick={this.toLetter.bind(this)}>
            <span className='iconfont icon-xinxi'></span>
            <span>私信</span>
            <span className='iconfont icon-arrow-right'></span>
          </h3>
        </div>
        <Footer className='footer'></Footer>
        <ul className='bbottom' ref='bott'>
          <Link to='/user/login'>登陆</Link>
          <Link to='/user/register'>注册</Link>
          <li onClick = {this.bottHidden.bind(this)}>取消</li>
        </ul>
      </div>
    )
  }
}

export default Com;