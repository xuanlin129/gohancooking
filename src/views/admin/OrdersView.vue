<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">訂單管理</h1>
      </v-col>
      <v-col cols="12">
        <v-table style="border: 1px solid #d9d9cf;width: 80%; margin: auto;">
          <thead>
            <tr>
              <th>編號</th>
              <th>日期</th>
              <th>使用者</th>
              <th>明細</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order) in orders" :key="order.id">
              <td>{{ year(order.date) +  month(order) + date(order) + numSplice(order._id) }}</td>
              <td>{{ new Date(order.date).toLocaleString() }}</td>
              <td>{{ order.user.name }}</td>
              <td>
                <v-dialog
                  transition="dialog-bottom-transition"
                  width="500px"
                >
                  <template v-slot:activator="{ props }">
                    <v-btn
                    color="#43808F"
                    v-bind="props"
                    style="color: #fff"
                    >查詢明細</v-btn>
                  </template>
                  <template v-slot:default="{ isActive }">
                    <v-card>
                      <v-toolbar
                      color="#43808F"
                      style="color: #fff"
                      :title="'訂單編號：'+ year(order.date) +  month(order) + date(order) + numSplice(order._id)"
                      ></v-toolbar>
                      <v-card-text id="orderDialog">
                        <h4>收件資訊</h4>
                        <p>購買人：{{ order.purchaser }}</p>
                        <p>聯絡電話：{{ order.phone }}</p>
                        <p>取貨方式：{{ order.delivery }}</p>
                        <p>訂單金額：{{ order.total }}</p>
                        <v-divider></v-divider>
                        <h4>商品清單</h4>
                        <ul v-for="item in order.cart" :key="item._id">
                          <li>{{ item.product.name }}：{{ item.quantity }} 個</li>
                        </ul>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn
                        variant="text"
                        @click="isActive.value = false"
                        >關閉</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <!-- <v-col cols="12">
        <v-data-table-server
        v-model:items-per-page="tableItemsPerPage"
        v-model:page="tablePage"
        :items="orders"
        :items-per-page="tableItemsPerPage"
        :headers="tableHeaders"
        :loading="tableLoading"
        :items-length="tableItemsLength"
        hover
        style="border: 1px solid #d9d9cf;width: 80%; margin: auto;"
        >
          <template #[`item.number`]="{ item }">
            {{ year(item.selectable.date) + month(item.selectable) + date(item.selectable) + numSplice(item.selectable._id) }}
          </template>
          <template #[`item.date`]="{ item }">
            {{ year(item.selectable.date)+'/'+month(item.selectable)+'/'+date(item.selectable) + new Date(item.selectable.date).toLocaleTimeString()}}
          </template>
          <template #[`item.account`]="{ item }">
            {{ item.selectable.user.account }}
          </template>
          <template #[`item.product`]="{ item }" >
            <template v-for="product in item.selectable.cart">
              {{ product.name }}
            </template>
          </template>
        </v-data-table-server>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const orders = ref([])

const year = (order) => {
  return new Date(order).getFullYear().toString()
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

(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
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
