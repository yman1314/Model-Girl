import React from 'react';
import './MotaStyle';

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div className='mota'>
        <div className='oout'>
          <b>请先登录</b>
          <div className='bott'>
            <span>狠心拒绝</span>
            <span>马上登陆</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;
