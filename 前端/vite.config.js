
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
const pathResolve = (dir) => resolve(__dirname, '.', dir) 


export default defineConfig({
  plugins: [vue()],
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []


   
    }
 
  },
  server: {
    port: 8080,
    open: true,
    cors: true,
  },
  resolve: {
    alias: {
      '@': pathResolve('src'),
    },
  },
})
