import React from 'react';
import '@/../public/css/newsStyle';
import { NavLink } from 'react-router-dom';
import Footer from '@/components/footer/Footer';
import api from '@/api/home';
import api1 from '@/api/user';
import { Modal } from 'antd-mobile';

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



class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: []
    }
  }
  componentWillMount(){
    this.setState({
      username: localStorage.getItem('isLogin')
    })
  }
  componentDidMount () {
    let username = this.state.username;
    api.requestGoods(this.props.match.params.id).then(data => {
      if (localStorage.getItem('isLogin')){
        api1.requestGetZan({username}).then(datas => {
          return new Promise((resolve, reject) => {
            if(datas.data.length > 0){
              data.map((ele, inde) => {
                datas.data[0].zan.map((item, index) => {
                  if(ele._id === item){
                    ele.itemNum = false
                  }
                  return ''
                })
                return ''
              })
              resolve(data)
            }else{
              resolve(data)
            }
        })
      }).then(dat => {
        api1.requestGetCollect({username}).then(datas => {
          return new Promise((resolve, reject) => {
            if(datas.data.length > 0){
              dat.map((ele, inde) => {
                datas.data[0].collect.map((item, index) => {
                  if(ele._id === item){
                    ele.nowPrice = false
                  }
                  return ''
                })
                return ''
              })
              resolve(data)
            }else{
              resolve(data)
            }
        })
      }).then(data => {
        this.setState({
          list: data[0]
        })
    })
      })
    }else{
      this.setState({
        list: data[0]
      })
    }
    })
    
  }
  addClass (e, zan) {
    let username = this.state.username;
    if(localStorage.getItem('isLogin')){
      // console.log(id)
      api1.requestSetZan({username, zan}).then(() => {
        console.log('点赞成功')
      })
      e.target.id = 'active'
    } else{
      showAlert(this)
    }
  }
  addClass1 (e, collect) {
    let username = this.state.username;
    if(localStorage.getItem('isLogin')){
      // console.log(id)
      api1.requestSetCollect({username, collect}).then(() => {
        console.log('收藏成功')
      })
      e.target.id = 'active'
    } else{
      showAlert(this)
    }
  }
  alter () {
    if(localStorage.getItem('isLogin')){
    } else{
      showAlert(this)
    }
  }
  isLogin () {
    if(localStorage.getItem('isLogin')){
    } else{
      showAlert(this)
    }
  }
  showComment () {
    if(localStorage.getItem('isLogin')){
    } else{
      showAlert(this)
    }
  }
  
  goBack () {
    console.log(this);
    this.props.history.goBack();
  }

  render () {
    if(this.state.list){
      console.log(this.state.list)
    }
    return (
      <div className='newsContainer'>
        <header className='header'>
            <span className='iconfont icon-fanhui1' onClick={this.goBack.bind(this)}></span>
            <div className='top'>
              <NavLink to='/home/care'>关注</NavLink>
              <NavLink to='/home/find'>发现</NavLink>
              <NavLink to='/home/around'>附近</NavLink>
            </div>
        </header>
        <div className='newsContent'>
          <div className='ctop'>
            <p>
              <img src='./2.jpg' alt='图片丢失'/>
              <span>王某人</span>
            </p>
            <p>
              <span className='iconfont icon-guanzhu te1' onClick={this.addClass.bind(this)}></span>
              <span className='iconfont icon-fenxiang' onClick={this.isLogin.bind(this)}></span>
            </p>
          </div>
          <div className='ccen'>
            <img src={this.state.list.picUrl} alt='图片丢失' />
          </div>
          <h3>{this.state.list.comment}</h3>
          <div className='cbott'>
            <div className='lt'>
              <span onClick={this.alter.bind(this)}>转发</span>
            </div>
            <div className='rt'>
              <span className={ this.state.list.nowPrice ? 'iconfont icon-shoucang ' : 'iconfont icon-shoucang active' } onClick={ (e) => {this.addClass1(e, this.state.list._id)} }></span>
              <span className='iconfont icon-xinxi1'></span>
              <span className={ this.state.list.itemNum ? 'iconfont icon-zan ' : 'iconfont icon-zan active' } onClick={ (e) => {this.addClass(e, this.state.list._id)} }></span>
            </div>
          </div>
        </div>
        <Footer className='footer'></Footer>
      </div>
    )
  }
} 

export default Com;