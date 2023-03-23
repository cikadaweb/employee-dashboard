<template>
  <div class="users-form">
    <v-card class="elevation-0 px-7 py-7 mb-1">
      <v-card-actions>
        <v-btn
          class="users-form__btn users-form__btn_blue text-none"
          variant="flat"
          color="info"
          block
          prepend-icon="mdi-account-multiple-plus"
          >
          Добавить нового сотрудника
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="elevation-0 px-7 py-7">
      <v-card-title class="users-form__title">Фильтр</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col>

              <div class="users-form__subtitle">Гражданство</div>
              <v-select
                v-model="selectCountry"
                :items="countries"
                :rules="[v => !!v || 'Item is required']"
                label="Все страны"
                required
                bg-color="blue-grey-lighten-5"
              >
              </v-select>
            </v-col>
            <v-col>

              <div class="users-form__subtitle">Пол</div>
              <v-select
                v-model="selectGender"
                :items="gender"
                :rules="[v => !!v || 'Item is required']"
                label="Без разницы"
                required
                bg-color="blue-grey-lighten-5"
              >
              </v-select>
            </v-col>
          </v-row>

          <div class="users-form__subtitle">Должность</div>
          <v-select
            v-model="selectPositions"
            :items="positions"
            :rules="[v => !!v || 'Item is required']"
            label="Все должности"
            required
            bg-color="blue-grey-lighten-5"
          >
          </v-select>

          <v-checkbox
            class="pa-0 ma-0"
            v-for="item in contracts"
            :key="item"
            v-model="selected"
            :label="item"
            :value="item"
          ></v-checkbox>
        </v-form>
      </v-card-text>

      <v-card-actions class="card-actions">
        <v-btn
          class="users-form__btn text-none card-button w-50"
          variant="flat"
          color="success"
          font-weight-medium
          >
          Применить
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          class="users-form__btn text-none card-button w-50"
          variant="flat"
          color="blue-grey"
          font-weight-medium
          >
          Очистить
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,

    selectCountry: null,
    selectGender: null,
    selectPositions: null,
    countries: [
      'Россия',
      'Таджикистан',
      'Узбекистан',
    ],
    gender: [
      'Женский',
      'Мужской',
    ],
    positions: [
      'Промышленный альпинист',
      'Токарь',
      'Пекарь',
    ],
    selected: [],
    contracts: ['ТД', 'ГПХ', 'СМЗ', 'Кандидат']
  }),

  methods: {
  },
}
</script>

<style scoped>

.users-form__btn_blue {
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  padding: 20px 0;
  background-color: #00B6ED !important;
}

.users-form__title {
  font-weight: 600;
  font-size: 26px;
  line-height: 1.2;
  color: #041423;
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: 20px;
}

.users-form__subtitle {
  font-weight: 500;
  font-size: 15px;
  line-height: 1.2;
  color: #041423;
  margin-bottom: 10px;
}
.card-actions {
  border-top: 2px solid #DBE4ED;
  padding-top: 20px;
}
.card-button {
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
}
</style>
