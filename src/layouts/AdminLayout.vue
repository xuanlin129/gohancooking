<template>
  <v-app-bar style="background: #43808F;">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="1">
          <v-img src="../assets/logo_color.png" :width="50"></v-img>
        </v-col>
        <v-col cols="2">
            <v-img src="../assets/logo_word_light.png" :width="120"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer permanent style="background: #D9D9CF; box-shadow:0 0 5px #514742;">
    <v-list>
      <v-list-item :prepend-avatar="avatar" :title="name"></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="navItem in navItems" :title="navItem.title" :to="navItem.path" :key="navItem.path" :prepend-icon="navItem.icon" style="color: #514742;">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { useUserStore } from '@/store/user'

const user = useUserStore()

const { avatar, name } = user

const navItems = [
  { path: '/admin/accounts', title: '會員管理', icon: 'mdi-account-group' },
  { path: '/admin/products', title: '商品管理', icon: 'mdi-shopping-search' },
  { path: '/admin/orders', title: '訂單管理', icon: 'mdi-list-box-outline' },
  { path: '/home', title: '回首頁', icon: 'mdi-home' }
]
</script>
