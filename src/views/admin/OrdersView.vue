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
              <th>金額</th>
              <th>商品</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order) in orders" :key="order.id">
              <td>{{ year(order.date) +  month(order) + date(order) + numSplice(order._id) }}</td>
              <td>{{ new Date(order.date).toLocaleString() }}</td>
              <td>{{ order.user.name }}</td>
              <td>{{ order.total }}</td>
              <td>
                <v-table>
                  <tr v-for="item in order.cart" :key="item._id">
                    <td>{{ item.product.name }}：</td>
                    <td>{{ item.quantity }} 個</td>
                  </tr>
                </v-table>
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
