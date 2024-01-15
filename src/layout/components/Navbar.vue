<template>
  <div class="navbar">
    <div class="left-menu">
      <span class="foldIcon" @click="changeSidebarOpen">
        <el-icon size="28" v-if="commonStore.sidebarOpen"><Expand /></el-icon>
        <el-icon size="28" v-else><Fold /></el-icon>
      </span>
      <Breadcrumb />
    </div>
    <div class="right-menu">
      <ScreenFull
        style="
          font-size: 24px;
          position: relative;
          top: 10px;
          right: 20px;
          cursor: pointer;
        "
      />
      <ThemeSelect
        style="
          font-size: 24px;
          position: relative;
          top: 10px;
          right: 20px;
          cursor: pointer;
          margin-left: 15px;
        "
      />
      <headerSearch
        style="
          font-size: 24px;
          position: relative;
          top: 4px;
          right: 20px;
          cursor: pointer;
          margin-left: 15px;
        "
      />
      <LangSelect class="select" />

      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="userStore.userProfile?.data?.avatar"
          ></el-avatar>
          <el-icon class="icon"><Setting /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/" style="display: flex; justify-content: center">
              <el-dropdown-item> {{ $t('navBar.home') }} </el-dropdown-item>
            </router-link>
            <a target="__blank" href="#">
              <el-dropdown-item> {{ $t('navBar.course') }} </el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logOut">
              {{ $t('navBar.logout') }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from '@/store/modules/user'
import Breadcrumb from '@/components/Breadcrumb.vue'
import LangSelect from '@/components/LangSelect.vue'
import ThemeSelect from '@/components/ThemeSelect.vue'
import ScreenFull from '@/components/ScreenFull.vue'
import headerSearch from '@/components/headerSearch.vue'
import { useCommonStore } from '@/store/modules/common'

// 退出登录
const userStore = useUserStore()
const logOut = () => {
  userStore.logOut()
}
// sideBar收缩
const commonStore = useCommonStore()
const changeSidebarOpen = () => {
  commonStore.sidebarOpen = !commonStore.sidebarOpen
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  align-items: center;
  display: flex;
  justify-content: space-between;
  .menu-icon {
    margin-left: 4px;
    cursor: pointer;
  }
}
.right-menu {
  display: flex;
  :deep(.avatar-container) {
    cursor: pointer;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;
      .icon {
        margin-right: 4px;
      }
      .el-avatar {
        --el-avatar-background-color: none;
        margin-right: 4px;
      }
    }
  }
  .select {
    display: inline-block;
    font-size: 24px;
    color: #5a5e66;
    position: relative;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  .theme {
    display: inline-block;
    font-size: 24px;
    color: #5a5e66;
    position: relative;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
}
.left-menu {
  .foldIcon {
    position: relative;
    bottom: 10px;
    cursor: pointer;
    margin-left: 4px;
  }
}
</style>
