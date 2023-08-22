<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">商品管理</h1>
      </v-col>
      <v-col cols="12">
        <v-data-table-server
        v-model:items-per-page="tableItemsPerPage"
        v-model:sort-by="tableSortBy"
        v-model:page="tablePage"
        :items-per-page="tableItemsPerPage"
        :items="tableProducts"
        :headers="tableHeaders"
        :loading="tableLoading"
        :items-length="tableItemsLength"
        :search="tableSearch"
        hover
        @update:items-per-page="tableLoadItems"
        @update:sort-by="tableLoadItems"
        @update:page="tableLoadItems"
        style="border: 1px solid #d9d9cf; margin: auto; border-radius: 1.1rem;"
        >
          <template v-slot:top>
            <v-toolbar style="background: #d9d9cf;padding: 5px;border-radius: 1rem 1rem 0 0 ;">
              <v-text-field
                label="商品搜尋"
                v-model="tableSearch"
                append-inner-icon="mdi-magnify"
                variant="solo"
                @click:append-inner="tableApplySearch"
                @keydown.enter="tableApplySearch"
                hide-details
                style="opacity: 0.5;"
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-btn style="background: #43808F;color: #ffffff;" @click="openDialog">新增商品</v-btn>
            </v-toolbar>
          </template>
          <template #[`item.image`]="{ item }">
            <v-img :src="item.raw.image" width="100px" cover :aspect-ratio="1" class="mx-auto"></v-img>
          </template>
          <template #[`item.sell`]="{ item }">
            <v-switch class="d-flex justify-center" color="#43808F" v-model="item.raw.sell" @click="editSell(item.raw)"></v-switch>
          </template>
          <template #[`item.edit`]="{ item }">
            <v-btn icon="mdi-pencil" @click="tableEditItem(item.raw)" variant="text" color="#514742"></v-btn>
          </template>
          <!-- <template v-slot:bottom>
            <div class="text-center pt-2">
              <v-pagination
                v-model:model-value="tablePage"
                v-model="tablePage"
                :length="pageCount"
              ></v-pagination>
            </div>
          </template> -->
        </v-data-table-server>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog persistent v-model="dialog" width="500px">
    <v-form :disabled="isSubmitting" @submit.prevent="submit">
      <v-card>
        <v-card-title class="text-center my-0 py-4" style="background: #43808F;color: #ffffff;">{{ dialogId.length > 0 ? '編輯商品' : '新增商品' }}</v-card-title>
        <v-card-text class="pt-5" style="overflow: scroll;height: 70vh;">
          <v-text-field label="名稱" variant="outlined" v-model="name.value.value" :error-messages="name.errorMessage.value"></v-text-field>
          <v-text-field label="價格" variant="outlined" v-model.number="price.value.value" :error-messages="price.errorMessage.value" type="number" min="0"></v-text-field>
          <v-textarea label="說明" variant="outlined" v-model="description.value.value" :error-messages="description.errorMessage.value"></v-textarea>
          <v-select label="分類" variant="outlined" v-model="category.value.value" :error-messages="category.errorMessage.value" :items="categories"></v-select>
          <v-text-field label="數量" variant="outlined" v-model.number="inventory.value.value" :error-messages="inventory.errorMessage.value" type="number" min="0"
          ></v-text-field>
          <vue-file-agent v-model="files" v-model:raw-model-value="rawFiles" :max-files="1" max-size="1MB" accept="image/jpg,image/jpeg,image/png" :multiple="false" :error-text="{type: '檔案格式錯誤', size: '檔案太大'}" help-text="選擇檔案或拖放" deletable="true" ref="fileAgent"></vue-file-agent>
          <v-checkbox label="上架" v-model="sell.value.value"></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" @click="closeDialog" :loading="isSubmitting">取消</v-btn>
          <v-btn color="green" type="submit" :loading="isSubmitting">送出</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const tableItemsPerPage = ref(5)
