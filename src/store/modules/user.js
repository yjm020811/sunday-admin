import { defineStore } from 'pinia'
import { login, getUserInfo } from '../../api/sys'
import { setItem, removeItem } from '../../utils/storage'
import router from '../../router/index'

export const useUserStore = defineStore('user', {
  state: () => ({
    userProfile: {},
    count: 0
  }),
  getters: {},
  actions: {
    increment() {
      this.count++
    },
    // 登录
    loginAction(data) {
      login(data)
        .then((res) => {
          console.log(res)
          this.userProfile = res
          setItem('token', res.token)
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 获取用户信息
    getUserInfo() {
      getUserInfo().then((res) => {
        console.log(res)
        this.userProfile = res
      })
    },
    // 退出登录
    logOut() {
      removeItem('token')
      this.userProfile = {}
      router.push('/login')
    }
  }
})
