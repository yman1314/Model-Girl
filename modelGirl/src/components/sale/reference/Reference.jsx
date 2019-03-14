import React from 'react';
import './style'
import { Link } from 'react-router-dom';
import { Carousel } from 'antd-mobile';
import api from '@/api/sale';

class Com extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      bannerList: [],
      goodsList: [],
      showList: [],
      imgHeight: '1.6rem',
      pageCode: 1,
      pageNumber: 16
    }
  }
  componentDidMount () {
    api.requestBanner().then(data => {
      this.setState({
        bannerList: data
      })
    })
    api.requestGoodList(this.state.pageCode, this.state.pageNumber).then(data => {
      this.setState({
        goodsList: data
      })
    })
    api.requestGoodList(3, 8).then(data => {
      this.setState({
        showList: data
      })
    })
  }
  render () {
    let arr = [];
    this.state.showList.map((item, index) => {
      arr.push(item.picUrl);
      return arr
    })
    return (
      <div className='content'>
        <div className='rout'>
          <div className='ban'>
            <Carousel
              autoplay={true}
              infinite
              beforeChange={(from, to) => console.log()}
              afterChange={index => console.log()}
            >
              {this.state.bannerList.map((item, index) => (
                <div className='top' key={index}>
                    <img className="imgs" src={ item.imgSrc } alt='图片丢失' 
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}/>
                </div>
              ))}
            </Carousel>
          </div>
          <div className='ad'>
            <img src={arr[0]} alt='图片丢失' />
            <div className='center'>
              <p>女神节来了！</p>
              <p>抢更多超值grilStyle</p>
            </div>
            <div className='left'>
              <span>Go !</span>
            </div>
          </div>
          <ul className='stop'>
            <li>
              <p>女生节限时抢购</p>
              <div className='sout'>
                <img src={arr[1]} alt="图片丢失" className='img1' />
                <img src={arr[2]} alt="图片丢失" className='img2' />
              </div>
            </li>
            <li>
              <p>女生节限时抢购</p>
              <div className='sout'>
                <img src={arr[3]} alt="图片丢失" className='img1' />
                <img src={arr[4]} alt="图片丢失" className='img2' />
              </div>
            </li>
          </ul>
          <ul className='recenter'>
            <li>
              <p>超值特惠</p>
              <img src={arr[5]} alt="图片丢失" />
            </li>
            <li>
              <p>人气产品</p>
              <img src={arr[6]} alt="图片丢失" />
            </li>
            <li>
              <p>小红书</p>
              <img src={arr[7]} alt="图片丢失" />
            </li>
          </ul>
          <ul className='scenter'>
            {
              this.state.goodsList.map((item, index) => {
                return (
                  <Link to={'/detail/' + item._id} className='li' key={index}>
                    <img src={item.picUrl} alt='图片丢失'/>
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
    )
  }
}

export default Com;