import React from 'react';
import { NavLink } from 'react-router-dom';

class Com extends React.Component {
  render () {
    return (
      <footer className='footer'>
          <ul>
            <NavLink to='/home'>首页</NavLink>
            <NavLink to='/sale'>商城</NavLink>
            <NavLink to='/kind' className='iconfont icon-add'></NavLink>
            <NavLink to='/msg'>消息</NavLink>
            <NavLink to='/user'>我的</NavLink>
          </ul>
        </footer>
    )
  }
}

export default Com;
