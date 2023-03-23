// Utilities
import { defineStore } from 'pinia'
import  axios  from 'axios';
import { IEmployee } from '@/store/employee.interfaces'

export const useAppStore = defineStore('app', {
  state: () => ({
    employees: [] as IEmployee[],
    listPage: 1,
    maxListPage: null,
    isShowMoreButton: true
  }),
  actions: {
    async getEmployess() {
      try {
        const response = await axios.get('https://employee-manager-8c728-default-rtdb.firebaseio.com/employees.json');
        const data = await response.data;
        this.employees = data;
        this.maxListPage = Math.ceil(data.length / 4);
      } catch (error) {
        console.log('Error');
        throw e
      }
    },
    async getEmployessByName(searchInput: string) {
      try {
        const response = await axios.get('https://employee-manager-8c728-default-rtdb.firebaseio.com/employees.json');
        const data = await response.data;
        const filterData = data.filter((user: IEmployee) => {
          return user.full_name.toLowerCase().includes(searchInput.toLocaleLowerCase())
        })
        this.employees = filterData;
      } catch (e) {
        console.log('Error');
        throw e
      }
    },
    async getEmployessByTag(badgeNum: number) {
      try {
        const response = await axios.get('https://employee-manager-8c728-default-rtdb.firebaseio.com/employees.json');
        const data = await response.data;
        this.listPage = 1;
        this.isShowMoreButton = true;
        if (badgeNum == 0) {
          this.employees = data;
        }
        else {
          const filterData = data.filter((user: IEmployee) => {
            return user.status.tag_id == badgeNum
          })
          this.employees = filterData;
        }
      } catch (e) {
        console.log('Error');
        throw e
      }
    },
    incrementPages() {
      if (this.listPage < this.maxListPage) {
        this.isShowMoreButton = false;
      }
      this.listPage += 1;
    }
  },
  getters: {
    allEmployees() {
      return this.employees.slice(0, this.listPage * 4);
    },
  },
})
