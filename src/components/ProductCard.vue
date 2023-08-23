<template>
<v-card :to="'/products/' + _id" class="text-center mx-auto foodCard" style="max-width: 220px; color: #023B4F; box-shadow: none; border-radius: 0">
  <v-img :src="image" aspect-ratio="1" cover></v-img>
  <v-card-title>{{ name }}</v-card-title>
  <v-card-text style="font-size: 18px">NT $ {{ price }}</v-card-text>
  <!-- <v-card-actions>
    <v-btn class="btn-primary mx-auto" prepend-icon="mdi-cart" @click="addCart">加入購物車</v-btn>
  </v-card-actions> -->
</v-card>
</template>

<script setup>
// import { apiAuth } from '@/plugins/axios'
// import { useUserStore } from '@/store/user'
// import { useSnackbar } from 'vuetify-use-dialog'

// const createSnackbar = useSnackbar()
// const user = useUserStore()

const props = defineProps({
  _id: {
    type: String,
    default: () => ''
  },
  category: {
    type: String,
    default: () => ''
  },
  description: {
    type: String,
    default: () => ''
  },
  image: {
    type: String,
    default: () => ''
  },
  inventory: {
    type: Number,
    default: () => 0
  },
  name: {
    type: String,
    default: () => ''
  },
  price: {
    type: Number,
    default: () => 0
  },
  sell: {
    type: Boolean,
    default: () => true
  }
})

// const addCart = async () => {
//   try {
//     const { data } = await apiAuth.post('/users/cart', {
//       product: props._id,
//       quantity: 1
//     })
//     user.cart = data.result
//   } catch (error) {
//     createSnackbar({
//       text: error.response.data.message,
//       showCloseButton: false,
//       snackbarProps: {
//         timeout: 3000,
//         color: 'red',
//         location: 'bottom'
//       }
//     })
//   }
// }
</script>
