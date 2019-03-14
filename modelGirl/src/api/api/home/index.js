import axios from 'axios'
import list from '@/assets/movieList.js'
import list1 from '@/assets/movieList1.js'
import banner from '@/assets/banner.js'
import tv from '@/assets/tv.js'
import mv from '@/assets/movie.js'
import cd from '@/assets/comedy.js'
import ji from '@/assets/jilu.js'

const api = {
  requestBanner () {
    return new Promise((resolve, reject) => {
      // axios.get('https://www.daxunxun.com/banner')
      //   .then(data => {
      //     let arr = []
      //     for (var i of data.data) {
      //       arr.push('https://www.daxunxun.com' + i)
      //     }
      //     resolve(arr)
      //   })
      //   .catch(err => reject(err))
      resolve(banner)
    })
  },
  requestMovieList (res) {
    return new Promise((resolve, reject) => {
      axios.get('https://www.daxunxun.com/douban?start=' + res * 20 + '&count=20')
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  },
  requestMovieListAll (res) {
    if (res) {
      return new Promise((resolve, reject) => {
        axios.get('https://www.daxunxun.com/douban?start=0&count=250')
          .then(data => {
            console.log(data.data)
            for (var itm of data.data) {
              if (itm.id === res) {
                resolve(itm)
              }
            }
          })
          .catch(err => reject(err))
      })
    } else {
      return new Promise((resolve, reject) => {
        axios.get('https://www.daxunxun.com/douban?start=0&count=250')
          .then(data => resolve(data.data))
          .catch(err => reject(err))
      })
    }
  },
  requestList (res) {
    if (res) {
      return new Promise((resolve, reject) => {
        for (var itm of list.movieList) {
          if (itm.id === +res) {
            resolve(itm)
          }
        }
      })
    } else {
      return new Promise((resolve, reject) => {
        resolve(list)
      })
    }
  },
  requestList1 (res) {
    if (res) {
      return new Promise((resolve, reject) => {
        for (var itm of list1.coming) {
          if (itm.id === +res) {
            resolve(itm)
          }
        }
      })
    } else {
      return new Promise((resolve, reject) => {
        resolve(list1)
      })
    }
  },
  // requestTv () {
  //   return new Promise((resolve, reject) => {
  //     resolve(tv)
  //   })
  // },
  requestJi (res) {
    if (res) {
      return new Promise((resolve, reject) => {
        for (var itm of ji.subjects) {
          if (itm.id === res) {
            resolve(itm)
          }
        }
      })
    } else {
      return new Promise((resolve, reject) => {
        resolve(ji.subjects)
      })
    }
  },
  requestTv (res) {
    if (res) {
      return new Promise((resolve, reject) => {
        for (var itm of tv.subjects) {
          if (itm.id === res) {
            resolve(itm)
          }
        }
      })
    } else {
      return new Promise((resolve, reject) => {
        resolve(tv.subjects)
      })
    }
  },
  requestMv (res) {
    if (res) {
      return new Promise((resolve, reject) => {
        for (var itm of mv.subjects) {
          if (itm.id === res) {
            resolve(itm)
          }
        }
      })
    } else {
      return new Promise((resolve, reject) => {
        resolve(mv.subjects)
      })
    }
  },
  requestCd (res) {
    if (res) {
      return new Promise((resolve, reject) => {
        for (var itm of cd.subjects) {
          if (itm.id === res) {
            resolve(itm)
          }
        }
      })
    } else {
      return new Promise((resolve, reject) => {
        resolve(cd.subjects)
      })
    }
  }
  // requestMv () {
  //   return new Promise((resolve, reject) => {
  //     resolve(mv)
  //   })
  // },
  // requestJi () {
  //   return new Promise((resolve, reject) => {
  //     resolve(ji)
  //   })
  // },
  // requestCd () {
  //   return new Promise((resolve, reject) => {
  //     resolve(cd)
  //   })
  // }
}

export default api
