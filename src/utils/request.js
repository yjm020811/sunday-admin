import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '../router/index'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 统一注入token
    if (window.localStorage.getItem('token')) {
      config.headers.Authorization = window.localStorage.getItem('token')
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  // 请求成功
  (response) => {
    const { code, msg } = response.data
    // 判断请求是否成功
    if (code === 200) {
      return response.data
    } else if (code === 401) {
      // 失败,消息提示
      ElMessage.error('身份认证失败')
      router.push('/login')
      return Promise.reject(new Error(msg))
    }
  },
  // 请求失败
  (error) => {
    ElMessage.error(error.message)
    return Promise.reject(new Error(error))
  }
)

export default service
