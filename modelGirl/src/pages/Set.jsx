import React, { Component } from 'react'
import '@/../public/css/setStyle.scss';

class Com extends Component {

  goBack(){
    this.props.history.goBack();
  }
  render () {
    return (
      <div className = "content">
        <div className="setbox">
           <header className="sheader">
             <span className="iconfont icon-fanhui1 back" onClick={this.goBack.bind(this)}></span>
             <div className="tc">设置</div>
           </header>
           <ul>
               <li>
                   <p>个人资料</p>
                   <span className="iconfont icon-arrow-right"></span>
               </li>
               <li>
                   <p>账号与安全</p>
                   <span className="iconfont icon-arrow-right"></span>
               </li>
               <li>
                   <p>我收到的赞</p>
                   <span className="iconfont icon-arrow-right"></span>
               </li>
               <li>
                   <p>新消息通知</p>
                   <span className="iconfont icon-arrow-right"></span>
               </li>
               <li>
                   <p>隐私</p>
                   <span className="iconfont icon-arrow-right"></span>
               </li>
               <li>
                   <p>通用</p>
                   <span className="iconfont icon-arrow-right"></span>
               </li>
               <li>
                   <p>意见反馈</p>
                   <span className="iconfont icon-arrow-right"></span>
               </li>
           </ul>
        </div>
      </div>
    )
  }

}

export default Com
