import React, { Component } from 'react'
import '@/../public/css/concernStyle.scss'; 

class Com extends Component {

goBack(){
   this.props.history.goBack();
}

  render () {
    return (
      <div className = "content">
        <div className="cpage">
          <header className="cheader">
             <span className="iconfont icon-fanhui1 back" onClick={this.goBack.bind(this)}></span>
             <div className="tc">新增关注</div>
          </header>
          <ul>
              <li>
                 <div className="left"> 
                    <img className="" src={require('../images/daxun.jpg')} alt=""/>
                    <div>
                       <p>大勋勋 关注了你</p>
                       <span>昨天 11:11</span>
                    </div> 
                 </div>
                 <div className="right">
                     <span className="iconfont icon-guanzhu-copy"></span>
                     <span>关注</span>
                 </div>
              </li>
              <li>
                 <div className="left"> 
                    <img className="" src={require('../images/laocao.jpg')} alt=""/>
                    <div>
                       <p>曹老板 关注了你</p>
                       <span>昨天 03:21</span>
                    </div> 
                 </div>
                 <div className="right">
                     <span className="iconfont icon-guanzhu-copy"></span>
                     <span>关注</span>
                 </div>
              </li>
              <li>
                 <div className="left"> 
                    <img className="" src={require('../images/liyang.jpg')} alt=""/>
                    <div>
                       <p>李洋 关注了你</p>
                       <span>前天 15:31</span>
                    </div> 
                 </div>
                 <div className="right">
                     <span className="iconfont icon-guanzhu-copy"></span>
                     <span>关注</span>
                 </div>
              </li>
              <li>
                 <div className="left"> 
                    <img className="" src={require('../images/jiabaili.jpg')} alt=""/>
                    <div>
                       <p>加百利 关注了你</p>
                       <span>2019.3.5  15:31</span>
                    </div> 
                 </div>
                 <div className="right">
                     <span className="iconfont icon-guanzhu-copy"></span>
                     <span>关注</span>
                 </div>
              </li>
          </ul>
          <p className="c-b">
              没有更多新的消息
          </p>
        </div>
      </div>
    )
  }

}

export default Com
