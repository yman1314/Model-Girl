import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '@/../public/css/userStyle.scss';
import Footer from '@/components/footer/Footer';


class Com extends Component {
  constructor(props){
    super(props);
    this.state = {
      // bottomShow: false,
      isLogin: '',
      val: [1,2,3,4]
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
  toLogin () {
    this.refs.bott.style.bottom = 0
    // this.props.history.push('/user/login')
  }
  toSet(){
    this.props.history.push('/user/set')
  }


  render () {
    let htmlArr = [];
    if(this.state.isLogin){
      htmlArr.push(
        <div className='oout' key={this.state.val[0]}>
          <div className="userheader">
            <span className='iconfont icon-liebiao' onClick={this.toMsg.bind(this)}></span>
            <div className="nickname">
              <span>樱桃小丸子</span>
              <span>ID:66666</span>            
            </div>
            <span className='iconfont icon-fenxiang'></span>
          </div>
          <div className="top">
            <div className='lt'>
              <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551787043276&di=8c64391083d0070d9a16329d176e2efe&imgtype=0&src=http%3A%2F%2Fimg08.oneniceapp.com%2Fupload%2Favatar%2F2015%2F02%2F16%2Fa0a5caf942cae87f6399f8b15ccdef46.jpg' alt='图片丢失' />
            </div>
            <div className='rt'>
              <ul>
                <li><p>66</p><span>关注</span></li>
                <li><p>582</p><span>粉丝</span></li>
                <li><p>1999</p><span>获赞</span></li>
              </ul>
              <span className='int' onClick={this.toSet.bind(this)}>个人资料</span>
            </div>
          </div>
          <input className="autograph" placeholder="个性签名"/>
          <div className='bott'>
            <div className='lt'>
              <span className='iconfont icon-fenxiang'></span>
              <span className="sharebtn">分享</span>
            </div><div className='lt'>
              <span className='iconfont icon-shoucang'></span>
              <span className="collection">收藏</span>
            </div>
          </div>
        </div>
      )
    } else {
      htmlArr.push(
        <div className='oout'  key={this.state.val[0]}>
          <div className="userheader">
            <span className='iconfont icon-liebiao' onClick={this.toMsg.bind(this)}></span>
            <div className="nickname" onClick={this.toLogin.bind(this)}>
              <span>游客</span>
              <span>请登陆</span>            
            </div>
            <span className='iconfont icon-fenxiang'></span>
          </div>
          <div className="top">
            <div className='lt'>
              <img src='https://graph.baidu.com/resource/1021aacbf8af0503ce53501552395409.jpg' alt='图片丢失' />
            </div>
            <div className='rt'>
              <ul>
                <li><p>0</p><span>关注</span></li>
                <li><p>0</p><span>粉丝</span></li>
                <li><p>0</p><span>获赞</span></li>
              </ul>
              <span className='int' onClick={this.toLogin.bind(this)}>个人资料</span>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className = "content" onClick = {this.bottHid.bind(this)} ref='con'>
        <div className="user">
          <div className="oout">{htmlArr}</div>
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

export default Com
