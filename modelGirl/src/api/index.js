let baseUrl = '/daxun'
process.env.NODE_ENV === 'development' ? baseUrl = '/daxun' : baseUrl = 'http://39.98.32.245:3000'

let user = '/user'
process.env.NODE_ENV === 'development' ? user = '/user' : user = 'http://www.yman.pro/user'


export default {baseUrl, user}