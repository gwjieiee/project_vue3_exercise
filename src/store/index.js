import { defineStore, createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const globalStore = defineStore({
  id: 'globalStore',
  state: () => {
    return {
      isexpand: true,
      token: '',
    }
  },
  getters: {},
  actions: {
    changeExpand() {
      this.isexpand = !this.isexpand
    },
    setExpand(val){
      this.isexpand = val
    },
    setToken(val) {
      this.token = val
    },
    logout(){
      this.token = ''
    },
  },
  persist: {
    enabled: true,
  },
})

const pinia = createPinia()
//数据持久化,即刷新页面，数据不会丢失
pinia.use(piniaPluginPersistedstate)

export default pinia
