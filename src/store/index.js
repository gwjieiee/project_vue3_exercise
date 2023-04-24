import { defineStore, createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from '../router/index'

export const globalStore = defineStore({
  id: 'globalStore',
  state: () => {
    return {
      isexpand: true,
      token: '',
      tabList: [],
    }
  },
  getters: {},
  actions: {
    changeExpand() {
      this.isexpand = !this.isexpand
    },
    setExpand(val) {
      this.isexpand = val
    },
    setToken(val) {
      this.token = val
    },
    addTab(val) {
      let index = this.tabList.findIndex((item) => item.name === val.path)
      if (index == -1) {
        this.tabList.push({
          close: true,
          title: val.meta.title,
          name: val.path,
          path: val.path,
        })
      }
    },
    removeTab(val, current) {
      let index = this.tabList.findIndex((item) => item.name === val)
      this.tabList.splice(index, 1)
      if (current) {
        let currentValue = this.tabList[index - 1].name
        router.push(currentValue)
      }
    },
    logout() {
      this.token = ''
      this.tabList = []
    },
  },
  persist: {
    enabled: true,
    // storage:window.sessionStorage,
  },
})

const pinia = createPinia()
//数据持久化,即刷新页面，数据不会丢失
pinia.use(piniaPluginPersistedstate)

export default pinia
