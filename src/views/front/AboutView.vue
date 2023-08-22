<template>
  <span v-if="!isXs" id="name-fix">GOHAN</span>
  <v-container>
    <v-row>
      <v-col cols="12" style="margin: 20px 0;">
        <h1 class="text-center h1-title mb-1">關於我們</h1>
        <div class="h1-border"></div>
      </v-col>
    </v-row>
  </v-container>
  <section id="about" class="ms-auto">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-img class="mx-auto" src="@/assets/gohan_shop.jpg"  aspect-ratio="16/9" cover></v-img>
        </v-col>
        <v-col cols="12" sm="8">
          <h2 style="color: #43808F;">煮飯研究所<br><span style="font-family: komadori;">ゴハンゲンキュウシツ</span></h2>
          <p>地址：<br>100 台北市中正區大埔街27巷7-1號</p>
          <p>營業時間：<br>AM. 8:00 - PM. 16:00 週二公休</p>
          <p>電話：<br>02-2302-5389</p>
          <p>交通方式：<br>近植物園(從小南門站約走10分鐘)<br>公車可搭乘至公車可搭乘至「 大埔街 」、「 和平中華口 」站</p>
          <v-btn variant="text" size="small" icon="mdi-facebook" target="_blank" href="https://www.facebook.com/gohangenkyushitsu"></v-btn>
          <v-btn variant="text" size="small" icon="mdi-instagram" target="_blank" href="https://www.instagram.com/gohancooking/"></v-btn>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img id="qrcode" src="@/assets/line_qrcode.png" aspect-ratio="1" cover class="mx-auto mx-sm-0"></v-img>
        </v-col>
        <v-col cols="12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3615.0720625586846!2d121.5054631!3d25.0316284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9a502dbd0bb%3A0x5bfae196f902e1f!2z54Wu6aOv56CU56m25omA!5e0!3m2!1szh-TW!2stw!4v1692150176261!5m2!1szh-TW!2stw" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <section id="footer">
    <FooterView></FooterView>
  </section>
</template>

<script setup>
import FooterView from '@/components/FooterView.vue'
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { xs } = useDisplay()

const isXs = computed(() => xs.value)
</script>