const tableSortBy = ref([
  {
    key: 'name',
    order: 'asc'
  }
])

const tablePage = ref(1)

const tableProducts = ref([])

const tableHeaders = [
  { title: '圖片', align: 'center', sortable: false, key: 'image' },
  { title: '名稱', align: 'center', sortable: true, key: 'name' },
  { title: '價格', align: 'center', sortable: true, key: 'price' },
  { title: '分類', align: 'center', sortable: true, key: 'category' },
  { title: '數量', align: 'center', sortable: true, key: 'inventory' },
  { title: '上架', align: 'center', sortable: true, key: 'sell' },
  { title: '編輯', align: 'center', sortable: false, key: 'edit' }
]

const tableLoading = ref(false)

const tableItemsLength = ref(0)

// const pageCount = computed(() => {
//   return Math.ceil(tableProducts.value.length / tableItemsPerPage.value + 1)
// })

const tableSearch = ref('')
const tableApplySearch = () => {
  tablePage.value = 1
  tableLoadItems()
}

const tableLoadItems = async () => {
  tableLoading.value = true

  try {
    const { data } = await apiAuth.get('/products/all', {
      params: {
        page: tablePage.value,
        itemsPerPage: tableItemsPerPage.value,
        sortBy: tableSortBy.value[0].key,
        sortOrder: tableSortBy.value[0].order,
        search: tableSearch.value
      }
    })
    tableProducts.value.splice(0, tableProducts.value.length, ...data.result.data)
    tableItemsLength.value = data.result.count
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

  tableLoading.value = false
}
tableLoadItems()

const tableEditItem = (item) => {
  dialogId.value = item._id

  name.value.value = item.name
  price.value.value = item.price
  description.value.value = item.description
  category.value.value = item.category
  inventory.value.value = item.inventory
  sell.value.value = item.sell

  dialog.value = true
}

const editSell = async (item) => {
  dialogId.value = item._id

  const fd = new FormData()
  fd.append('sell', !item.sell)

  await apiAuth.patch('/products/' + dialogId.value, fd)
}

const dialog = ref(false)
const dialogId = ref('')
const openDialog = () => {
  dialogId.value = ''
  dialog.value = true
}

const closeDialog = () => {
  dialog.value = false
  resetForm()
  fileAgent.value.deleteFileRecord()
}

const categories = ['窯烤麵包', '料理包', '其他']
const schema = yup.object({
  name: yup.string().required('缺少名稱'),
  price: yup.number().required('缺少價格').min(0, '價格錯誤').typeError('缺少價格'),
  description: yup.string().required('缺少說明'),
  category: yup.string().required('缺少分類').test('isCategory', (value) => categories.includes(value)),
  inventory: yup.number().required('缺少庫存').min(0, '數量錯誤').typeError('缺少價格'),
  sell: yup.boolean()
})

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    price: 0,
    description: '',
    category: '',
    inventory: 0,
    sell: false
  }
})

const name = useField('name')
const price = useField('price')
const description = useField('description')
const category = useField('category')
const inventory = useField('inventory')
const sell = useField('sell')

const files = ref([])
const rawFiles = ref([])
const fileAgent = ref(null)

const submit = handleSubmit(async (values) => {
  if (dialogId.value.length === 0 && files.value.length === 0) return
  try {
    const fd = new FormData()
    fd.append('name', values.name)
    fd.append('price', values.price)
    fd.append('description', values.description)
    fd.append('category', values.category)
    fd.append('inventory', values.inventory)
    fd.append('sell', values.sell)
    if (files.value.length > 0) fd.append('image', files.value[0].file)

    if (dialogId.value.length > 0) {
      await apiAuth.patch('/products/' + dialogId.value, fd)
    } else {
      await apiAuth.post('/products', fd)
    }

    createSnackbar({
      text: '新增成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 3000,
        color: 'green',
        location: 'bottom'
      }
    })
    closeDialog()
    tableLoadItems()
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
