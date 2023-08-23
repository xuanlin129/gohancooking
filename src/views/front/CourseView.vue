<template>
  <v-container>
    <v-row>
      <v-col cols="12" style="margin: 20px 0;">
        <h1 class="text-center h1-title mb-1">課程介紹</h1>
        <div class="h1-border"></div>
      </v-col>
    </v-row>
  </v-container>
  <div id="course">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-row class="mx-auto mx-sm-0 mx-lg-auto">
            <v-col cols="12">
              <h2 class="text-center">八月/廚藝教室</h2>
            </v-col>
            <v-col cols="12">
              <h3>[ 時間 ]</h3>
              <p>每週六<br>下午 15:30 - 18:30</p>
            </v-col>
            <v-col cols="12">
              <h3>[ 人數 ]</h3>
              <p>每堂上限8人<br>小班制教學</p>
            </v-col>
            <v-col cols="12">
              <h3>[ 報名方式 ]</h3>
              <p>臉書私訊<br>電話：02-23025389</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" style="color: #fff;">
          <v-row class="h-100 my-auto">
            <v-spacer></v-spacer>
            <v-col cols="12" sm="2">
              <h3 class="text-center text-sm-left vertical-lr">
                [ 課程內容 | 費用 | 內容 ]
              </h3>
            </v-col>
            <v-col cols="12" sm="8">
              <v-row>
                <template v-for="content in courseContent" :key="content.title">
                  <v-col cols="12" class="text-center text-sm-left">
                    <h3>{{ content.title }}</h3>
                    <p v-for="product in content.products" :key="product">{{ product }}</p>
                  </v-col>
                </template>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div>
  <div id="courseVideo">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-center h1-title mb-2">課程剪影</h2>
        </v-col>
        <v-col cols="12">
          <video poster="@/assets/video-img.png" src="@/assets/廚藝教室.mp4" controls></video>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </div>
  <section id="footer" style="background: #D9D9CF;">
    <FooterView></FooterView>
  </section>
</template>

<script setup>
import FooterView from '@/components/FooterView.vue'

const courseContent = [
  { title: '「 8 / 12 」 NT. 1500', products: ['► 紅燒牛肉飯', '► 五香滷味', '► 白灼時蔬'] },
  { title: '「 8 / 19 」 NT. 1500', products: ['► 起司鮮蔬燉飯', '► 番茄鮮蝦濃湯', '► 方形蘋果派'] },
  { title: '「 8 / 26 」 NT. 1500', products: ['► 鮮菇越南春捲', '► 椰香南瓜濃湯', '► 藜麥果香炊飯'] }
]
</script>
