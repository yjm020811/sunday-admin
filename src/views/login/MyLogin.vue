<template>
  <div class="container">
    <el-form :model="loginForm" ref="loginFormRef" :rules="loginRules">
      <h2>用户登录界面</h2>
      <el-form-item label="用户名" label-width="80px" prop="username">
        <el-input
          type="text"
          placeholder="请输入用户名"
          v-model="loginForm.username"
          required
        >
          <template #prepend>
            <svgIcon icon="user"></svgIcon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="80px" prop="password">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="loginForm.password"
          required
          show-password
        >
          <template #prepend>
            <svgIcon icon="password"></svgIcon>
          </template>
        </el-input>
      </el-form-item>

      <el-button @click.prevent="submitForm" :loading="loading">登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { validatePassword } from './rules'
import { useUserStore } from '../../store/modules/user'
import { ElMessage } from 'element-plus'

// 数据源
const loginForm = ref({
  username: 'superadmin',
  password: '123456'
})

// 验证规则
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})

// 登录
const loading = ref(false)
const userStore = useUserStore()
const loginFormRef = ref(null)
const submitForm = () => {
  // 表单检验
  loginFormRef.value.validate(async (valid) => {
    if (!valid) return
    // 触发登录
    loading.value = true
    await userStore.loginAction(loginForm.value)
    ElMessage.success('登录成功!')
    loading.value = false
  })
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 让容器铺满整个视口高度 */
  background-color: #282c34;
}
.el-form {
  width: 600px;
  align-items: center;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  h2 {
    margin-bottom: 20px;
  }
}

.el-button {
  width: 200px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
</style>
