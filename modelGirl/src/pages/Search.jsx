import React from 'react';
import Header from '@/components/home/Header';
import '@/../public/css/searchStyle';
import { SearchBar } from 'antd-mobile';
import { Modal } from 'antd-mobile';

class Com extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      val: [1, 2],
      value: '',
      word: [],
      hot: [
        '清洁','补水','唇釉','卸妆','面膜','洁面','洁面凝胶',
        '泡沫洗面奶','口红','眼线笔','洁面凝胶','眼影'
      ]
    }
  }
  componentWillMount () {
    console.log(this)
    if(localStorage.getItem('word')){
      this.setState({
        word: localStorage.getItem("word").split(',')
      })
    }
  }
  componentDidMount () {
    this.autoFocusInst.focus();
    // console.log(localStorage.getItem("word"));
    console.log(this.state.word)
  }

  goBack () {
    this.props.history.goBack();
  }
  onChange (value) {
    console.log(this.state.value)
    this.setState({ value });
  };
  onClear = () => {
    this.setState({ value: '' });
  };
  onSubmit () {
    console.log(this);
    if(this.props.match.path === "/home/find/search"){
      if(localStorage.getItem('word')){
        let arr = [];
        arr.push(localStorage.getItem('word'));
        arr.push(this.state.value);
        localStorage.setItem('word', arr)
      }else{
        localStorage.setItem('word', this.state.value)
      }
      this.props.history.push("/home/find/search/result?value=" + this.state.value)
    } else if(this.props.match.path === "/home/care/search") {
      if(localStorage.getItem('word')){
        let arr = [];
        arr.push(localStorage.getItem('word'));
        arr.push(this.state.value);
        localStorage.setItem('word', arr)
      }else{
        localStorage.setItem('word', this.state.value)
      }
      this.props.history.push("/home/care/search/result?value=" + this.state.value)
    } else {
      if(localStorage.getItem('word')){
        let arr = [];
        arr.push(localStorage.getItem('word'));
        arr.push(this.state.value);
        localStorage.setItem('word', arr)
      }else{
        localStorage.setItem('word', this.state.value)
      }
      this.props.history.push("/home/around/search/result?value=" + this.state.value)
    }
  }
  toResult (e, index) {
    if(this.props.match.path === "/home/find/search"){
      this.props.history.push('/home/find/search/result?value=' + e.target.innerHTML)
    } else if(this.props.match.path === "/home/care/search") {
      this.props.history.push('/home/care/search/result?value=' + e.target.innerHTML)
    } else {
      this.props.history.push('/home/around/search/result?value=' + e.target.innerHTML)
    }
  }
  toHot (e, index) {
    if(this.props.match.path === "/home/find/search"){
      if(localStorage.getItem('word')){
        let arr = [];
        arr.push(localStorage.getItem('word'));
        arr.push(e.target.innerHTML);
        localStorage.setItem('word', arr)
      }else{
        localStorage.setItem('word', e.target.innerHTML)
      }
      this.props.history.push('/home/find/search/result?value=' + e.target.innerHTML)
    } else if(this.props.match.path === "/home/care/search") {
      if(localStorage.getItem('word')){
        let arr = [];
        arr.push(localStorage.getItem('word'));
        arr.push(this.state.value);
        localStorage.setItem('word', arr)
      }else{
        localStorage.setItem('word', e.target.innerHTML)
      }
      this.props.history.push('/home/care/search/result?value=' + e.target.innerHTML)
    } else {
      if(localStorage.getItem('word')){
        let arr = [];
        arr.push(localStorage.getItem('word'));
        arr.push(this.state.value);
        localStorage.setItem('word', arr)
      }else{
        localStorage.setItem('word', e.target.innerHTML)
      }
      this.props.history.push('/home/around/search/result?value=' + e.target.innerHTML)
    }
  }
  Del () {
    const alert = Modal.alert;

    const showAlert = () => {
      const alertInstance = alert('客官', '清空搜索记录？', [
        { text: '我手抖了', onPress: () => console.log('cancel'), style: 'default' },
        { text: '果断清空', onPress: () => {
            localStorage.removeItem('word');
            this.setState({
              word: []
            })
            // this.props.history.replace(this.props.history.go(0))
          }
        },
      ]);
      setTimeout(() => {
        // 可以调用close方法以在外部close
        console.log('auto close');
        alertInstance.close();
      }, 500000);
    };

    showAlert(this)
    // localStorage.clear('word');
  }

  render () {
    let html = []
    if(localStorage.getItem('word')){
      html.push(
        <span className='iconfont icon-ziyuan' onClick={this.Del.bind(this)} key={this.state.val[0]}></span>
      )
    }
    return (
      <div className='searchContainer'>
        <Header className='header' type={this.props}></Header>
        <div className='searchContent'>
          <div className='top'>
            <SearchBar
              ref={ref => this.autoFocusInst = ref}
              value={this.state.value}
              placeholder="大家都在搜“滋润肌肤之神器”"
              onSubmit={this.onSubmit.bind(this)}
              onClear={this.onClear.bind(this)}
              onFocus={() => console.log()}
              onBlur={() => console.log()}
              onCancel={this.goBack.bind(this)}
              onChange={this.onChange.bind(this)}
              />
          </div>
          <div className='bott'>
            <div className='ccen'>
              <h3>
                <span>历史纪录</span>
                {html}
              </h3>
              <ul className='te'>
                {
                  this.state.word.map((item, index) => {
                    return (
                      <li  onClick={(e) => this.toResult(e, index)} key={index}>{ item }</li>
                    )
                  })
                }
              </ul>
            </div>
            <div className='ccen'>
              <h3>热门搜索</h3>
              <ul>
                {
                  this.state.hot.map((item, index) => {
                    return (
                      <li  onClick={(e) => this.toHot(e, index)} key={index}>{ item }</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;