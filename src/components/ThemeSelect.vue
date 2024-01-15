<template>
  <el-dropdown
    v-bind="$attrs"
    class="theme"
    trigger="click"
    @command="handleSetTheme"
  >
    <!-- 图标 -->
    <div>
      <el-tooltip :content="$t('theme.themeChange')">
        <svgIcon icon="change-theme"></svgIcon>
      </el-tooltip>
    </div>
    <!-- menu -->
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t('theme.themeColorChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 弹出层 -->
  <div>
    <selectColor v-model="dialogColorVisible"></selectColor>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import selectColor from './selectColor.vue'
// dialog
const dialogColorVisible = ref(false)
const handleSetTheme = (command) => {
  dialogColorVisible.value = true
}
</script>
<style scoped></style>
