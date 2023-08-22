import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import UserRole from '@/enums/UserRole'
import { apiAuth } from '@/plugins/axios'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const account = ref('')
  const email = ref('')
  const cart = ref(0)
  const role = ref(UserRole.USER)
  const name = ref('')
  const avatar = ref('')
  const address = ref('')
  const phone = ref('')

  const login = (data) => {
    token.value = data.token
    account.value = data.account
    email.value = data.email
    cart.value = data.cart
    role.value = data.role
    name.value = data.name
    avatar.value = data.avatar
    address.value = data.address
    phone.value = data.phone
  }

  const isLogin = computed(() => {
    return token.value.length > 0
  })

  const isAdmin = computed(() => {
    return role.value === UserRole.ADMIN
  })

  // const avatar = computed(() => {
  //   return `https://source.boringavatars.com/beam/120/${account.value}?colors=0db2ac,f5dd7e,fc8d4d,fc694d,faba32`
  // })

  const getProfile = async () => {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/me')
      account.value = data.result.account
      email.value = data.result.email
      cart.value = data.result.cart
      role.value = data.result.role
    } catch (error) {
      token.value = ''
    }
  }

  const logout = () => {
    token.value = ''
    account.value = ''
    email.value = ''
    cart.value = 0
    role.value = UserRole.USER
    name.value = ''
    avatar.value = ''
  }

  return {
    token,
    account,
    email,
    cart,
    role,
    login,
    logout,
    isLogin,
    isAdmin,
    getProfile,
    name,
    avatar,
    address,
    phone
  }
}, {
  persist: {
    key: 'gohancooking',
    path: ['token']
  }
})
