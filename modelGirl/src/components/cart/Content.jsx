import React, {Component} from 'react';
import api from '@/api/cart';
import api1 from '@/api/home';
import { Toast } from 'antd-mobile';

class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 3,
      val1: 2,
      cartList: [],
      username: '',
      goodsNum: [],
      arr:[],
      vals: [1, 2],
      sum_price: 0,
      flag: false
    };
  }
  componentWillMount () {
    if(localStorage.getItem('isLogin')){
      this.setState({
        username: localStorage.getItem('isLogin')
      })
    }
  }
  componentDidMount () {
    console.log(this.props.Show);
    let username = this.state.username;
    api.requestGetCart({username}).then(data => {
      this.setState({
        goodsNum: data[0].cart
      })
      this.props.Msg(this.state.goodsNum.length)
      console.log(this.props)
      console.log(this.state.goodsNum)
      return new Promise((resolve, reject) => {
        data[0].cart.map((item) => {
          api1.requestGoods(item.goodsId).then(data => {
            this.setState({
              cartList: [...this.state.cartList, ...data]
            })
            console.log(data)
            resolve(data)
          })
          return ''
        })
      })
    })
  }
  componentWillReceiveProps(){
    var username = this.state.username;
    api.requestGetCart({username}).then(data => {
      this.setState({
        goodsNum: data[0].cart
      })
    })
    this.setState({
      flag: this.props.Show
      // goodsNum: this.state.goodsNum
    })
  }
  getInputText=(e,i)=>{
    this.setState({
      goodsNum:this.state.goodsNum.map((ele,index)=>{
            if(index===i){
                ele.goodsNum=e.target.value
                return ele
            }else {
                return ele
            }
        })
    })
    this.SumPrice()
}
//jia
augment=(e,i)=>{
    this.setState({
      goodsNum:this.state.goodsNum.map((ele,index)=>{
            if(index===i){
              ele.goodsNum=ele.goodsNum*1+1
              let username = this.state.username; 
              let goodsId = ele.goodsId;
              let goodsPrice = ele.goodsPrice;
              let goodsNum = ele.goodsNum;
              api.requestCart({username, goodsId, goodsPrice, goodsNum}).then(() => {
                console.log('ok')
              })
              return ele
            }else {
                return ele
            }
        })
    })
    this.SumPrice()
 }
//jian
reduce=(e,i)=> {
  console.log(this.state.goodsNum)
    this.setState({
      goodsNum:this.state.goodsNum.map((ele,index)=>{
            if(index===i){
              if(ele.goodsNum === 1){
                ele.goodsNum = 1
              }else{
                ele.goodsNum=ele.goodsNum*1-1
              }
              let username = this.state.username; 
              let goodsId = ele.goodsId;
              let goodsPrice = ele.goodsPrice;
              let goodsNum = ele.goodsNum;
              api.requestCart({username, goodsId, goodsPrice, goodsNum}).then(() => {
                console.log('ok')
              })
              return ele
            }else {
                return ele
            }
        })
    })
    this.SumPrice()
}
CheckAllorNoAll=(e,i)=>{
  this.setState({
      goodsNum:this.state.goodsNum.map((ele,index)=>{
          if(index===i){
              ele.checked=!ele.checked
          }
          return ele
      })
  })
  var flag=this.state.goodsNum.map((ele,index)=>{
      if(ele.checked === false){
        return false
      } else {
        return true
      }
  })
  if(flag===true){
      this.refs.checkALL.checked=true
  }else {
      this.refs.checkALL.checked=false
  }
  this.SumPrice()
}
//全选全不选,判断全选状态
CheckedAll=(e)=>{
  if(e.target.checked===true){
      this.setState({
        goodsNum:this.state.goodsNum.map((ele,index)=>{
              ele.checked=true
              return ele
          })
      })
  }else  if(e.target.checked===false){
      this.setState({
        goodsNum:this.state.goodsNum.map((ele,index)=>{
              ele.checked=false
              return ele
          })
      })
  }
  this.SumPrice()

}
SumPrice=()=>{
  var sum=0
  this.state.goodsNum.forEach((ele,index)=>{
      if(ele.checked===true){
       sum += ele.goodsNum*ele.goodsPrice
      }
  })
  this.setState({
      sum_price:sum
  })
}
//结算传值
SettleAccounts=()=>{
  var shopping=[]
  this.state.goodsNum.forEach((ele,index)=>{
      if(ele.checked===true){
          shopping.push(ele)
      }
  })
  console.log(shopping)
  window.localStorage.setItem("shopping",JSON.stringify(shopping))
  window.localStorage.setItem("sumprice",JSON.stringify(this.state.sum_price))
  this.props.history.push('/tab4')
}
remove(){
  var arr = [];
  this.setState({
    goodsNum: this.state.goodsNum.map((ele, index) => {
      if(ele.checked === false){
        // arr.push(ele)
        return ele
      }
      return '';
    })
  })
  arr = this.state.goodsNum;
  api.requestClearCart({arr}).then(() => {
    console.log('ok')
  })
}
submit(){
  if(this.state.sum_price !== 0){
    Toast.success('提交成功', 1);
    Toast.success('提交成功，继续购物', 2);
          let timer = null
          timer = setTimeout(() => {
            this.props.type.history.push('/sale');
            clearTimeout(timer);
          },2000)
  } else{
    Toast.info('还没有选择商品哦', 1);
  }
}

  render () {
    let htmlarr= [];
    if(this.state.flag){
      htmlarr.push(
        <div className='bright' key={this.state.vals[0]}>
          <span>合计：￥{this.state.sum_price}</span>
          <b onClick={this.submit.bind(this)}>提交订单</b>
        </div>
      )
    }else {
      htmlarr.push(
        <div className='bright' key={this.state.vals[1]}>
          <i onClick={this.remove.bind(this)}>删除商品</i>
        </div>
      )
    }
    return (
      <div className='tcontent'>
        <div className='out'>
          <ul className='out'>
            <li className='out'>
              <input type='checkbox' className='out' />
              <span className='out'>小红书</span>
              <ul className='in'>
                {
                  this.state.cartList.map((item, index) => {
                    return (
                      <li className='in' key={index}>
                        <input type='checkbox' className='int' 
                          checked={this.state.goodsNum[index].checked} onChange={
                            (e)=>{
                              this.CheckAllorNoAll(e,index)
                          }
                        }/>
                        <img src={item.picUrl} alt='图片丢失' />
                        <div className='left'>
                          <h3>{item.title}</h3>
                            <div className="all">
                              <button className='lt' onClick={
                                  (e)=>{
                                      this.reduce(e,index)
                                  }
                              }>-</button>
                              <input type="text" className='ce' minLength='1' ref="nums" value={this.state.goodsNum[index].goodsNum} onChange={
                                  (e)=>{
                                    this.getInputText(e,index)
                                  }
                              }/>
                              <button className='rt' onClick={
                                  (e)=>{
                                      this.augment(e,index)
                                  }
                              }>+</button>
                          </div>
                          <p>￥ {item.price * this.state.goodsNum[index].goodsNum}</p>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </li>
          </ul>
        </div>
        <div className='bottom'>
          <div className='bleft'>
            <input type='checkbox' className='bott'ref="checkALL" onChange={
                (e)=>{
                    this.CheckedAll(e)
                }
            }/>
            <i>全选</i>
          </div>
          {htmlarr}
        </div>
      </div>
    )
  }
}

export default Com;