import { createI18n } from 'vue-i18n'
import { useCommonStore } from '@/store/modules/common'
import pinia from '@/store/extraUse'

// 导入自定义语言包
import zhLocale from './lang/zh'
import enLocale from './lang/en'

const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  }
}

// 获取缓存的语言
const commonStore = useCommonStore(pinia)
function getLanguage() {
  return commonStore && commonStore.language && commonStore.language
}

const i18n = createI18n({
  // 使用composition API
  legacy: false,
  // 全局使用t函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n
