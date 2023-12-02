<template>
  <el-container>
        <Sidebar></Sidebar>
        <!-- 设置子元素的排列方向 -->
        <el-container direction="vertical">
            <Navbar></Navbar>
            <el-main>
              <AppMain></AppMain>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import AppMain from './components/AppMain'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

// 获取用户信息
import { useUserStore } from '@/store/modules/user'
// import { useCommonStore } from '@/store/modules/common'
const userStore = useUserStore()
userStore.getUserInfo()
// const commonStore = useCommonStore()
</script>
<style lang="scss" scoped>
@import '../styles/variables.module.scss';
@import '../styles/mixin.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  .sidebar-container {
    background-color: $menuBg;
    height: 100vh;
  }
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  // width: 100%;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

</style>
