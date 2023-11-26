<template>
  <div>
    <el-scrollbar>
      <h2 class="title">后台管理系统</h2>
      <!-- 整个menu菜单 -->
      <el-menu
        :unique-opened="true"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <!-- 子集menu菜单 -->
        <el-sub-menu
          :index="item.path"
          v-for="item in routeJson"
          :key="item.path"
        >
          <template #title>
            <el-icon>
              <component :is="item.meta.icon" />
            </el-icon>

            {{ item.meta.title }}
          </template>
          <el-menu-item
            v-for="item1 in item.children"
            :key="item1.path"
            :index="item1.path"
          >
            <el-icon>
              <component :is="item1.meta.icon" />
            </el-icon>
            {{ item1.meta.title }}
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script setup>
// 使用本地routes模拟后端返回的路由
const routeJson = require('./routes.json')
console.log(routeJson)
</script>
<style scoped>
.title {
  text-align: center;
  color: #fff;
  line-height: 50px;
}
</style>
