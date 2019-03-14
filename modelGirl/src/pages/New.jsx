import React, { Component } from 'react'
import '@/../public/css/newStyle.scss' ;

class Com extends Component {

  goBack(){
    this.props.history.goBack();
  }
  render () {
    return (
      <div className = "content">
        <div className="newpage">
           <header className="newheader">
             <span className="iconfont icon-fanhui1 back" onClick={this.goBack.bind(this)}></span>
             <div className="tc">消息通知</div>
           </header>
           <ul>
               <li>
                   <div className="left">
                     <img className="" src={require('../images/daxun.jpg')} alt=""/>
                   </div>
                   <div className="right">
                       <p>【震惊】这款清洁仪竟然有这样的来路</p>
                       <p>2019.03.11</p>
                       <div>
                         <img src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e57af4ba8e83.jpg" alt=""/>
                       </div>
                       
                   </div>
               </li>
               <li>
                   <div className="left">
                     <img className="" src={require('../images/timg3.jpg')} alt=""/>
                   </div>
                   <div className="right">
                       <p>这款超级自然地粉底液你有吗</p>
                       <p>2019.03.09</p>
                       <div>
                         <img src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/d57d2fbac41.jpg" alt=""/>
                       </div>
                   </div>
               </li>
               
               <li>
                   <div className="left">
                     <img className="" src={require('../images/timg4.jpg')} alt=""/>
                   </div>
                   <div className="right">
                       <p>明星都在用它?</p>
                       <p>2019.03.08</p>
                       <div>
                         <img src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/28a6b8f344e66.jpg" alt=""/>
                         
                       </div>
                   </div>
               </li>
               <li>
                   <div className="left">
                     <img className="" src={require('../images/timg6.jpg')} alt=""/>
                   </div>
                   <div className="right">
                       <p>听说补水之王非他莫属,赶快带回家吧</p>
                       <p>2019.03.06</p>
                       <div>
                         <img src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/3404f9df8d96a.jpg" alt=""/> 
                       </div>               
                   </div>
               </li>
           </ul>
        </div>
      </div>
    )
  }

}

export default Com
