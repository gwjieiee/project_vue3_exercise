import {defineStore,createPinia} from 'pinia'

 export const globalStore = defineStore({
  id:'globalStore',
  state:()=>{
    return {
      isexpand: true,
      token: '',
    }
  },
  getters:{},
  actions:{
    changeExpand(){
      this.isexpand = !this.isexpand
    }
  }
})

const pinia = createPinia()

export default pinia