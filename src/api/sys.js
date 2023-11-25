import request from '../utils/request'

// 登录
export const login = (data) => {
  return request({
    url: '/api/login',
    method: 'POST',
    data
  })
}

// 获取用户信息
export const getUserInfo = () => {
  return request({
    url: '/my/userinfo',
    method: 'GET'
  })
}
