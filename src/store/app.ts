// Utilities
import { defineStore } from 'pinia'
import  axios  from 'axios';

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

export const useAppStore = defineStore('app', {
  state: () => ({
    employees: [] as IEmployee[]
  }),
  actions: {
    async getEmployess() {
      const response = await axios.get('https://employee-manager-8c728-default-rtdb.firebaseio.com/employees.json');
      const data = await response.data;
      this.employees = data;
    }
  },
  getters: {
    allEmployees() {
      return this.employees;
    },
  },
})
