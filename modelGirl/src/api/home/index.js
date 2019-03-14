import axios from 'axios'
import app from '@/api';


const api = {
  requestCare (id) {
    return new Promise((resolve, reject) => {
      if(id){
        axios.get(app.user + '/care?id=' + id )
          .then(data =>  {
            resolve(data.data.data)
          })
          .catch(err => reject(err))
      } else {
        axios.get(app.user + '/care' )
        .then(data =>  {
          resolve(data.data.data)
        })
      }
    })
  },
  requestReference (id) {
    return new Promise((resolve, reject) => {
      if(id){
        axios.get(app.user + '/reference?id=' + id )
          .then(data =>  {
            resolve(data.data.data)
          })
          .catch(err => reject(err))
      } else {
        axios.get(app.user + '/reference' )
        .then(data =>  {
          resolve(data.data.data)
        })
      }
    })
  },
  requestMakeup (id) {
    return new Promise((resolve, reject) => {
      if(id){
        axios.get(app.user + '/makeup?id=' + id )
          .then(data =>  {
            resolve(data.data.data)
          })
          .catch(err => reject(err))
      } else {
        axios.get(app.user + '/makeup' )
        .then(data =>  {
          resolve(data.data.data)
        })
      }
    })
  },
  requestCareskin (id) {
    return new Promise((resolve, reject) => {
      if(id){
        axios.get(app.user + '/careskin?id=' + id )
          .then(data =>  {
            resolve(data.data.data)
          })
          .catch(err => reject(err))
      } else {
        axios.get(app.user + '/careskin' )
        .then(data =>  {
          resolve(data.data.data)
        })
      }
    })
  },
  requestVideo (id) {
    return new Promise((resolve, reject) => {
      if(id){
        axios.get(app.user + '/video?id=' + id )
          .then(data =>  {
            resolve(data.data.data)
          })
          .catch(err => reject(err))
      } else {
        axios.get(app.user + '/video' )
        .then(data =>  {
          resolve(data.data.data)
        })
      }
    })
  },
  requestAround (id) {
    return new Promise((resolve, reject) => {
      if(id){
        axios.get(app.user + '/around?id=' + id )
          .then(data =>  {
            resolve(data.data.data)
          })
          .catch(err => reject(err))
      } else {
        axios.get(app.user + '/around' )
        .then(data =>  {
          resolve(data.data.data)
        })
      }
    })
  },
  requestResults (title) {
    console.log(title)
    return new Promise((resolve, reject) => {
      axios.get(app.user + '/search?title=' + title)
        .then(data =>  {
          console.log(data)
          resolve(data.data.data)
        })
        .catch(err => reject(err))
      // resolve(banner)
    })
  },
  requestGoods (id) {
    return new Promise((resolve, reject) => {
      if(id){
        axios.get(app.user + '/goods?id=' + id )
          .then(data =>  {
            resolve(data.data.data)
          })
          .catch(err => reject(err))
      } 
    })
  }
}

export default api
