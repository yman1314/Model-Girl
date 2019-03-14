import React from 'react';
// import List from '@/components/home/List'
import Header from '@/components/home/Header';
import '@/components/home/care/style'
import store from '@/store';
import Footer from '@/components/footer/Footer';
import Content from '@/components/home/care/Content';

class Com extends React.Component{

  componentDidMount () {
    // store.dispatch(action.requestData());
    // store.dispatch(action.requestBanner());
  }
  render () {
    console.log(store.getState())
    return (
      <div className='container'>
        <Header className='header'></Header>
        <Content className='content'></Content>
        <Footer className='footer'></Footer>
      </div>
    )
  }
}

export default Com;