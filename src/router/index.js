import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '../store/modules/user'
import layout from '../layout/index.vue'

// 私有路由表
const privateRoutes = [
  {
    path: '/user',
    component: layout,
    redirect: '/user/manage',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        component: () => import('../views/user-manage/index.vue'),
        meta: {
          title: {
            title: 'userManage',
            icon: 'personnel-manage'
          }
        }
      },
      {
        path: '/user/role',
        name: 'userRole',
        component: () => import('../views/role-list/index.vue'),
        meta: {
          title: {
            title: 'roleList',
            icon: 'role'
          }
        }
      },
      {
        path: '/user/permission',
        name: 'userPermission',
        component: () => import('../views/permission-list/index.vue'),
        meta: {
          title: {
            title: 'permissionList',
            icon: 'permission'
          }
        }
      },
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('../views/user-info/index.vue'),
        meta: {
          title: {
            title: 'userInfo'
          }
        }
      },
      {
        path: '/user/import',
        name: 'import',
        component: () => import('../views/import/index.vue'),
        meta: {
          title: {
            title: 'excelImport'
          }
        }
      }
    ]
  },
  {
    path: '/article',
    component: layout,
    redirect: '/article/ranking',
    meta: {
      title: 'article',
      icon: 'article'
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        component: () => import('@/views/article-ranking/index'),
        meta: {
          title: 'articleRanking',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/:id',
        name: 'articleDetail',
        component: () => import('@/views/article-detail/index'),
        meta: {
          title: 'articleDetail'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        component: () => import('@/views/article-create/index'),
        meta: {
          title: 'articleCreate',
          icon: 'article-create'
        }
      },
      {
        path: '/article/editor/:id',
        name: 'articleEditor',
        component: () => import('@/views/article-create/index'),
        meta: {
          title: 'articleEditor'
        }
      }
    ]
  }
]

// 公有路由表
const publicRoutes = [
  {
    path: '/login',
    component: () => import('../views/login/MyLogin.vue')
  },
  {
    path: '/',
    redirect: '/profile',
    component: layout,
    children: [
      // 个人中心
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile/index.vue'),
        meta: {
          title: {
            title: 'profile',
            icon: 'el-icon-user'
          }
        }
      },
      // 404
      {
        path: '/404',
        name: '404',
        component: () => import('../views/error-page/404.vue')
      },
      // 401
      {
        path: '/401',
        name: '401',
        component: () => import('../views/error-page/401.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
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
