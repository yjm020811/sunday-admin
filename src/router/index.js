import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '../store/modules/user'

const routes = [
  {
    path: '/',
    component: () => import('../layout/index.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login/MyLogin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (window.localStorage.getItem('token')) {
    // 有token
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 没有token
    if (to.path === '/login') {
      next()
    } else {
      const userStore = useUserStore()
      console.log(userStore.userProfile)
      if (Object.keys(userStore.userProfile).length === 0) {
        next('/login')
      }
    }
  }
})

export default router
