<template>
  <div class="tags-view-container">
    <router-link
      v-for="(tag, index) in commonStore.tagsViewList"
      :key="tag.fullPath"
      class="tags-view-item"
      :class="isActive(tag) ? 'active' : ''"
      :to="{ path: tag.fullPath }"
    >
      {{ tag.title }}
      <i
        v-show="!isActive(tag)"
        class="el-icon-close"
        @click.prevent.stop="onCloseClick(index)"
      ></i>
    </router-link>
  </div>
</template>
<script setup>
import { useCommonStore } from '@/store/modules/common'
import { useRoute } from 'vue-router'
const commonStore = useCommonStore()

// 是否被选中
const route = useRoute()
const isActive = (tag) => {
  return tag.path === route.path
}

// 关闭tag的点击事件
const onCloseClick = (index) => {
  console.log(index)
}
</script>
<style scoped></style>
