import React, { Component } from 'react'
import '@/../public/css/wishlistStyle.scss';


class Com extends Component {
   goBack(){
      this.props.history.goBack();
    }
  render () {
    return (
      <div className = "content">
         <div className="wishlist">
           <header className="wheader">
             <span className="iconfont icon-fanhui1 back" onClick={this.goBack.bind(this)}></span>
             <div className="tc">心愿单</div>
           </header>
           <div className="w-c">
              <div className="tex">心愿单还是空的哦 !</div>
           </div>
           <div className="w-b">
              <p>—— —— 猜你喜欢 —— ——</p>
              <ul>
                  <li>
                      <img alt="" src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e57af4ba8e83.jpg" />
                      <p>Beauty Artisan美丽工匠 电动洗刷器   快速清洁</p>
                      <div>
                         <span>￥128</span>
                         <span>优惠价￥123.9</span>
                      </div>
                  </li>
                  <li>
                      <img alt="" src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e57af4ba8e83.jpg" />
                      <p>Beauty Artisan美丽工匠 电动洗刷器   快速清洁</p>
                      <div>
                         <span>￥128</span>
                         <span>优惠价￥123.9</span>
                      </div>
                  </li>
                  <li>
                      <img alt="" src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e57af4ba8e83.jpg" />
                      <p>Beauty Artisan美丽工匠 电动洗刷器   快速清洁</p>
                      <div>
                         <span>￥128</span>
                         <span>优惠价￥123.9</span>
                      </div>
                  </li>
                  <li>
                      <img alt="" src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e57af4ba8e83.jpg" />
                      <p>Beauty Artisan美丽工匠 电动洗刷器   快速清洁</p>
                      <div>
                         <span>￥128</span>
                         <span>优惠价￥123.9</span>
                      </div>
                  </li>
                  <li>
                      <img alt="" src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e57af4ba8e83.jpg" />
                      <p>Beauty Artisan美丽工匠 电动洗刷器   快速清洁</p>
                      <div>
                         <span>￥128</span>
                         <span>优惠价￥123.9</span>
                      </div>
                  </li>
                  <li>
                      <img alt="" src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e57af4ba8e83.jpg" />
                      <p>Beauty Artisan美丽工匠 电动洗刷器   快速清洁</p>
                      <div>
                         <span>￥128</span>
                         <span>优惠价￥123.9</span>
                      </div>
                  </li>
              </ul>
           </div>
         </div>
      </div>
    )
  }

}

export default Com
