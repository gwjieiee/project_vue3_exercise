import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
	server:{
		port:8808,
		host:'0.0.0.0',
		open:true,
		proxy:{
			// 代理配置
			'/api': {
			  target: 'http://jenkins-sz.lusterinc.com:8090',
			  changeOrigin: true, //允许跨域
			  secure: false, //解决自签名证书错误
			  rewrite: (path) => path.replace(/^\/api/, ''),
			},
		}
	}
})
