<template>
  <div id="welcome">
    <v-container class="h-100 d-flex justify-center align-center">
      <v-row class="justify-center align-center text-center flex-column">
        <v-col cols="6">
          <v-img src="@/assets/logo_lineImg_light.png" :width="245"></v-img>
        </v-col>
        <v-col cols="6">
          <v-img src="@/assets/logo_cn_light.png" :width="430"></v-img>
        </v-col>
        <v-col cols="6">
          <v-img src="@/assets/logo_jp_light.png" :width="320" ></v-img>
        </v-col>
        <v-col cols="6">
          <v-btn style="margin-top: 50px;" to="/home">開始探索</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
