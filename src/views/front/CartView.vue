<template>
  <v-container>
    <v-row>
      <v-col cols="12" style="margin: 20px 0;">
        <h1 class="text-center h1-title mb-1">購物車</h1>
        <div class="h1-border"></div>
      </v-col>
      <v-col cols="12">
        <v-stepper alt-labels :items="items" v-model="step" hide-actions
        style="touch-action: pan-y; /* 只允許垂直滾動，禁止水平手勢 */
        -ms-touch-action: pan-y;
          overscroll-behavior: contain;">
          <template #[`item.1`]>
            <v-card flat title="訂單明細" class="text-center">
              <!-- <v-table class="tableLayout">
                <thead>
                  <tr>
                    <th class="text-center">圖片</th>
                    <th class="text-center">名稱</th>
                    <th class="text-center">價格</th>
                    <th class="text-center">數量</th>
                    <th class="text-center">小計</th>
                    <th class="text-center">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cart" :key="item._id" :class="{ 'bg-opgray': !item.product.sell}">
                    <td>
                      <v-img class="mx-auto" :src="item.product.image" cover :width="200" aspect-ratio="1"></v-img>
                    </td>
                    <td>{{ item.product.name }}</td>
                    <td>{{ item.product.price }}</td>
                    <td>
                      <div class="d-flex align-center justify-center">
                        <v-btn variant="text" icon="mdi-minus" @click="updateCart(item.product._id, -1)"></v-btn>
                        {{ item.quantity }}
                        <v-btn variant="text" icon="mdi-plus" @click="updateCart(item.product._id, 1)"></v-btn>
                      </div>
                    </td>
                    <td>{{ item.quantity * item.product.price }}</td>
                    <td>
                      <v-btn color="red" variant="text" icon="mdi-delete" @click="updateCart(item.product._id, item.quantity * -1)"></v-btn>
                    </td>
                  </tr>
                  <tr v-if="cart.length === 0">
                    <td colspan="6" class="text-center">沒有商品</td>
                  </tr>
                </tbody>
              </v-table> -->
              <v-row v-for="item in cart" :key="item._id" :class="{ 'bg-opgray': !item.product.sell}" class="mx-auto my-2" style="width: 99%;padding: 15px 0;box-shadow: 0 0 3px #ccc;">
                <v-col cols="4" sm="2">
                  <v-img class="mx-auto" :src="item.product.image" cover :width="100" aspect-ratio="1"></v-img>
                </v-col>
                <v-col cols="8" sm="10" class="d-flex flex-column" style="position: relative;">
                  <h4 class="text-left">{{ item.product.name }}</h4>
                  <div class="d-flex align-center mt-auto ms-auto">
                    <div class="d-flex align-center" style="border: 1px solid #333; padding: 5px; border-radius: 0.5rem;">
                      <v-btn variant="text" icon="mdi-minus" @click="updateCart(item.product._id, -1)" :disabled="item.quantity === 1" style="width: 24px; height: 24px;"></v-btn>
                      <span class="mx-3">{{ item.quantity }}</span>
                      <v-btn variant="text" icon="mdi-plus" @click="updateCart(item.product._id, 1)" style="width: 24px; height: 24px;"></v-btn>
                    </div>
                    <span class="mx-2">x</span>
                    <span> NT$ {{ item.product.price }}</span>
                  </div>
                  <v-btn style="position: absolute;right: 0;top: 0;" color="#ccc" variant="text" icon="mdi-delete" @click="updateCart(item.product._id, item.quantity * -1)"></v-btn>
                </v-col>
              </v-row>
              <v-row v-if="cart.length === 0" style="height: 150px;">
                <v-col cols="12" class="text-center d-flex justify-center align-center">
                  <span style="font-size: 18px;">沒有商品</span>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <p class="my-2" style="font-size: 18px; font-weight: bolder;">總金額： {{ total }} 元</p>
              <!-- <v-btn class="btn-primary" @click="submit" :disabled="!canCheckout">送出訂單</v-btn> -->
            </v-card>
          </template>
          <template #[`item.2`]>
            <v-card flat title="填寫資料" class="text-center">
              <v-row class="mt-5">
                <v-col cols="12" md="6">
                  <h4 style="text-align: left;" class="mb-3">收件人資訊</h4>
                  <v-text-field v-model="purchaser" variant="outlined" label="收件人"></v-text-field>
                  <v-text-field v-model="phone" variant="outlined" label="聯絡電話"></v-text-field>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="12" md="6">
                  <h4 style="text-align: left;" class="mb-3">取貨方式</h4>
                  <v-radio-group v-model="get">
                    <template v-for="option in radioOption" :key="option">
                      <v-radio :label="option.title" :value="option.value"></v-radio>
                    </template>
                    <v-text-field label="地址" variant="outlined" :disabled="get === 'one'" v-model="delivery"></v-text-field>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-card>
          </template>
          <template #[`item.3`]>
            <div class="d-flex flex-column align-center" style="padding: 120px 0;">
              <v-icon icon="mdi-check-circle-outline" style="font-size: 150px;" color="#514742"></v-icon>
              <h1>感謝您的購買</h1>
              <h6>已收到您的訂單，請您檢視訂單，確認訂單狀態</h6>
              <div class="mt-5 d-flex justify-space-between" style="width: 200px;">
                <v-btn to="/" variant="text" class="btn-primary">返回首頁</v-btn>
                <v-btn to="/account" variant="text" class="btn-primary-outline">查詢訂單</v-btn>
              </div>
            </div>
          </template>
          <v-stepper-actions class="d-flex" style="padding: 0 24px 16px;">
            <v-btn v-if="step === 2" class="me-auto" @click="prev">上一步</v-btn>
            <v-btn v-if="step === 1" class="ms-auto btn-primary" @click="next" :disabled="cart.length === 0">下一步</v-btn>
            <v-btn v-else-if="step !== 3" class="ms-auto btn-primary" @click="submit" :disabled="!canCheckout || cartInfo">送出訂單</v-btn>
          </v-stepper-actions>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'

const createSnackbar = useSnackbar()
const user = useUserStore()

const step = ref(1)
const get = ref('')
const purchaser = ref('')
const phone = ref('')
const delivery = ref('')

const radioOption = ref([
  { title: '店內自取', value: 'one' },
  { title: '寄送', value: 'two' }
])

const items = ['購物車', '填寫資料', '完成訂購']

const prev = () => {
  step.value -= 1
}
const next = () => {
  step.value += 1
}

const cart = ref([])

const total = computed(() => {
  return cart.value.reduce((total, current) => total + (current.quantity * current.product.price), 0)
})

const canCheckout = computed(() => {
  return cart.value.length > 0 && !cart.value.some(item => !item.product.sell)
})

const cartInfo = computed(() => {
  return purchaser.value === '' || phone.value === '' || get.value === '' || (get.value === 'two' && delivery.value === '')
})

const submit = async (req, res) => {
  try {
    const reqData = {
      purchaser: purchaser.value,
      phone: phone.value,
      delivery: get.value === 'two' ? '寄送 - ' + delivery.value : '店內取貨'
    }

    await apiAuth.post('/orders', reqData)
    user.cart = 0
    step.value += 1
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
};

(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.value.push(...data.result)
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

const updateCart = async (product, quantity) => {
  try {
    const { data } = await apiAuth.post('/users/cart', {
      product,
      quantity
    })
    user.cart = data.result
    const idx = cart.value.findIndex(item => item.product._id === product)
    cart.value[idx].quantity += quantity
    if (cart.value[idx].quantity <= 0) {
      cart.value.splice(idx, 1)
    }
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
