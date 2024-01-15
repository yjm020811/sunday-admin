<template>
  <el-dropdown
    class="international"
    trigger="click"
    @command="handleSetLanguage"
  >
    <div>
      <el-tooltip content="国际化" :effect="effect">
        <svgIcon icon="language"></svgIcon>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh"
          >中文</el-dropdown-item
        >
        <el-dropdown-item :disabled="language === 'en'" command="en"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { useCommonStore } from '../../src/store/modules/common'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
const commonStore = useCommonStore()

const language = computed(() => {
  return commonStore.language
})
// 切换语言的方法
const { locale } = useI18n()
const i18n = useI18n()
const handleSetLanguage = (lang) => {
  locale.value = lang
  commonStore.changeLanguage(lang)
  ElMessage.success(i18n.t('toast.switchLangSuccess'))
}

// 接收props
defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator: (value) => {
      return ['dark', 'light'].includes(value)
    }
  }
})
</script>
<style scoped></style>
