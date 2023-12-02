import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
  state: () => ({
    sidebarOpen: true
  }),
  getters: {},
  actions: {
    changeSidebarOpen() {
      this.sidebarOpen = !this.sidebarOpen
    }
  }
})
