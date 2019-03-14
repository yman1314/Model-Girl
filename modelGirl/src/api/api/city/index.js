import axios from 'axios'

const api = {
  requestData (id) {
    // console.log('1111')
    return new Promise((resolve, reject) => {
      axios.get('https://www.daxunxun.com/city')
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  }
}

export default api
