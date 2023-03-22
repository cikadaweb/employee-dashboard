<template>
  <v-app :style="{ backgroundColor: '#F5F5F5' }">
    <v-container class="my-8" fluid>
      <v-row>

        <v-col cols="12" sm="12" md="8" lg="8" xl="8">
          <UsersDashboard />
        </v-col>

        <v-col cols="12" sm="12" md="4" lg="4" xl="4">
          <UsersForm />
        </v-col>

      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import UsersDashboard from '@/components/UsersDashboard.vue'
import UsersForm from '@/components/UsersForm.vue'
</script>

<style scoped>
/* body {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  line-height: 1.5 !important;
} */
</style>
