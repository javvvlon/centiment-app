import { fileURLToPath, URL } from "url"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ]
  },
  build: {
    outDir: './dist',
    emptyOutDir: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "../src/scss/index.scss";'
      }
    }
  }
})
