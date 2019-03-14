import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom';
import '@/../public/css/qqStyle.scss';

class Com extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount(){
    console.log(this);
  }
  goBack () {
    this.props.history.goBack();
  }

  render () {
    return (
      <div className = "qqContent">
        <div className="qqLogin">
           <div className="qqheader">
              <span className='iconfont icon-fanhui1' onClick={this.goBack.bind(this)}></span>
              <h3>一键登录</h3>
           </div>
           <div className="qqlogo" >
              <img src='https://graph.baidu.com/resource/10229241b03993644a7d001551942289.jpg' alt='图片丢失' />
           </div>
           <div className="bbox">
             <div className="boxleft">
                <p>樱桃小丸子</p>
                <p>2535908027</p>
             </div>
             <img className="photo" alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551787043276&di=8c64391083d0070d9a16329d176e2efe&imgtype=0&src=http%3A%2F%2Fimg08.oneniceapp.com%2Fupload%2Favatar%2F2015%2F02%2F16%2Fa0a5caf942cae87f6399f8b15ccdef46.jpg" />
           </div>
           <button className="addaccount">添加账号</button>
           <button className="shouquan">授权并登录</button>
        </div>
      </div>
    )
  }

}

export default Com
