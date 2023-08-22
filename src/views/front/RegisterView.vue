<template>
  <section id="register">
    <v-row>
      <v-col id="register-text" cols="12" sm="3" style="margin: 20px 0;" class="d-sm-flex justify-center align-center">
        <h1 class="text-center h1-title mb-1">會員註冊</h1>
      </v-col>
      <v-col cols="12" sm="9">
        <v-row id="form-box">
          <v-col cols="12" sm="10" md="8" lg="6" xl="4" class="offset-lg-1 offset-xl-2">
            <v-img id="register-logo" src="@/assets/logo_lineImg_dark.png" cover width="100px" class="mx-auto"></v-img>
            <v-form :disabled="isSubmitting" @submit.   prevent="submit">
              <div class="d-flex align-center">
                <v-text class="me-10">帳號：</v-text>
                <v-text-field
                variant="outlined"
                v-model="account.value.value"
                :error-messages="account.errorMessage.value"
                density="compact"
                label="請輸入帳號"
                maxlength="20"
                clearable></v-text-field>
              </div>
              <div class="d-flex align-center">
                <v-text class="me-10">信箱：</v-text>
                <v-text-field
                variant="outlined"
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
                density="compact"
                label="請輸入信箱"
                type="email"
                clearable></v-text-field>
              </div>
              <div class="d-flex align-center">
                <v-text class="me-10">密碼：</v-text>
                <v-text-field
                variant="outlined"
                v-model="password.value.value"
                :error-messages="password.errorMessage.value"
                density="compact"
                label="請輸入密碼" maxlength="20"
                type="password"
                  clearable></v-text-field>
              </div>
              <div class="d-flex align-center">
                <v-text class="me-2">確認密碼：</v-text>
                <v-text-field
                variant="outlined"
                v-model="passwordConfirm.value.value" :error-messages="passwordConfirm.errorMessage.value"
                density="compact"
                label="確認密碼"
                maxlength="20"
                type="password"
                  clearable ></v-text-field>
              </div>
              <div class="text-center mt-10 mb-5">
                <v-btn type="reset" class="me-2">清除</v-btn>
                <v-btn @click="submit" class="btn-primary">註冊</v-btn>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import validator from 'validator'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { api } from '@/plugins/axios.js'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const createSnackbar = useSnackbar()
const router = useRouter()

const schema = yup.object({
  account: yup
    .string()
    .required('帳號必填')
    .min(4, '帳號最少 4 個字')
    .max(20, '帳號最多 20 個字'),
  email: yup
    .string()
    .required('信箱必填')
    .test(
      'isEmail', '信箱格式錯誤', (value) => validator.isEmail(value)
    ),
  password: yup
    .string()
    .required('密碼必填')
    .min(4, '密碼最少 4 個字')
    .max(20, '密碼最多 20 個字'),
  passwordConfirm: yup
    .string()
    .required('密碼必填')
    .min(4, '密碼最少 4 個字')
    .max(20, '密碼最多 20 個字')
    .oneOf([yup.ref('password')], '密碼不一致')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/users', {
      account: values.account,
      email: values.email,
      password: values.password,
      name: values.account,
      avatar: `https://source.boringavatars.com/beam/120/${values.account}?colors=0db2ac,f5dd7e,fc8d4d,fc694d,faba32`
    })
    createSnackbar({
      text: '註冊成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 3000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/login')
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
