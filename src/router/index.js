// Composables
import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router'
import { useUserStore } from '@/store/user'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Welcome',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/front/WelcomeView.vue'),
        meta: {
          title: '煮飯研究所'
        }
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/front/HomeView.vue'),
        meta: {
          title: '煮飯研究所 | 首頁',
          login: false,
          admin: false
        }
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import(/* webpackChunkName: "menu" */ '@/views/front/MenuView.vue'),
        meta: {
          title: '煮飯研究所 | 菜單',
          login: false,
          admin: false
        }
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "foodie" */ '@/views/front/FoodiesView.vue'),
        meta: {
          title: '煮飯研究所 | 美味專區',
          login: false,
          admin: false
        }
      },
      {
        path: 'course',
        name: 'Course',
        component: () => import(/* webpackChunkName: "course" */ '@/views/front/CourseView.vue'),
        meta: {
          title: '煮飯研究所 | 廚藝教室',
          login: false,
          admin: false
        }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/front/AboutView.vue'),
        meta: {
          title: '煮飯研究所 | 關於我們',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '@/views/front/LoginView.vue'),
        meta: {
          title: '煮飯研究所 | 會員登入',
          login: false,
          admin: false
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "home" */ '@/views/front/RegisterView.vue'),
        meta: {
          title: '煮飯研究所 | 會員註冊',
          login: false,
          admin: false
        }
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import(/* webpackChunkName: "home" */ '@/views/front/AccountView.vue'),
        meta: {
          title: '煮飯研究所 | 會員資訊',
          login: true,
          admin: false
        }
      },
      {
        path: 'products/:id',
        name: 'product',
        component: () => import(/* webpackChunkName: "home" */ '@/views/front/FoodieView.vue'),
        meta: {
          title: '煮飯研究所 | 商品',
          login: false,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "home" */ '@/views/front/CartView.vue'),
        meta: {
          title: '煮飯研究所 | 購物車',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import(/* webpackChunkName: "admin-home" */ '@/views/admin/HomeView.vue'),
        meta: {
          title: '煮飯研究所 | 管理系統',
          login: true,
          admin: true
        }
      },
      {
        path: 'accounts',
        name: 'AdminAccounts',
        component: () => import(/* webpackChunkName: "admin-accounts" */ '@/views/admin/AccountsView.vue'),
        meta: {
          title: '煮飯研究所 | 會員管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import(/* webpackChunkName: "admin-products" */ '@/views/admin/ProductsView.vue'),
        meta: {
          title: '煮飯研究所 | 商品管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import(/* webpackChunkName: "admin-accounts" */ '@/views/admin/OrdersView.vue'),
        meta: {
          title: '煮飯研究所 | 訂單管理',
          login: true,
          admin: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()
  if (from === START_LOCATION) {
    await user.getProfile()
  }

  if (user.isLogin && ['/register', '/login'].includes(to.path)) {
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

export default router
