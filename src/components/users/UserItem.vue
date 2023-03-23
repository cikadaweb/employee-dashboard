<template>
  <v-card class="employee-card elevation-0">
    <v-card-text class="employee-card__text">

      <div class="employee-card__info d-inline-flex flex-wrap">
        <div class="employee-card__info-name">{{ item.full_name }}</div>
        <v-btn
          class="employee-card__info-inn elevation-0"
          size="small"
        >ИНН {{ item.inn }}
        </v-btn>
        <div>
          <v-btn
            inline-block
            class="employee-card__info-contract elevation-0"
            size="small"
            color="success"
          >
            {{ item.type_contract }}
          </v-btn>
          <span>{{ item.position }}</span>
        </div>
      </div>

      <div class="employee-card__info employee-card__info_details">
          <span>{{ item.country }}</span>
          <span>{{ item.address }}</span>
          <span>Дата рождения: {{ item.date_birth }}</span>
          <span>Возраст: {{ item.age }}</span>
          <span>Пол: {{ item.gender }}</span>
      </div>

      <div>
        <v-btn
          class="employee-card__status-badge text-none elevation-0"
          :style="currentEmployeeColor"
        >
          {{ item.status.description }}
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">

import {
  defineProps, PropType, computed
} from 'vue';

import { IEmployee } from '@/store/employee.interfaces'

const props = defineProps({
  item: {
    type: Object as PropType<IEmployee>,
    required: true,
  },
});

const currentEmployeeColor = computed(() => {
  if (props.item.status.tag_id == 1) {
    return 'backgroundColor: #E2BD06'
  }
  else if (props.item.status.tag_id == 2) {
    return 'backgroundColor: #E52E2E'
  }
  else if (props.item.status.tag_id == 3) {
    return 'backgroundColor: #00B6ED'
  }
  else {
    return 'backgroundColor: #00AE5B'
  }
});

</script>

<style scoped>

.d-inline-flex {
  gap: 20px;
}
.employee-card {
  background-color: #E7F3FF;
}

.employee-card+.employee-card {
  margin-top: 15px;
}
.employee-card__text {

}

.employee-card__info {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 15px;
}

.employee-card__info_details {
  margin: 0 -15px 15px ;
}

.employee-card__info > span {
  padding: 0 15px;
  border-right: 1px solid #CEDAE6;
  transform: rotate(-90deg);
}

.employee-card__info > span:last-child {
  border-right: 1px solid transparent;
  transform: rotate(-90deg);
}
.employee-card__info-name {
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #2A358C;
}

.employee-card__info-inn {
  font-weight: 500;
  font-size: 13px;
  line-height: 120%;
  color: #84909B;
}

.employee-card__info-contract {
  margin-right: 10px;
}

.employee-card__status-badge {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  color: #FFFFFF;
}
</style>
