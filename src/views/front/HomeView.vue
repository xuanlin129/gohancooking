<template>
<section id="section01">
    <v-row>
      <v-col v-if="!isXs" cols="3">
        <span id="span-1">GOHAN</span>
        <span id="span-2">一個與料理</span>
        <span id="span-3">緊密連結的空間</span>
        <v-img class="mx-auto" src="@/assets/logo_color_dark.png" cover id="logoView"></v-img>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="9">
        <swiper class="mySwiper" :modules="modules" :autoplay="{ delay: 3000, disableOnInteraction: false }" :loop="true" style="box-shadow: 0 0 10px #514742;">
          <swiper-slide v-for="img in swiperImg" :key="img.src" >
            <v-img :src="img.src" aspect-ratio="1" cover></v-img>
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
</section>

<section id="section02">
  <v-container>
    <h1 class="h1-title text-center mb-3">由喜歡美食與烹飪的我們而發想出來的小空間</h1>
    <div class="under-line mx-auto"></div>
  </v-container>
</section>

<section id="section03">
  <v-container>
    <v-row>
      <v-col cols="12" sm="5">
        <v-img src="@/assets/brunch.png"></v-img>
      </v-col>
      <v-col cols="12" sm="8" class="ms-auto">
        <div class="d-flex justify-center align-center text-center">
          <p>
            位於萬華小巷弄內<br>
            我們結合多樣化與食物接觸的形式<br>
            早午餐 / 廚藝教室 / 客製晚餐 / 一日主廚
          </p>
        </div>
      </v-col>
      <v-col class="order-sm-1 ms-auto" cols="12" sm="6">
        <v-img src="@/assets/gohancooking_shop.jpg"></v-img>
      </v-col>
      <v-col cols="12" sm="5" class="text-center">
        <div class="d-flex justify-center align-center text-center flex-column">
          <p>
            我們一次只有賣一種早午餐，<br>
            為了讓大家為了讓大家不會吃膩，<br>
            菜單是十天更換一次喔。<br><br>
            每個月 1/11/21 推出新菜單！
          </p>
          <v-btn v-if="isXs" class="btn-primary mt-5 btn-hover" variant="text" to="/menu">MENU</v-btn>
        </div>
        <v-btn v-if="!isXs" class="btn-primary mt-5 btn-hover" variant="text" to="/menu">MENU</v-btn>
      </v-col>
    </v-row>
  </v-container>
</section>

<section id="section04">
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="h1-title text-center mb-3">廚藝教室</h1>
        <div class="under-line mx-auto"></div>
      </v-col>
      <v-col cols=12 class="my-5">
        <p class="text-center">
          我們會在每個週六的下午開放廚藝教室課程，<br>
          時間為 15:30 ~ 18:00 並且採取小班制教學，<br>
          每堂課上限 8 人。
        </p>
      </v-col>
      <v-col cols="12" sm="5" class="text-center">
        <swiper
          :effect="'cards'"
          :grabCursor="true"
          :loop="true"
          :modules="modules"
          :pagination= !isXs
          :navigation= !isXs
          class="mySwiper"
        >
        <swiper-slide v-for="img in swiperImg2" :key="img.src" >
            <v-img :src="img.src" aspect-ratio="4/3" cover></v-img>
          </swiper-slide>
        </swiper>
        <v-btn v-if="!isXs" class="btn-primary btn-hover" variant="text" to="/course" style="margin-top: 70px;">READ MORE</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="6">
        <div id="egg" class="d-flex justify-center align-center mx-auto">
          <p>
            以示範品嚐的方式從食材、工具、到烹調方式，讓你領會食材以及料理之中的奧妙和秘訣，並且每人享有一份完整的餐點，讓你在品嚐美食的過程中，又可以學習到料理的技巧。
          </p>
        </div>
        <v-btn v-if="isXs" class="mx-auto btn-hover" to="/course">READ MORE</v-btn>
        <div id="tray">
          <v-img src="@/assets/tray.png" cover></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <div id="top">
    <v-img src="@/assets/section05.svg" cover></v-img>
  </div>
</section>

<section id="section05">
  <v-parallax
    src="@/assets/restaurant.jpg"
    style="font-family: hanzi;"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="font-weight-bolder">ゴハンゲンキュウシツ</h1>
      <h4 class="subheading">
        Gohan Today!
      </h4>
    </div>
  </v-parallax>

</section>

<section id="section06">
  <div id="bottom">
    <v-img src="@/assets/section05_bottom.svg" cover></v-img>
  </div>
  <v-container>
    <v-row>
      <v-col cols=12>
        <h1 class="text-center h1-title">Foodie</h1>
      </v-col>
      <v-col cols=12>
        <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :breakpoints="{
          '1': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }"
        :modules="modules"
        :loop="true"
        :speed="3000"
        :autoplay="{ delay: 0, disableOnInteraction: false}"
        class="mySwiper"
        >
          <swiper-slide v-for="img in swiperImg3" :key="img.src">
            <v-img :src="img.src" cover></v-img>
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
  </v-container>
</section>

<section id="footer" style="background: #dae0e0;">
  <FooterView></FooterView>
</section>
</template>

<script setup>
import FooterView from '@/components/FooterView.vue'
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { Autoplay, EffectCards, EffectFlip, Pagination, Navigation } from 'swiper/modules'

const { xs } = useDisplay()
const modules = [Autoplay, EffectCards, EffectFlip, Pagination, Navigation]

const isXs = computed(() => xs.value)

const swiperImg = [
  { src: new URL('@/assets/swiper_01.jpeg', import.meta.url).href },
  { src: new URL('@/assets/swiper_02.jpeg', import.meta.url).href },
  { src: new URL('@/assets/swiper_03.jpeg', import.meta.url).href }
]

const swiperImg2 = [
  { src: new URL('@/assets/course_1.jpg', import.meta.url).href },
  { src: new URL('@/assets/course_2.jpg', import.meta.url).href },
  { src: new URL('@/assets/course_3.jpg', import.meta.url).href },
  { src: new URL('@/assets/course_4.jpg', import.meta.url).href }
]
const swiperImg3 = [
  { src: new URL('@/assets/swiper6-1.jpg', import.meta.url).href },
  { src: new URL('@/assets/swiper6-2.jpg', import.meta.url).href },
  { src: new URL('@/assets/swiper6-3.jpg', import.meta.url).href },
  { src: new URL('@/assets/swiper6-4.jpg', import.meta.url).href },
  { src: new URL('@/assets/swiper6-5.jpg', import.meta.url).href },
  { src: new URL('@/assets/swiper6-6.jpg', import.meta.url).href }
]
</script>
