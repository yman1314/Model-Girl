import React from 'react';
import Header from '@/components/home/Header';
import '@/../public/css/aroundStyle';
// import store from '@/store';
import Footer from '@/components/footer/Footer';
import Content from '@/components/home/around/Content';

class Com extends React.Component{

  componentDidMount () {
    // console.log(this)
    // store.dispatch(action.requestData());
    // store.dispatch(action.requestBanner());
  }
  render () {
    return (
      <div className='aroundContainer'>
        <Header className='header' type={this.props}></Header>
        <Content className='content' type={this.props}></Content>
        <Footer className='footer'></Footer>
      </div>
    )
  }
}

export default Com;