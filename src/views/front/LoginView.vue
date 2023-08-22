<template>
  <!-- <v-container>
    <v-row>
      <v-col cols="12">
        <h1>會員登入</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <v-text-field
          v-model="account.value.value"
          :error-messages="account.errorMessage.value"
          variant="outlined"
          label="請輸入帳號"
          maxlength="20"
          clearable></v-text-field>
          <v-text-field
          v-model="password.value.value"
          :error-messages="password.errorMessage.value"
          variant="outlined"
          label="請輸入密碼" maxlength="20"
          type="password"
          clearable></v-text-field>
          <div class="text-center">
            <v-btn type="submit" class="btn-primary">登入</v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container> -->
  <section id="login" class="mx-auto">
    <v-container>
      <v-row class="mx-auto">
        <v-col cols="12" style="margin: 20px 0;">
          <h1 class="text-center h1-title mb-1">會員登入</h1>
        </v-col>
        <v-col cols="12" class="mb-5">
          <v-form :disabled="isSubmitting" @submit.prevent="submit">
            <div class="d-flex align-center">
              <v-text>帳號：</v-text>
              <v-text-field
              v-model="account.value.value"
              :error-messages="account.errorMessage.value"
              density="compact"
              variant="outlined"
              label="請輸入帳號"
              maxlength="20"
              clearable></v-text-field>
            </div>
            <div class="d-flex align-center">
              <v-text>密碼：</v-text>
              <v-text-field
              v-model="password.value.value"
              :error-messages="password.errorMessage.value"
              density="compact"
              variant="outlined"
              label="請輸入密碼" maxlength="20"
              type="password"
              clearable></v-text-field>
            </div>
            <div class="text-center">
              <v-btn type="submit" class="btn-primary">登入</v-btn>
            </div>
          </v-form>
        </v-col>
        <v-col cols="12">
          <div class="d-flex flex-column text-center">
            <span class="mb-2">還沒加入我們嗎？</span>
            <v-text id="toRegister" @click="register">註冊帳號</v-text>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { api } from '@/plugins/axios.js'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user.js'

const createSnackbar = useSnackbar()
const router = useRouter()
const user = useUserStore()

const register = () => {
  router.push('/register')
}

const schema = yup.object({
  account: yup
    .string()
    .required('帳號必填')
    .min(4, '帳號最少 4 個字')
    .max(20, '帳號最多 20 個字'),
  password: yup
    .string()
    .required('密碼必填')
    .min(4, '密碼最少 4 個字')
    .max(20, '密碼最多 20 個字')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await api.post('/users/login', {
      account: values.account,
      password: values.password
    })
    user.login({
      token: data.result.token,
      account: data.result.account,
      email: data.result.email,
      cart: data.result.cart,
      role: data.result.role,
      name: data.result.name,
      avatar: data.result.avatar,
      address: data.result.address,
      phone: data.result.phone
    })
    createSnackbar({
      text: '登入成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 3000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/home')
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
})
</script>
