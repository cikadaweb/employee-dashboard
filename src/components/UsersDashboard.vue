<template>
  <div>
    <AppSearch @changeInput="changeInput"/>
    <UsersPanel :items="appStore.allEmployees" :badgeFilter="badgeFilter" @changeBadge="changeBadge"/>
  </div>
</template>

<script setup lang="ts">
import AppSearch from '@/components/AppSearch.vue'
import UsersPanel from '@/components/UsersPanel.vue'
import { ref, watch } from 'vue';

import { useAppStore } from '@/store/app';

const appStore = useAppStore();

appStore.getEmployess();

const searchValue = ref('');
const badgeFilter = ref(0);

const changeInput = (searchText: string) => {
  searchValue.value = searchText;
}

const changeBadge = (badgeNum: number) => {
  badgeFilter.value = badgeNum;
}

watch(searchValue, (newValue, oldValue) => {
  appStore.getEmployessByName(newValue);
});

watch(badgeFilter, (newValue, oldValue) => {
  appStore.getEmployessByTag(newValue);
});

</script>

<style scoped>

</style>
