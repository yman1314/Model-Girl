import React from 'react';
import '@/../public/css/cartStyle';
import Content from '@/components/detail/Content';
import { Modal } from 'antd-mobile';

const alert = Modal.alert;

const showAlert = (props) => {
  const alertInstance = alert('游客', '请先登录', [
    { text: '狠心拒绝', onPress: () => console.log('cancel'), style: 'default' },
    { text: '马上登陆', onPress: () => {props.props.history.push('/user/login')} },
  ]);
  setTimeout(() => {
    // 可以调用close方法以在外部close
    console.log('auto close');
    alertInstance.close();
  }, 500000);
};

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: []
    }
  }
  componentDidMount () {
  }
  goBack () {
    console.log(this);
    this.props.history.goBack();
  }
  goCart () {
    if(localStorage.getItem('isLogin')){
      this.props.history.push('/cart')
    } else {
      showAlert();
    }
  }

  render () {
    return (
      <div className='detailContainer'>
        <header className='header'>
            <span className='iconfont icon-fanhui1' onClick={this.goBack.bind(this)}></span>
            <span className='iconfont icon-daohanggouwuche' onClick={this.goCart.bind(this)}></span>
        </header>
        <Content className='content' type={this.props}></Content>
      </div>
    )
  }
} 

export default Com;