<template>
  <div class="navbar">
    <div class="right-menu">
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="userStore.userProfile?.data?.avatar"
          ></el-avatar>
          <el-icon><Setting /></el-icon>
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
const userStore = useUserStore()

// 退出登录
const logOut = () => {
  userStore.logOut()
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.right-menu {
  display: flex;
  align-items: center;
  float: right;
  padding-right: 16px;

  :deep(.avatar-container) {
    cursor: pointer;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;
      .el-avatar {
        --el-avatar-background-color: none;
        margin-right: 12px;
      }
    }
  }
}
</style>
