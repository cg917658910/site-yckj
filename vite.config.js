import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // 这里更改打包相对绝对路径
  plugins: [vue()],
})
