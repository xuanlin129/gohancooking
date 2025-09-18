<template>
  <v-app-bar v-if="route.path !== '/'" id="appBar" color="#514742">
    <v-container class="d-flex align-center">
        <v-app-bar-title>
            <v-img src="../assets/logo_navbar.png" width="150"  @click="welcome" style="cursor: pointer;"></v-img>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <template v-if="!isMobile">
          <template v-for="navItem in navItems" :key="navItem">
            <v-btn variant="text" :to="navItem.path">{{ navItem.name }}</v-btn>
          </template>
        </template>
        <div class="text-center">
          <v-menu transition="fade-transition">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-account" v-bind="props" title="會員"></v-btn>
            </template>
            <v-list>
              <template v-for="(account) in accounts" :key="account">
                <v-list-item v-if="account.show">
                  <v-list-item-title>
                    <v-btn v-if="account.name !== '登出'" variant="text" :prepend-icon="account.icon" :to="account.path" :active="false" style="color: #514742">{{ account.name }}</v-btn>
                    <v-btn v-else variant="text" :prepend-icon="account.icon" :active="false" style="color: #514742" @click="logout" :to="account.path">{{ account.name }}</v-btn>
                  </v-list-item-title>
                </v-list-item>
              </template>
            </v-list>
          </v-menu>
        </div>
        <v-btn icon title="購物車" to="/cart">
          <v-badge :content="cart.toString()" color="orange" :model-value="cart > 0" >
            <v-icon color="white">mdi-shopping</v-icon>
          </v-badge>
        </v-btn>
        <v-app-bar-nav-icon v-if="isMobile" @click="drawerClick"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer
      v-if="isMobile"
      v-model="drawer"
      location="top"
      temporary
    >
      <v-list>
        <v-list-item
          v-for="navItem in navItems"
          :key="navItem.path"
          :value="navItem"
          rounded="xl"
          :to="navItem.path"
          :active="false"
          :title="navItem.name"
        >
          <template v-slot:prepend>
            <v-icon :icon="navItem.icon"></v-icon>
          </template>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>
  <v-main>
    <router-view :key="$route.path"></router-view>
  </v-main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const createSnackbar = useSnackbar()
const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)

const { mobile } = useDisplay()

const isMobile = computed(() => mobile.value)

const drawer = ref(false)

const welcome = () => {
  router.push('/')
}

const drawerClick = () => {
  if (drawer.value === false) {
    drawer.value = true
  } else {
    drawer.value = false
  }
}

const navItems = [
  { name: '首頁', path: '/home', icon: 'mdi-home' },
  { name: '菜單', path: '/menu', icon: 'mdi-clipboard-text' },
  { name: '美味專區', path: '/products', icon: 'mdi-shopping-outline' },
  { name: '廚藝教室', path: '/course', icon: 'mdi-chef-hat' },
  { name: '關於我們', path: '/about', icon: 'mdi-information' }
]

const accounts = computed(() => {
  return [
    { name: '登入', path: '/login', icon: 'mdi-login', show: !isLogin.value },
    { name: '註冊', path: '/register', icon: 'mdi-account-plus', show: !isLogin.value },
    { name: '管理', path: '/admin', icon: 'mdi-account-tie', show: isLogin.value && isAdmin.value },
    { name: '會員資訊', path: '/account', icon: 'mdi-list-box', show: isLogin.value },
    { name: '登出', path: '/home', icon: 'mdi-logout', show: isLogin.value }
  ]
})

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 3000,
        color: 'green',
        location: 'bottom'
      }
    })
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 3000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
}
</script>
