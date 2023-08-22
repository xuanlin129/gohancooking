<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">會員管理</h1>
      </v-col>
      <v-col cols="12">
        <v-table style="border: 1px solid #d9d9cf;width: 80%; margin: auto;">
          <thead>
            <tr>
              <th>頭像</th>
              <th>帳號</th>
              <th>姓名</th>
              <th>E-mail</th>
              <th>電話</th>
              <th>地址</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>
                <v-img :src="user.avatar" cover width="50"></v-img>
              </td>
              <td>{{ user.account }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.address }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const users = ref([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    users.value.push(...data.result)
    return users
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
})()
</script>
