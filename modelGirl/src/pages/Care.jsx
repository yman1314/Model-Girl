import React from 'react';
import Header from '@/components/home/Header';
import '@/../public/css/careStyle'
// import store from '@/store';
import Footer from '@/components/footer/Footer';
import Content from '@/components/home/care/Content';

class Com extends React.Component{

  componentDidMount () {
    // store.dispatch(action.requestData());
    // store.dispatch(action.requestBanner());
  }
  render () {
    return (
      <div className='careContainer'>
        <Header className='header' type={this.props}></Header>
        <Content className='careContent' props={this.props}></Content>
        <Footer className='footer'></Footer>
      </div>
    )
  }
}

export default Com;