import React from 'react';
import './newsStyle';
import { NavLink } from 'react-router-dom';
import Footer from '@/components/footer/Footer';
import api from '@/api/home';
import api1 from '@/api/user';
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
    api.requestVideo(this.props.match.params.id).then(data => {
      if (localStorage.getItem('isLogin')){
      api1.requestGetZan({username}).then(datas => {
        return new Promise((resolve, reject) => {
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
    Toast.loading('Loading...', 30, () => {
      console.log('Load complete !!!');
    });
    setTimeout(() => {
      Toast.hide();
    }, 1000);
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
  goBack () {
    console.log(this);
    this.props.history.goBack();
  }


  render () {
    let htmlArr = [];
    if (this.state.list.length !== 0) {
      htmlArr.push(
        <div className='newsContainer'  key={this.state.list._id}>
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
                <span className='iconfont icon-fenxiang'></span>
              </p>
            </div>
            <div className='ccen'>
              <div className="oout">
                <video id="video1" controls="controls">>
                  <source src={this.state.list.picUrl} type="video/mp4" />
                </video>
            </div>
              </div>
            <h3>{this.state.list.comment}</h3>
            <div className='cbott'>
              <div className='lt'>
                <span>转发</span>
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
    } else {
      htmlArr = <div>{loadingToast}</div>
    }
    return (
      <div className='wai'>{ htmlArr }</div>
    )
  }
} 

export default Com;