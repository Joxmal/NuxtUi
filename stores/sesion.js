import { defineStore } from 'pinia'
import PocketBase from 'pocketbase';

export const useSesionStore = defineStore('useSesionStore', {
  state: () => ({
    pb: new PocketBase(useRuntimeConfig().public.apiBase)
  }),
  getters:{
    dobleCount: (state) => state.count * 2
  },
  actions:{
    sumCount() {
        this.count++
    },
  },

})