<template>
  <v-card class="user-panel elevation-0 px-10">
    <v-card-title class="user-panel__title mb-5">Список сотрудников</v-card-title>

    <v-card-actions class="d-flex flex-wrap">
      <UsersControls :badgeFilter="badgeFilter" @changeBadge="changeBadge"/>
    </v-card-actions>

    <div v-if="items.length !== 0">
      <v-card-text>
        <UserList :items="items"/>
      </v-card-text>

      <v-card-actions>
        <v-btn
          v-if="appStore.isShowMoreButton"
          class="user-panel__btn elevation-0 text-none"
          rounded
          outline
          size="x-large"
          prepend-icon="mdi-restart"
          @click="appStore.incrementPages"
        >
        Показать еще
        </v-btn>
      </v-card-actions>
    </div>

    <div v-else>
      <v-card-text class="text-h5 text-center py-16">
        По такому запросу сотрудников не найдено
      </v-card-text>
    </div>

  </v-card>
</template>

<script setup lang="ts">
import UsersControls from '@/components/users/UsersControls.vue'
import UserList from '@/components/users/UsersList.vue'

import {
  defineProps, PropType, defineEmits
} from 'vue';

import { useAppStore } from '@/store/app';

import { IEmployee } from '@/store/employee.interfaces'

const appStore = useAppStore();

const emits = defineEmits(['changeBadge']);

const props = defineProps({
  items: {
    type: Array as PropType<IEmployee>,
    required: true,
  },
  badgeFilter: {
    type: Number,
  }
});

const changeBadge = (badgeNum: number) => {
  emits('changeBadge', badgeNum);
}

</script>

<style scoped>

.d-flex{
  gap: 10px;
}
.user-panel__title {
  font-weight: 600;
  font-size: 26px;
  line-height: 120%;
  margin-top: 30px;
}

.user-panel__btn {
  font-weight: 500;
  font-size: 15px;
  line-height: 1.2;
  padding: 14px 24px;
  border: 1px solid #2A358C;
  color: #2A358C;
  border-radius: 4px;
  margin: 0 auto 60px;
}
</style>
