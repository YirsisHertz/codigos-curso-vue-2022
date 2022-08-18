import { defineStore } from "pinia";
import { ref } from "vue";

// export const counterStore = defineStore("counter", () => {
//   const count = ref(0);
//   const addCountValue = () => {
//     count.value++;
//   };
//   return { count, addCountValue };
// });

export const counterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    addCountValue() {
      this.count++;
    },
  },
  getters: {
    getCountTo2() {
      return this.count * this.count;
    },
  },
});
