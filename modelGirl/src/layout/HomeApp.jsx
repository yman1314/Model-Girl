import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Care from '@/pages/Care';
import FindApp from '@/layout/FindApp';
import Around from '@/pages/Around';
import News from '@/pages/News';
import VideoNews from '@/components/home/find/VideoNews';
import Search from '@/pages/Search';
import Result from '@/pages/Result';

class HomeApp extends React.Component {
  render () {
    return(
      <div className='box'>
        <Switch>
          <Route path='/home/find/reference/news/:id' component={ News } />
          <Route path='/home/find/makeup/news/:id' component={ News } />
          <Route path='/home/find/careskin/news/:id' component={ News } />
          <Route path='/home/find/video/videonews/:id' component={ VideoNews } />
          <Route path='/home/care/news/:id' component={ News } />
          <Route path='/home/around/news/:id' component={ News } />
          <Route path='/home/care/search/result' component={ Result } />
          <Route path='/home/around/search/result' component={ Result } />
          <Route path='/home/find/search/result' component={ Result } />
          <Route path='/home/find/search' component={ Search } />
          <Route path='/home/care/search' component={ Search } />
          <Route path='/home/around/search' component={ Search } />
          <Route path='/home/find' component={ FindApp } />
          <Route path='/home/care' component={ Care } />
          <Route path='/home/around' component={ Around } />
          <Redirect path='/home' to='/home/find' />
        </Switch>
      </div>    
    )
  }
}

export default HomeApp;