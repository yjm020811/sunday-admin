<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="item.path">
      <!-- 不可点击项目 -->
      <span v-if="index === breadcrumb.length - 1">{{ item.meta.title }}</span>
      <!-- 可点击项 -->
      <span v-else @click="handleClick(item)" class="handleClick">{{
        item.meta.title
      }}</span>
    </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
// 创建面包屑点击项的hover颜色
const hoverColor = ref(userStore.cssVar.menuBg)
console.log(hoverColor.value)

// 生成面包屑数组数据
const breadcrumb = ref([])
const getBreadcrumb = () => {
  // 获取当前路由的路由表
  console.log(route.matched)
  breadcrumb.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
  console.log(breadcrumb.value)
}

// 监听route的变化
const route = useRoute()
watch(
  route,
  () => {
    getBreadcrumb()
  },
  {
    immediate: true
  }
)
// 面包屑的点击
const router = useRouter()
const handleClick = (item) => {
  router.push(item.path)
}
</script>
<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .handleClick {
    cursor: pointer;
    color: black;
    font-weight: 600;
    &:hover {
      color: v-bind(hoverColor);
    }
  }
}
</style>
