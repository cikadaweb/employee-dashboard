<template>
  <UserItem v-for="user in items" :item="user" :key="user.id" />
</template>

<script setup lang="ts">
import UserItem from '@/components/users/UserItem.vue'

import {
  defineProps, PropType,
} from 'vue';

interface IStatus {
  tag_id: number,
  tag: string,
  description: string,
}
interface IEmployee {
  id: 1,
  full_name: string,
  inn: string,
  address: string,
  date_birth: string,
  age: number,
  type_contract: string,
  type_contact_id: number,
  gender: string,
  gender_id: number,
  country: string,
  country_id: number,
  position: string,
  position_id: number,
  status: IStatus,
}

const props = defineProps({
  items: {
    type: Array as PropType<IEmployee>,
    required: true,
  },
});
</script>

<style scoped>

</style>
