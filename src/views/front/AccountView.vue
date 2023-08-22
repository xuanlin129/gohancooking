<template>
  <v-container id="account">
    <v-row>
      <v-col cols="12" style="margin: 20px 0;">
        <h1 class="text-center h1-title mb-1">會員資訊</h1>
        <div class="h1-border"></div>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-tabs
            v-model="tab"
            color="#514742"
            bg-color="#D9D9CF"
            fixed-tabs
          >
            <v-tab value="one">個人資訊</v-tab>
            <v-tab value="two">訂單查詢</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <v-row class="align-center">
                  <v-col cols="12" sm="6">
                    <div id="avatar" class="d-flex align-center flex-column my-2 my-sm-0">
                      <v-img :src="user.avatar" width="120" style="border: 1px solid rgba(0, 0, 0, 0.8);border-radius: 50%;"></v-img>
                      <v-btn v-if="edit" class="btn-primary" density="compact" variant="text" icon="mdi-pencil" @click="dialog=true"></v-btn>
                      <h3 class="my-4">會員名稱</h3>
                      <p id="userName" v-if="!edit">{{ user.name }}</p>
                      <v-text-field v-if="edit" v-model="user.name" density="compact" variant="outlined"  style="min-width: 160px;"></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-row id="accountInfo" class="flex-column align-center">
                      <v-col>
                        <div class="d-flex align-center">
                          <span class="me-10">帳號：</span>
                          <span>{{ user.account }}</span>
                        </div>
                      </v-col>
                      <v-col>
                        <div class="d-flex align-center">
                          <span class="me-7">E-mail：</span>
                          <span v-if="!edit">{{ user.email }}</span>
                          <v-text-field v-if="edit" v-model="user.email" density="compact" variant="outlined" ></v-text-field>
                        </div>
                      </v-col>
                      <v-col>
                        <div class="d-flex align-center">
                          <span class="me-10">地址：</span>
                          <span v-if="!edit">{{ user.address }}</span>
                          <v-text-field v-if="edit" v-model="user.address" density="compact" variant="outlined"></v-text-field>
                        </div>
                      </v-col>
                      <v-col>
                        <div class="d-flex align-center">
                          <span class="me-10">電話：</span>
                          <span v-if="!edit">{{ user.phone }}</span>
                          <v-text-field v-if="edit" v-model="user.phone" density="compact" variant="outlined"></v-text-field>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" class="text-center mt-4">
                    <v-btn v-if="!edit" variant="text" class="btn-primary" @click="editBtn">編輯</v-btn>
                    <v-btn v-if="edit" variant="text" class="btn-primary me-2" @click="editUser">變更</v-btn>
                    <v-btn v-if="edit" variant="text" color="red" @click="cancelBtn">取消</v-btn>
                  </v-col>
                </v-row>
              </v-window-item>

              <v-window-item value="two">
                <v-table class="tableLayout">
                  <thead>
                    <tr>
                      <th>編號</th>
                      <th>日期</th>
                      <th>金額</th>
                      <th>商品</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(order) in orders" :key="order.id">
                      <td>{{ new Date(order.date).getFullYear().toString() +  month(order) + date(order) + numSplice(order._id) }}</td>
                      <td>{{ new Date(order.date).toLocaleString() }}</td>
                      <td>{{ order.total }}</td>
                      <td>
                        <v-table class="tableLayout">
                          <tr v-for="item in order.cart" :key="item._id">
                            <td style="width: 60%;">{{ item.product.name }}：</td>
                            <td>{{ item.quantity }} 個</td>
                          </tr>
                        </v-table>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog persistent v-model="dialog" width="500px">
    <v-card>
      <vue-file-agent
      v-model="files" v-model:raw-model-value="rawFiles" :max-files="1" max-size="1MB" accept="image/jpg,image/jpeg,image/png" :multiple="false" :error-text="{type: '檔案格式錯誤', size: '檔案太大'}" help-text="選擇檔案或拖放" deletable="true" ref="fileAgent"></vue-file-agent>
        <v-card-actions>
          <v-btn class="btn-primary" block @click="dialog = false">關閉視窗</v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
  <section id="footer">
    <FooterView></FooterView>
  </section>
</template>

<script setup>
import FooterView from '@/components/FooterView.vue'
import { apiAuth } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'

const item = ['one', 'two']
const tab = ref(item[0])
const createSnackbar = useSnackbar()

const orders = ref([])
const user = ref([])
const edit = ref(false)
const dialog = ref(false)

const editBtn = () => {
  edit.value = !edit.value
}

const month = (order) => {
  if (new Date(order.date).getMonth() < 9) {
    return `0${(new Date(order.date).getMonth() + 1).toString()}`
  } else {
    return `${(new Date(order.date).getMonth() + 1).toString()}`
  }
}

const date = (order) => {
  if (new Date(order.date).getDate() < 9) {
    return `0${(new Date(order.date).getDate()).toString()}`
  } else {
    return `${(new Date(order.date).getDate()).toString()}`
  }
}

const numSplice = (value) => {
  return value.split('').splice(11).join('')
}
// const img = { path: new URL(user.value.avatar, import.meta.url).href };

const files = ref([])
const rawFiles = ref([])
const fileAgent = ref(null)

const editUser = async (values) => {
  if (files.value.length === 0) return
  try {
    const fd = new FormData()
    values.email = user.value.email
    values.address = user.value.address
    values.phone = user.value.phone
    values.name = user.value.name
    fd.append('email', values.email)
    fd.append('address', values.address)
    fd.append('phone', values.phone)
    fd.append('name', values.name)

    if (files.value.length > 0) fd.append('image', files.value[0].file)

    await apiAuth.patch('/users/me', fd)
    user.value.email = values.email
    user.value.address = values.address
    user.value.phone = values.phone
    user.value.name = values.name
    edit.value = false

    createSnackbar({
      text: '變更成功',
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

const cancelBtn = async () => {
  const { data } = await apiAuth.get('/users/me')
  user.value = data.result
  edit.value = false
}

(async () => {
  try {
    const { data } = await apiAuth.get('/users/me')
    user.value = data.result
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
})();

(async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.value.push(...data.result.map(order => {
      order.total = order.cart.reduce((total, current) => total + (current.product.price * current.quantity), 0)
      return order
    }))
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
