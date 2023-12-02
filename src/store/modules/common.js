import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
  state: () => ({
    //  侧边栏是否是打开状态
    sidebarOpen: false
  }),
  getters: {},
  actions: {
    changeSidebarOpen() {
      this.sidebarOpen = !this.sidebarOpen
    }
  }
})
