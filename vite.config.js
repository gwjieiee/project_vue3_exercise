import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [vue(), vueJsx],
  server: {
    port: 8808,
    host: '0.0.0.0',
    proxy: {
      // 代理配置
      '/api': {
        target: 'http://jenkins-sz.lusterinc.com:8090',
        changeOrigin: true, //允许跨域
        secure: false, //解决自签名证书错误
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
