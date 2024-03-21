import { defineStore } from "pinia";
import { ref } from "vue";


export const usePriceStore = defineStore('price', {
    state: () => ({
        price: '80.900',
    }),

    actions: {
      changeValue(value) {
        this.price = value;
      }
    }
});