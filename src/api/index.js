
import axios from '@/axios.js'

var api = {
  // 首页搜索热词
  searchHotWords (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  // 首页搜索列表
  getSearchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  // 首页左侧菜单
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  // 首页下方
  resultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  // 产品展示列表
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  // 热点城市
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  // 最近访问
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  // 省份
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  // 城市列表
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  login (params) {
    return axios.get('/api/meituan/login', params)
  },
  register (params) {
    return axios.get('/api/meituan/register', params)
  }
}

export default api
