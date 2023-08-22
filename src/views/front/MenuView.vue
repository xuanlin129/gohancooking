<template>
  <v-container id="menu">
    <v-row class="justify-center align-md-center">
      <v-col cols="12" style="margin: 20px 0;">
        <h1 class="text-center h1-title mb-1">菜單介紹</h1>
        <div class="h1-border"></div>
      </v-col>
      <v-col cols="12" sm="10" md="6" class="offset-sm-1 offset-md-0">
        <v-img id="menu-img" src="@/assets/menu_0810-0820.jpeg"></v-img>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="5">
        <p>
          08/11- 08/20<br><br>
          NT：250<br>
          花椒香嫩里肌肉片<br>
          柴燒窯烤麵包<br>
          古早味蒸蛋<br>
          燉蘿蔔<br>
          自製優格<br>
          生菜沙拉（義式油醋/凱薩）、豆豉苦瓜湯（擇一）<br>
          附：美式咖啡或錫蘭紅茶（擇一）<br>
          - - - - - - - - - - - - - - - - - - -<br>
          +NT.50升級套餐（以下三樣都有）<br>
          蠔油杏鮑菇<br>
          紅糖地瓜<br>
          季節水果
        </p>
      </v-col>
      <v-col cols="8" lg="6">
        <v-img src="@/assets/fruit.png"></v-img>
      </v-col>
    </v-row>
  </v-container>
  <section id="footer">
    <FooterView></FooterView>
  </section>
</template>

<script setup>
import FooterView from '@/components/FooterView.vue'
</script>
