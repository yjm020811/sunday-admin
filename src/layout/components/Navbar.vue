<template>
  <div class="navbar">
    <el-icon size="28" class="menu-icon" @click="toggleSideBar"
      ><Menu
    /></el-icon>
    <div class="right-menu">
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
              <el-dropdown-item> 主页 </el-dropdown-item>
            </router-link>
            <a target="__blank" href="#">
              <el-dropdown-item> 课程主页 </el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logOut">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from '@/store/modules/user'
import { useCommonStore } from '@/store/modules/common'

// 退出登录
const userStore = useUserStore()
const logOut = () => {
  userStore.logOut()
}

// 切换sideBar
const commonStore = useCommonStore()
const toggleSideBar = () => {
  commonStore.changeSidebarOpen()
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .menu-icon {
    margin-left: 4px;
    cursor: pointer;
  }
}
.right-menu {
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
}
</style>
