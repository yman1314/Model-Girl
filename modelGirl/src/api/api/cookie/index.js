const cookie = {
  setCookie (key, value, days) {
    var now = new Date()
    now.setDate(now.getDate() + days)
    document.cookie = key + '=' + value + '; expires=' + now
  },
  getCookie (key) {
    var str = document.cookie
    var arr = str.split('; ')
    for (var i in arr) {
      var kv = arr[i].split('=')
      if (kv[0] === key) {
        return kv[1]
      }
    }
    return null
  }
}

export default cookie
