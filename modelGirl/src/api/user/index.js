import axios from 'axios';
import app from '@/api';

const api = {
  requestData (obj) {
    return new Promise((resolve, reject) => {
      axios.post(app.user + '/login', obj)
        .then(data => {
          console.log(data.data.data)
          resolve(data.data.data)
        })
        .catch(err => reject(err))
    })   
  },
  requestRigister (obj) {
    return new Promise((resolve, reject) => {
      axios.post(app.user + '/register', obj)
        .then(data => {
          console.log(data.data.data)
          resolve(data.data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestMalogin (obj) {
    return new Promise((resolve, reject) => {
      axios.post(app.user + '/malogin', obj)
        .then(data => {
          console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestAlterPw (obj) {
    return new Promise((resolve, reject) => {
      axios.post(app.user + '/alter', obj)
        .then(data => {
          console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestSetZan (obj) {
    console.log(obj)
    return new Promise((resolve, reject) => {
      axios.post(app.user + '/setZan', obj)
        .then(data => {
          console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestGetZan (obj) {
    return new Promise((resolve, reject) => {
      axios.post(app.user + '/GetZan', obj)
        .then(data => {
          console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestSetCollect (obj) {
    return new Promise((resolve, reject) => {
      axios.post(app.user + '/setCang', obj)
        .then(data => {
          console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestGetCollect (obj) {
    return new Promise((resolve, reject) => {
      axios.post(app.user + '/getCang', obj)
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
export default api;