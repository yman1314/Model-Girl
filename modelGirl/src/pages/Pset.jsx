import React, { Component } from 'react'
import '@/../public/css/psetStyle.scss';
import { ImagePicker, WingBlank } from 'antd-mobile';

const data = [{
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551787043276&di=8c64391083d0070d9a16329d176e2efe&imgtype=0&src=http%3A%2F%2Fimg08.oneniceapp.com%2Fupload%2Favatar%2F2015%2F02%2F16%2Fa0a5caf942cae87f6399f8b15ccdef46.jpg',
    id: '2121',
  }];
  
class Com extends Component {

    state = {
        files: data,
        multiple: false,
      }
      onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
      }
      onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
          multiple: index === 1,
        });
      }
      goBack(){
        this.props.history.goBack();
      }

  render () {
    const { files } = this.state;
    return (
      <div className = "content">
        <div className="pset">
            <header className="pheader">
              <span className="iconfont icon-fanhui1 back" onClick={this.goBack.bind(this)}></span>
              <div className="tc">个人设置</div> 
              {/* <span>完成</span> */}
            </header>
            <div className="top">
              {/* <img  alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551787043276&di=8c64391083d0070d9a16329d176e2efe&imgtype=0&src=http%3A%2F%2Fimg08.oneniceapp.com%2Fupload%2Favatar%2F2015%2F02%2F16%2Fa0a5caf942cae87f6399f8b15ccdef46.jpg" /> */}
              <WingBlank>
              <ImagePicker
                files={files}
                onChange={this.onChange}
                onImageClick={(index, fs) => console.log(index, fs)}
                selectable={files.length < 1}
                multiple={this.state.multiple}
                />
                </WingBlank>
              <span>修改头像</span>          
            </div>
            <ul>
               <li>
                 <p>修改名字</p>
                 <span className="iconfont icon-arrow-right"></span>
               </li>
               <li>
                 <p>身份证</p>
                 <span className="iconfont icon-arrow-right"></span>
               </li>
               <li>
                 <p>性别</p>
                 <span className="iconfont icon-arrow-right"></span>
               </li>
               <li>
                 <p>生日</p>
                 <span className="iconfont icon-arrow-right"></span>
               </li>
               <li>
                 <p>个性签名</p>
                 <span className="iconfont icon-arrow-right"></span>
               </li>
            </ul>
            <div className="p-btm">
                <p>会员等级</p>
                <div>
                  <span>LV2</span> 
                  <span className="iconfont icon-arrow-right"></span>
                </div>
            </div>

        </div>
      </div>
    )
  }

}

export default Com
