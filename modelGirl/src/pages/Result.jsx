import React from 'react';
import '@/../public/css/resultStyle'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { Link } from 'react-router-dom';
import api from '@/api/home';
import saleApi from '@/api/sale';
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


const tabs = [
  { title: <Badge>动态</Badge> },
  { title: <Badge>商品</Badge> },
];

class Com extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      list1: [],
      goodsList: []
    }
  }
  componentWillMount () {
    console.log(this)
    this.setState({
      value: this.props.location.search.slice(1).split('=')[1]
    })
  }
  componentDidMount () {
    api.requestResults(this.state.value).then(data => {
      console.log(data);
      this.setState({
        list1: data
      })
    })
    saleApi.requestResult(this.state.value).then(data => {
      // console.log(this.state.value)
      // console.log(data)
      this.setState({
        goodsList: data
      })
    })
  }
    
  addClass (e) {
    if(localStorage.getItem('isLogin')){
      if (e.target.id === 'active') {
        e.target.id = ''
      } else {
        e.target.id = 'active'
      }
    } else{
      showAlert(this)
    }
  }

  goBack () {
    this.props.history.goBack();
  }
  toHome () {
    this.props.history.push('/');
  }
  render () {
    return (
      <div className='resultContainer'>
        <div className='header'>
          <span className='iconfont icon-fanhui1' onClick={this.goBack.bind(this)}></span>
          <span>{this.state.value}</span>
          <span className='iconfont icon-shouye-1' onClick={this.toHome.bind(this)}></span>
        </div>
        <div className='content'>
          <Tabs tabs={tabs}
            initialPage={1}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
              <div className='out'>
                <ul className='findReCen'>
                  {
                    this.state.list1.map((item, index) => {
                      return (
                        <li className='li' key={index}>
                          <Link to={'/home/find/makeup/news/' + item._id}  className='view'>
                            <img src={item.picUrl} alt='图片丢失'/>
                          </Link>
                          <h3>{item.comment}</h3>
                          <div className='bott'>
                            <div className="left">
                              <img src='./tu.jpg' alt='图片丢失' />
                              <p>王某人王某人</p>
                            </div>
                            <div className="right">
                              <span className='iconfont icon-zan' onClick={this.addClass.bind(this)}></span>
                            </div>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
              <div className='scontent'>
                <ul className='scen'>
                  {
                    this.state.goodsList.map((item, index) => {
                      return (
                        <Link to={'/detail/' + item._id} className='li' key={index}>
                          <div className='out'>
                            <img src={item.picUrl} alt='图片丢失'/>
                          </div>
                          <p>{item.title}</p>
                          <div className="left">
                            <span>￥{item.price}</span>
                            <span>优惠价￥{ item.nowPrice - 4.1 }</span>
                          </div>
                        </Link>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </Tabs>
          <WhiteSpace />
        </div>
      </div>
    )
  }
}

export default Com;