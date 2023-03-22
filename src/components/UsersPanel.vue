<template>
  <v-card class="user-panel elevation-0 px-10">
    <v-card-title class="user-panel__title mb-5">Список сотрудников</v-card-title>

    <v-card-actions class="d-flex flex-wrap">
      <UsersControls />
    </v-card-actions>

    <v-card-text>
      <UserList :items="appStore.allEmployees"/>
    </v-card-text>

    <v-card-actions>
      <v-btn
        class="user-panel__btn elevation-0 text-none"
        rounded
        outline
        size="x-large"
        prepend-icon="mdi-restart"
      >
      Показать еще
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import UsersControls from '@/components/users/UsersControls.vue'
import UserList from '@/components/users/UsersList.vue'

import { useAppStore } from '@/store/app';

const appStore = useAppStore();

appStore.getEmployess();

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
