<template>
  <UserItem v-for="user in items" :item="user" :key="user.id" />
</template>

<script setup lang="ts">
import UserItem from '@/components/users/UserItem.vue'

import {
  defineProps, PropType,
} from 'vue';

import { IEmployee } from '@/store/employee.interfaces'

const props = defineProps({
  items: {
    type: Array as PropType<IEmployee>,
    required: true,
  },
});
</script>

<style scoped>

</style>
