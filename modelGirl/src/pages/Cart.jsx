import React from 'react';
import '@/../public/css/cartStyle';
import Content from '@/components/cart/Content';
import { NavLink } from 'react-router-dom';
// import Footer from '@/components/footer/Footer';

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      values: 0,
      flag: true
    }
  }
  componentDidMount(){
    
  }
  getMsg (msg) {
    this.setState({
      values: msg
    })
  }
  goBack () {
    this.props.history.goBack();
  }
  show () {
    this.setState({
      flag: !this.state.flag
    })
    // console.log(this.state.flag)
    // return this.state.flag
  }

  render () {
    return (
      <div className='cartContainer'>
        <header className='header'>
          <div className='top'>
            <span className='iconfont icon-fanhui1' onClick={this.goBack.bind(this)}></span>
            <span>订单中心</span>
            <span onClick={this.show.bind(this)}>管理</span>
          </div>
          <div className='bott'>
            <span>共 {this.state.values} 件商品</span>
          </div>
        </header>
        <Content className='content' Show={this.state.flag} type={this.props} Msg = {this.getMsg.bind(this)}></Content>
        <footer className='tfooter'>
          <ul>
            <NavLink to='/home'>首页</NavLink>
            <NavLink to='/sale'>商城</NavLink>
            <NavLink to='/kind' className='iconfont icon-add'></NavLink>
            <NavLink to='/msg'>消息</NavLink>
            <NavLink to='/user'>我的</NavLink>
          </ul>
        </footer>
      </div>
    )
  }
} 

export default Com;