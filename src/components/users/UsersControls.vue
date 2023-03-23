<template>
  <v-btn
    class="user-list__btn_gray text-none"
    :class="badgeFilter == 0 ? 'user-list__btn_gray-active' : ''"
    rounded
    @click="changeBadge(0)"
  >
    Весь список
  </v-btn>
  <v-btn
    flat
    class="user-list__btn_gold text-none"
    :class="badgeFilter == 1 ? 'user-list__btn_gold-active' : ''"
    rounded
    @click="changeBadge(1)"
  >
    Проблемные
  </v-btn>
  <v-btn
    class="user-list__btn_red text-none"
    :class="badgeFilter == 2 ? 'user-list__btn_red-active' : ''"
    rounded
    @click="changeBadge(2)"
  >
    Критические
  </v-btn>
  <v-btn
    class="user-list__btn_blue text-none"
    :class="badgeFilter == 3 ? 'user-list__btn_blue-active' : ''"
    rounded
    @click="changeBadge(3)"
  >
    Есть замечания
  </v-btn>
  <v-btn
    class="user-list__btn_green text-none"
    :class="badgeFilter == 4 ? 'user-list__btn_green-active' : ''"
    rounded
    @click="changeBadge(4)"
  >
    Выполнено
  </v-btn>
</template>

<script setup lang="ts">
import {
  defineProps, defineEmits
} from 'vue';

const emits = defineEmits(['changeBadge']);

const props = defineProps({
  badgeFilter: {
    type: Number,
    required: true,
  },
});

const changeBadge = (badgeNum: number) => {
  emits('changeBadge', badgeNum);
}

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

.user-list__btn_gold-active {
  background-color: #E2BD06;
  color: #FFFFFF;
}

.user-list__btn_red {
  background-color: #FFF8F8;
  border: 1px solid #E52E2E;
  color: #E52E2E;
}

.user-list__btn_red-active {
  background-color: #E52E2E;
  color: #FFFFFF;
}

.user-list__btn_blue {
  background-color: #F3FCFF;
  border: 1px solid #00B6ED;
  color: #00B6ED;
}

.user-list__btn_blue-active {
  background-color: #00B6ED;
  color: #FFFFFF;
}

.user-list__btn_green {
  background-color: #F2FFF9;
  border: 1px solid #00AE5B;
  color: #00AE5B;
}
.user-list__btn_green-active {
  background-color: #00AE5B;
  color: #FFFFFF;
}

</style>
