<template>
  <div @click="handleFullScreen">
    <svgIcon :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"></svgIcon>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import screenfull from 'screenfull'
// 是否全屏
const isFullscreen = ref(false)
const handleFullScreen = () => {
  screenfull.toggle()
  isFullscreen.value = !screenfull.isFullscreen
}
</script>
<style scoped></style>
