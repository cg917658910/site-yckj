import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // 这里更改打包相对绝对路径
  plugins: [vue()],
  build: {
    outDir: 'ycwy-site',//想要把dist修改成什么名字在这边改
    //assetsDir:'文件名'//想要把static修改成什么名字在这边改
  }
})
