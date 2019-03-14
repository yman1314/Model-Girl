import axios from 'axios'
import app from '@/api';

const api = {
  requestBanner () {
    return new Promise((resolve, reject) => {
      axios.get(app.baseUrl + '/api/banner')
        .then(data =>  {
          // console.log(data)
          resolve(data.data.data)
        })
        .catch(err => reject(err))
      // resolve(banner)
    })
  },
  requestGoodList (pageCode, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get(app.baseUrl + '/api/product?pageCode=' + pageCode + '&pageNumber=' + pageNumber)
        .then(data =>  {
          // console.log(data)
          resolve(data.data.data)
        })
        .catch(err => reject(err))
      // resolve(banner)
    })
  },
  requestResult (title) {
    console.log(title)
    return new Promise((resolve, reject) => {
      axios.get(app.baseUrl + '/api/product/search?title=' + title)
        .then(data =>  {
          // console.log(data)
          resolve(data.data.data)
        })
        .catch(err => reject(err))
      // resolve(banner)
    })
  }
}

export default api
