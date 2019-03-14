import React from 'react';
import { Link } from "react-router-dom";
import '@/../public/css/menuStyle.scss';

class Com extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      val: [1, 2]
    }
  }
  componentDidMount () {
    localStorage.getItem('isLogin');
    // store.dispatch(action.requestBanner());
  }
  goBack () {
    console.log('ok')
    console.log(this)
    this.props.history.goBack();
  }
  Exit () {
    localStorage.clear('isLogin');
    this.props.history.goBack();
  }
  toLogin () {
    this.props.history.push('/user/login');
  }
  toCart () {
    if(localStorage.getItem('isLogin')){
      this.props.history.push('/cart');
    }
  }
  toSets(){
    if(localStorage.getItem('isLogin')){
      this.props.history.push('/menu/sets');
    }
  }
  toLove(){
    if(localStorage.getItem('isLogin')){
      this.props.history.push('/menu/love');
    }
  }


  render () {
    let htmlArr = []
    if(localStorage.getItem('isLogin')){
      htmlArr.push(
        <div className='outer' key={this.state.val[0]}>
          <div className='menuContainer'>
            <header className='header'>
              <div className='out'>
                <img src='./tu.jpg' alt='图片丢失' />
              </div>
              <span>王某人</span>
            </header>
            <div className='content'>
              <div className='view'>
                <ul>
                  <li>
                    <span className='iconfont icon-shoucang'></span>
                    <span>我的收藏</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                  <li>
                    <span className='iconfont icon-caogaoxiang'></span>
                    <span>我的草稿</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                  <li>
                    <span className='iconfont icon-guanzhu'></span>
                    <span>我的关注</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                </ul>
                <ul>
                  <li onClick={this.toCart.bind(this)}>
                    <span className='iconfont icon-daohanggouwuche'></span>
                    <span>购物车</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                  <li>
                    <span className='iconfont icon-dingdan1'></span>
                    <span>订单中心</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                  <li onClick={this.toLove.bind(this)}>
                    <span className='iconfont icon-aixin'></span>
                    <span>心愿单</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                  <li>
                    <span className='iconfont icon-youhuiquan'></span>
                    <span>优惠券</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className='iconfont icon-kefu'></span>
                    <span>客服与帮助</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                  <li onClick={this.toSets.bind(this)}>
                    <span className='iconfont icon-shezhi1'></span>
                    <span>设置</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                  <li onClick={this.Exit.bind(this)}>
                    <span>退出登陆</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='aside' onClick = { this.goBack.bind(this) }></div>
        </div>
      )
    } else {
      htmlArr.push(
        <div className='outer' key={this.state.val[1]}>
          <div className='menuContainer'>
            <header className='header'>
              <div className='out'>
                <img src='https://graph.baidu.com/resource/1021aacbf8af0503ce53501552395409.jpg' alt='图片丢失' />
              </div>
              <span>游客<br />请登录</span>
            </header>
            <div className='content'>
              <div className='view'>
                <ul>
                  <li>
                    <span className='iconfont icon-shoucang'></span>
                    <span>我的收藏</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                  <li>
                    <span className='iconfont icon-caogaoxiang'></span>
                    <span>我的草稿</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                  <li>
                    <span className='iconfont icon-guanzhu'></span>
                    <span>我的关注</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                </ul>
                <ul>
                  <Link to='/user/login'>
                    <span className='iconfont icon-daohanggouwuche'></span>
                    <span>购物车</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </Link>
                  <li>
                    <span className='iconfont icon-dingdan1'></span>
                    <span>订单中心</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                  <li>
                    <span className='iconfont icon-aixin'></span>
                    <span>心愿单</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                  <li>
                    <span className='iconfont icon-youhuiquan'></span>
                    <span>优惠券</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className='iconfont icon-kefu'></span>
                    <span>客服与帮助</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                  <li>
                    <span className='iconfont icon-shezhi1'></span>
                    <span>设置</span>
                    <span className='iconfont icon-arrow-right'></span>
                  </li>
                  <li onClick={this.toLogin.bind(this)}>
                    <span>马上登陆</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='aside' onClick = { this.goBack.bind(this) }></div>
        </div>
      )
    }
    return (
      <div className='view'>{htmlArr}</div>
    )
  }
}

export default Com;