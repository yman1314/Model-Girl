import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { SearchBar } from 'antd-mobile';
// import ShowMsg from '@/components/common/ShowMsg';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      val: [1,2,3,4]
    }
  }
  componentDidMount () {
  }
  goMenu () {
    console.log(this);
    this.props.type.history.push('/menu');
  }
  goSearch () {
    this.props.type.history.push('/home/find/search')
  }
  goBack () {
    this.props.type.history.goBack();
  }

  render () {
    let htmlArr = [];
    if(localStorage.getItem('isLogin')){
      htmlArr.push(
        // <div className="left" key={this.state.val[0]}>
          <img key={this.state.val[1]} src='./tu.jpg' alt='图片丢失' onClick={this.goMenu.bind(this)} />
        // </div>
      )
    } else {
      htmlArr.push(
        // <div className="left" key={this.state.val[1]}>
          <img key={this.state.val[1]} src='https://graph.baidu.com/resource/1021aacbf8af0503ce53501552395409.jpg' alt='图片丢失' onClick={this.goMenu.bind(this)} />
        // </div>
      )
    }
    return (
      <div className="sheader">
        <div className='left'>{htmlArr}</div>
        <div className="right">
          <SearchBar
            value={this.state.value}
            placeholder="大家都在搜“滋润肌肤之神器”"
            onSubmit={value => console.log()}
            onClear={value => console.log()}
            onFocus={this.goSearch.bind(this)}
            onBlur={() => console.log()}
            onCancel={this.goBack.bind(this)}
            onChange={this.onChange}
          />
        </div>
      </div>  
    )
  }
}

export default Com;