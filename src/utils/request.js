import axios from 'axios'
// import store from '@/store'
// import { getToken, setToken, removeToken, setRefreshToken } from '@/utils/auth'
// import { Base64 } from '@/utils/Base64'
// import router from '../router/index' // add by wg 20181107

// axios 配置
axios.defaults.timeout = 10000 // 5000 // request timeout //mod by wg 20190103 改成10秒，后端调用支付宝接口可能在5秒内无法返回结果
axios.defaults.baseURL = process.env.BASE_API
// 用来处理刷新token后重新请求的自定义变量
axios.defaults.isRetryRequest = false

// http request 拦截器
// var loadinginstace
axios.interceptors.request.use(
  config => {
    config.headers['X-Shard'] = 'loc=114.305215,30.592935'
    console.log(config)
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    console.log('response', response)
    // 关闭遮罩层，非常重要，不然页面都不能操作了！
    // loadinginstace.close();
    const res = response.data
    if (res && res.code !== 200) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('error')
    } else if (res) {
      return response
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('error')
    }
  },
  err => {
    console.log(err)
    if (err.response) {
    } else {
    }
    // loadinginstace.close();
    return Promise.reject(err.response.data)
  }
)

export default axios
