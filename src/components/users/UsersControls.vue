<template>
  <v-btn
    class="user-list__btn_gray text-none"
    rounded
  >
    Весь список
  </v-btn>
  <v-btn
    flat
    class="user-list__btn_gold text-none"
    rounded
  >
    Проблемные
  </v-btn>
  <v-btn
    class="user-list__btn_red text-none"
    rounded
  >
    Критические
  </v-btn>
  <v-btn
    class="user-list__btn_blue text-none"
    rounded
  >
    Есть замечания
  </v-btn>
  <v-btn
    class="user-list__btn_green text-none"
    rounded
  >
    Выполнено
  </v-btn>
</template>

<script setup lang="ts">

</script>

<style scoped>
.user-list__btn_gray {
  background-color: #B0BCC7;
  border: 1px solid #B0BCC7;
  color: #FFFFFF;
}

.user-list__btn_gold {
  background-color: #FFFDF1;
  border: 1px solid #E2BD06;
  color: #E2BD06;
}

.user-list__btn_red {
  background-color: #FFF8F8;
  border: 1px solid #E52E2E;
  color: #E52E2E;
}

.user-list__btn_blue {
  background-color: #F3FCFF;
  border: 1px solid #00B6ED;
  color: #00B6ED;
}

.user-list__btn_green {
  background-color: #F2FFF9;
  border: 1px solid #00AE5B;
  color: #00AE5B;
}</style>
