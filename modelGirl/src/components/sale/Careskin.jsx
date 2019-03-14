import React from 'react';
import '@/../public/css/saleStyle';
// import store from '@/store';
import { Link } from 'react-router-dom';
// import { SearchBar } from 'antd-mobile';
import api from '@/api/sale';

class Com extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      pageCode: 2,
      pageNumber: 16,
      goodsList: []
    }
  }
  componentDidMount () {
    api.requestGoodList(this.state.pageCode, this.state.pageNumber).then(data => {
      this.setState({
        goodsList: data
      })
    })
  }

  render () {
    return (
      <div className='content'>
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
    )
  }
}

export default Com;