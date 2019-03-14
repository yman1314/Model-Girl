import React from 'react';
import Header from '@/components/home/Header';
import Footer from '@/components/footer/Footer';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Reference from '@/components/home/find/Reference';
import Makeup from '@/components/home/find/Makeup';
import Careskin from '@/components/home/find/Careskin';
import Video from '@/components/home/find/Video';
import { SearchBar } from 'antd-mobile';



class Com extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  componentDidMount () {
    // this.props = this.props.type
  }
  toSearch () {
    console.log(this)
    this.props.history.push('/home/find/search');
  }
  render () {
    return (
      <div className='findContainer'>
        <Header className='header' type={this.props}></Header>
        <div className='findContent'>
          <div className='top'>
            <SearchBar
              value={this.state.value}
              placeholder="大家都在搜“滋润肌肤之神器”"
              onSubmit={value => console.log()}
              onClear={value => console.log()}
              onFocus={this.toSearch.bind(this)}
              onBlur={() => console.log()}
              onCancel={() => console.log()}
              onChange={this.onChange}
            />
          </div>
          <ul className='nav'>
            <NavLink to='/home/find/reference'>推荐</NavLink>
            <NavLink to='/home/find/makeup'>彩妆</NavLink>
            <NavLink to='/home/find/careskin'>护肤</NavLink>
            <NavLink to='/home/find/video'>视频</NavLink>
          </ul>
          <Switch>                    
            <Route path='/home/find/reference' component={ Reference } />
            <Route path='/home/find/makeup' component={ Makeup } />
            <Route path='/home/find/careskin' component={ Careskin } />
            <Route path='/home/find/video' component={ Video } />
            <Redirect path='/home' to='/home/find/reference' />
          </Switch>
        </div>
        <Footer className='footer'></Footer>
      </div>
    )
  }
}

export default Com;