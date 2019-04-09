import axios from 'axios'
// 全局配置
axios.defaults.baseURL = 'http://api.duyiedu.com'
// 拦截
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  config.params = {
    ...config.params,//没有其会覆盖
    appkey: 'dongmeiqi_i_1545272862243'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default axios
