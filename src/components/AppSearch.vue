<template>
  <v-card class="mb-1 elevation-0">
    <v-card-text
      class="px-7 py-7 mb-1">
      <v-text-field
        v-model="searchInput"
        @input="getEmployessByName"
        bg-color="blue-grey-lighten-5"
        density="compact"
        variant="solo"
        label="Поиск сотрудника"
        append-inner-icon="mdi-magnify"
        hint="Например: Ивано Иван"
        persistent-hint
        single-line
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { emit } from 'process';
import { ref, defineEmits } from 'vue';

const emits = defineEmits(['changeInput']);

const searchInput = ref('');

const getEmployessByName = () => {
  emits('changeInput', searchInput.value)
}

</script>

<style scoped>

</style>
