import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import '@/../public/css/findHeaderStyle'

class Com extends Component {
  constructor(props){
    super(props);
    this.state = {
      val: [1,2,3,4]
    }
  }
  componentDidMount () {
  }
  goMenu () {
    this.props.type.history.push('/menu');
  }

  render () {
    let htmlArr = [];
    if(localStorage.getItem('isLogin')){
      htmlArr.push(
        // <div className="left" key={this.state.val[0]}>
          <img key={this.state.val[1]} src='./tu.jpg' alt='图片丢失' onClick={this.goMenu.bind(this)} />
        // </div>
      )
    } else {
      htmlArr.push(
        // <div className="left" key={this.state.val[1]}>
          <img key={this.state.val[1]} src='https://graph.baidu.com/resource/1021aacbf8af0503ce53501552395409.jpg' alt='图片丢失' onClick={this.goMenu.bind(this)} />
        // </div>
      )
    }
    return (
      <div className="header">
        <div className='left'>{htmlArr}</div>
        <div className="right">
          <NavLink to='/home/care'>关注</NavLink>
          <NavLink to='/home/find'>发现</NavLink>
          <NavLink to='/home/around'>附近</NavLink>
        </div> 
      </div>  
    )
  }
}

export default Com;