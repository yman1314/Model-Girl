import axios from 'axios'
import app from '@/api';

const api = {
  requestCart (obj) {
    console.log(obj)
    return new Promise((resolve, reject) => {
      axios.post(app.user + '/cart', obj)
        .then(data =>  {
          // console.log(data)
          resolve(data)
        })
        .catch(err => reject(err))
      // resolve(banner)
    })
  },
  requestGetCart (obj) {
    console.log(obj)
    return new Promise((resolve, reject) => {
      axios.post(app.user + '/getCart', obj)
        .then(data =>  {
          console.log(data)
          resolve(data.data.data)
        })
        .catch(err => reject(err))
      // resolve(banner)
    })
  },
  requestClearCart (obj) {
    return new Promise((resolve, reject) => {
      axios.post(app.user + '/clearCart', obj)
        .then(data => {
          console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default api
