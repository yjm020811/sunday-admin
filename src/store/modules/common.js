import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
  state: () => ({
    //  侧边栏是否是打开状态
    sidebarOpen: false,
    // 全局语言状态
    language: window.localStorage.getItem('language') || 'zh',
    // 全局主题色
    theme: window.localStorage.getItem('color') || '#409eff',
    // tags
    tagsViewList: window.localStorage.getItem('tagsView') || []
  }),
  getters: {},
  actions: {
    changeSidebarOpen() {
      this.sidebarOpen = !this.sidebarOpen
    },
    // 切换语言
    changeLanguage(lang) {
      this.language = lang
      window.localStorage.setItem('language', lang)
    },
    // 切换主题
    changeTheme(color) {
      this.theme = color
      window.localStorage.setItem('color', color)
    },
    // 添加tags
    addTagsViewList(tags) {
      // 处理重复
      // this.tagsViewList = this.tagsViewList.filter(
      //   (item) => item.path !== tags.path
      // )
      console.log(this.tagsViewList)
      // this.tagsViewList.push(tags)
      // window.localStorage.setItem('tagsView', JSON.stringify(this.tagsViewList))
      // console.log(tags)
    }
  }
})
