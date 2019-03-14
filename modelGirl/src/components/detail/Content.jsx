import React from 'react';
import '@/../public/css/detailStyle';
import api from '@/api/sale';
import api1 from '@/api/cart';
import { Toast, Modal } from 'antd-mobile';

const alert = Modal.alert;

const showAlert = (props) => {
  const alertInstance = alert('游客', '请先登录', [
    { text: '狠心拒绝', onPress: () => console.log('cancel'), style: 'default' },
    { text: '马上登陆', onPress: () => {props.props.history.push('/user/login')} },
  ]);
  setTimeout(() => {
    // 可以调用close方法以在外部close
    console.log('auto close');
    alertInstance.close();
  }, 500000);
};


function loadingToast() {
  Toast.loading('Loading...', 1, () => {
    console.log('Load complete !!!');
  });
}

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      pageCode: 1,
      pageNumber: 88,
      goodsList: [],
      username: ''
    }
  }
  componentDidMount () {
    api.requestGoodList(this.state.pageCode, this.state.pageNumber).then(data => {
      data.map((item, index) => {
        if(item._id === this.props.type.match.params.id) {
          this.setState({
            goodsList: item
          })        
        }
        return this.state.goodsList
      })
    })
    Toast.loading('Loading...', 30, () => {
      console.log('Load complete !!!');
    });
    setTimeout(() => {
      Toast.hide();
    }, 1000);
    if(localStorage.getItem('isLogin')){
      this.setState({
        username: localStorage.getItem('isLogin')
      })
    }
  }

  addCart () {
    if(localStorage.getItem('isLogin')){
      let username = this.state.username; 
      let goodsId = this.state.goodsList._id;
      let goodsPrice = this.state.goodsList.price;
      // console.log(goodsId)
      api1.requestCart({username, goodsId, goodsPrice}).then(data => {
        Toast.success('加入购物车成功', 1);
        console.log(data);
      })
    } else {
      showAlert();
    }
  }
  goCart () {
    if(localStorage.getItem('isLogin')){
      this.props.type.history.push('/cart')
    } else {
      showAlert();
    }
  }

  render () {
    let htmlArr = []
    console.log(this.state.goodsList)
    if (this.state.goodsList.length !== 0) {
      htmlArr.push(
        <div className='content' key={this.state.goodsList._id}>
          <div className='top'>
            <img src={this.state.goodsList.picUrl} alt='图片丢失' />
          </div>
          <div className='center'>
            <div className='lt'>
              <p>￥ {this.state.goodsList.price}</p>
              <p>女王价 ￥ {this.state.goodsList.nowPrice - 4.1}</p>
            </div>
            <span></span>
            <div className='rt'>
              <p>3.8女王节</p>
              <p>节后接力狂欢</p>
            </div>
          </div>
          <h3>{this.state.goodsList.title}</h3>
          <div className='bottom'>
            <div className='lt1'>
              <span className='iconfont icon-aixin'></span>
              <span>心愿单</span>
            </div>
            <div className='rt1'>
              <span className='iconfont icon-youhuiquan'></span>
              <span>优惠券</span>
            </div>
          </div>
          <div className='bott'>
            <div className='te'>
              <span className='iconfont icon-dianpu'></span>
              <span>店铺</span>
            </div>
            <div className='te'>
              <span className='iconfont icon-kefu'></span>
              <span>客服</span>
            </div>
            <div className='te'>
              <span className='iconfont icon-xing'></span>
              <span>收藏</span>
            </div>
            <span className='add' onClick={this.addCart.bind(this)}>加入购物车</span>
            <span className='buy' onClick={this.goCart.bind(this)}>立即购买</span>
          </div>
        </div>
      )
    } else {
      htmlArr = <div>{loadingToast}</div>
    }
    return (
      <div>{htmlArr}</div>
    )
  }
} 

export default Com;