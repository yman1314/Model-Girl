import React, { Component } from 'react'
import '@/../public/css/commentStyle.scss';

class Com extends Component {

  goBack(){
    this.props.history.goBack();
  }

  render () {
    return (
      <div className = "content">
        <div className="comment">
           <header className="cmtheader">
             <span className="iconfont icon-fanhui1 back" onClick={this.goBack.bind(this)}></span>
             <div className="tc">收到的评论和@</div>
           </header>
           <ul>
             <li>
               <div className="c-t">
                  <div className="left"> 
                        <img className="" src={require('../images/daxun.jpg')} alt=""/>
                        <div>
                          <p>大勋勋 评论了你</p>
                          <span>昨天 13:11</span>
                        </div> 
                    </div>
                    <div className="right">
                        <img src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/1797c947a4227.jpg"  alt="" />
                    </div>
               </div>
               <div className="c-b">
                  这款洗面奶我也在用
               </div>
             </li>
             <li>
               <div className="c-t">
                  <div className="left"> 
                        <img className="" src={require('../images/laocao.jpg')} alt=""/>
                        <div>
                          <p>曹老板 评论了你</p>
                          <span>昨天 12:19</span>
                        </div> 
                    </div>
                    <div className="right">
                        <img src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/1797c947a4227.jpg"  alt="" />
                    </div>
               </div>
               <div className="c-b">
                enen~ 用着挺好
               </div>
             </li>
             <li>
               <div className="c-t">
                  <div className="left"> 
                        <img className="" src={require('../images/liyang.jpg')} alt=""/>
                        <div>
                          <p>李洋 赞了你</p>
                          <span>昨天 12:17</span>
                        </div> 
                    </div>
                    <div className="right">
                        <img src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/1797c947a4227.jpg"  alt="" />
                    </div>
               </div>
               <div className="c-b">
                 
               </div>
             </li>
             <li>
               <div className="c-t">
                  <div className="left"> 
                        <img className="" src={require('../images/jiabaili.jpg')} alt=""/>
                        <div>
                          <p>加百利 评论了你</p>
                          <span>昨天 11:11</span>
                        </div> 
                    </div>
                    <div className="right">
                        <img src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/1797c947a4227.jpg"  alt="" />
                    </div>
               </div>
               <div className="c-b">
                 这款洗面奶我每天都在用
               </div>
             </li>
             
           </ul>
        </div>
      </div>
    )
  }

}

export default Com
