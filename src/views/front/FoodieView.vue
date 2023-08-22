<template>
  <div id="foodieView">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-breadcrumbs :items="item()" active="true" active-color="#fff">
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
          </v-breadcrumbs>
          <v-divider></v-divider>
        </v-col>
        <v-col cols="12" sm="7" md="7" style="position: relative;">
          <v-img class="mx-auto" :src="product.image" aspect-ratio="1" cover></v-img>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="5" md="5">
          <v-row class="h-100">
            <v-col cols=12>
              <h2>{{ product.name }}</h2>
              <h4>NT $ {{ product.price }}</h4>
            </v-col>
            <v-col cols="12" md="6" lg="4" class="mt-auto">
              <v-form :disabled="isSubmitting" @submit.prevent="submit">
                <div class="d-flex ms-auto ms-lg-0" style="width: 150px;;">
                  <v-btn variant="text" icon="mdi-minus" @click="minus" :disabled="quantity.value.value <= 1"></v-btn>
                  <v-responsive class="mx-auto" max-width="80">
                    <v-text-field variant="outlined" density="compact" type="text" v-model.number="quantity.value.value" min="0" :error-messages="quantity.errorMessage. value"></v-text-field>
                  </v-responsive>
                  <v-btn variant="text" icon="mdi-plus" @click="plus"         :disabled="quantity.value.value === product.inventory"></v-btn>
                </div>
              </v-form>
              <!-- <h6 class="text-right me-4 me-lg-0">剩餘 {{ product.inventory }} 個</h6> -->
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" md="6" class="text-center  text-sm-right mt-md-auto">
              <v-btn @click="submit" class="btn-primary mb-md-6">加入購物車</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12" class="text-center" style="padding: 50px 0;">
          <h3 class="mb-4">商品描述</h3>
          <pre>{{ product.description }}</pre>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-overlay :model-value="!product.sell" persistent class="align-center justify-center">
    <div style="width: 50vw; height: 50vh;background: rgba(0, 0, 0, 0.5);" class="align-center justify-space-evenly d-flex flex-column">
      <h1 class="text-center" style="color: #ffffff;">商品已售完</h1>
      <v-btn to="/">回上頁</v-btn>
    </div>
  </v-overlay>
  <section id="footer">
    <FooterView></FooterView>
  </section>
</template>

<script setup>
import FooterView from '@/components/FooterView.vue'
import { ref } from 'vue'
import { api, apiAuth } from '@/plugins/axios'
import { useRoute } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useUserStore } from '@/store/user'

const route = useRoute()
const createSnackbar = useSnackbar()
const user = useUserStore()

const plus = () => {
  quantity.value.value += 1
}
const minus = () => {
  quantity.value.value -= 1
}

const schema = yup.object({
  quantity: yup.number().typeError('缺少數量').required('缺少數量').min(1, '最少為 1')
})
const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 1
  }
})
const quantity = useField('quantity')

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await apiAuth.post('/users/cart', {
      product: product.value._id,
      quantity: values.quantity
    })
    user.cart = data.result
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

const product = ref({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  inventory: 0,
  category: ''
});

(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product.value._id = data.result._id
    product.value.name = data.result.name
    product.value.price = data.result.price
    product.value.description = data.result.description
    product.value.image = data.result.image
    product.value.inventory = data.result.inventory
    product.value.category = data.result.category
    product.value.sell = data.result.sell

    document.title = '煮飯研究所 | ' + data.result.name
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

const item = () => {
  return ['美味專區', product.value.category, product.value.name]
}
</script>
