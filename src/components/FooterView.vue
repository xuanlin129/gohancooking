<template>
  <div id="footer-view">
    <v-container>
      <v-row class="flex-column flex-md-wrap justify-center flex-lg-row justify-lg-space-between">
        <v-col cols="12" sm="5" lg="2"  class="order-lg-1">
          <v-img src="@/assets/logo_lineImg_light.png" cover width="100"></v-img>
        </v-col>
        <v-col cols="12" sm="5" lg="4">
          <v-img src="@/assets/logo_word_light.png" cover width="200"></v-img>
        </v-col>
        <v-col cols="12" sm="7" md="6" lg="4"  class="order-lg-2">
          <div>
            <v-icon icon="mdi-map-marker" color="white"></v-icon>
            <p>100 台北市中正區大埔街27巷7-1號</p>
          </div>
          <div>
            <v-icon icon="mdi-phone" color="white"></v-icon>
            <p>02-2302-5389</p>
          </div>
          <div>
            <v-icon icon="mdi-clock" color="white"></v-icon>
            <p>週三至週日 上午 9:00 - 下午 3:00</p>
          </div>
          <v-divider></v-divider>
          <div class="d-flex mt-2">
            <v-spacer></v-spacer>
            <v-btn variant="text" size="small" icon="mdi-facebook" target="_blank" href="https://www.facebook.com/gohangenkyushitsu"></v-btn>
            <v-btn variant="text" size="small" icon="mdi-instagram" target="_blank" href="https://www.instagram.com/gohancooking/"></v-btn>
            <v-btn variant="text" size="small" icon="" target="_blank" href="https://liff.line.me/1645278921-kWRPP32q/?accountId=275nsbza">
              <Icon style="font-size: 16px;" variant="text" icon="fa6-brands:line"/>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <p cols="12" lg="12" class="order-lg-3 mt-auto text-center">
        Copyright 2023 &copy; 泰山網頁青年專班 專題設計 by 林子軒
        <v-btn variant="text" size="small" icon="mdi-web" target="_blank" href="https://xuanlin129.github.io/"></v-btn>
        <v-btn variant="text" size="small" icon="mdi-github" target="_blank" href="https://github.com/xuanlin129"></v-btn>
      </p>
    </v-container>
  </div>
</template>
