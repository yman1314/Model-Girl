import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import Home from '@/pages/Home';
import Sale from '@/pages/Sale';
import Cart from '@/pages/Cart';
import UserApp from '@/layout/UserApp';
import Msg from '@/pages/Msg';
import Detail from '@/pages/Detail';
import Menu from '@/pages/Menu';
import HomeApp from '@/layout/HomeApp';
import Concern from '@/pages/Concern';
import Comment from '@/pages/Comment';
import Info from '@/pages/New';
import Sets from '@/pages/Set';
import Love from '@/pages/Wishlist';

class App extends Component {
  render() {
    return (
      <div className='box'>
        <Switch>
          {/* <Redirect path="/home" to="/home/find" component={HomeApp}  /> */}
          <Route path='/msg/comment' component={Comment} />
          <Route path='/msg/info' component={Info} />
          <Route path='/msg/care' component={Concern} />
          <Route path='/menu/sets' component={Sets} />
          <Route path='/menu/love' component={Love} />
          <Route path='/home' component={HomeApp} />
          <Route path='/sale' component={Sale} />
          <Route path='/cart' component={Cart} />
          <Route path='/user' component={UserApp} />
          <Route path='/menu' component={Menu} />
          <Route path='/detail/:id' component={Detail} />
          {/* <Route path='/news/:id' component={News} /> */}
          <Route path='/msg' component={Msg} />
          <Redirect from='/' to='/home' />
        </Switch>
      </div>
    )
  }
}

export default App;