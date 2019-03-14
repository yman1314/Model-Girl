import React from 'react';
import Header from '@/components/sale/Header';
import Footer from '@/components/footer/Footer';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Reference from '@/components/sale/reference/Reference';
import Makeup from '@/components/sale/Makeup';
import Careskin from '@/components/sale/Careskin';


class Com extends React.Component{
  componentDidMount () {
    // store.dispatch(action.requestData());
    // store.dispatch(action.requestBanner());
  }
  render () {
    return (
      <div className='container1'>
        <Header className='header' type={this.props} ></Header>
        <div className='scontent'>
          <ul className='nav'>
            <NavLink to='/sale/reference'>推荐</NavLink>
            <NavLink to='/sale/makeup'>彩妆</NavLink>
            <NavLink to='/sale/careskin'>护肤</NavLink>
          </ul>
          <Switch>
            <Route path='/sale/reference' component={ Reference } />
            <Route path='/sale/makeup' component={ Makeup } />
            <Route path='/sale/careskin' component={ Careskin } />
            <Redirect path='/sale' to='/sale/reference' />
          </Switch>
        </div>
        <Footer className='footer'></Footer>
      </div>
    )
  }
}

export default Com;