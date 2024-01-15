<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>
<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { isTags } from '@/utils/tags'
import { useCommonStore } from '@/store/modules/common'

// 生成title
const getTitle = (route) => {
  let title = ''
  if (route.meta && route.meta.title) {
    title = route.meta.title
  }
  return title
}

const commonStore = useCommonStore()
const route = useRoute()
watch(
  route,
  (to, from) => {
    // 路由发生变化修改页面title
    const title = getTitle(to)
    console.log(title)
    console.log(to)
    // 不是所有的路由都需要保存，例如404和login页面就不需要
    if (!isTags(to.path)) return
    const { fullPath, meta, name, params, path, query } = to
    // console.log(fullPath, meta, name, params, path, query)
    commonStore.addTagsViewList(
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title
    )
  },
  {
    immediate: true
  }
)
</script>
<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 90px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 61px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
