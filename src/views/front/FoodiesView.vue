<template>
  <v-container style="padding-bottom: 150px;" id="foodiesView">
    <v-row>
      <v-col cols="12" style="margin: 20px 0;">
        <h1 class="text-center h1-title mb-1">美味專區</h1>
        <div class="h1-border"></div>
      </v-col>
      <v-col cols="6" sm="6" md="4" lg="3" v-for="product in products" :key="product._id" style="margin-top: 15px;">
        <ProductCard v-bind="product"></ProductCard>
      </v-col>
    </v-row>
  </v-container>
  <section id="footer">
    <FooterView></FooterView>
  </section>
</template>

<script setup>
import FooterView from '@/components/FooterView.vue'
import { api } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard.vue'

const createSnackbar = useSnackbar()

const products = ref([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.value.push(...data.result)
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
