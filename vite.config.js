import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { fileURLToPath,URL } from "node:url";
export default defineConfig({
  base: '/deploying-vite-project-example/',
  plugins: [vue()],
  css:{
    devSourcemap: true,
  },
  resolve:{
    alias:{
      '@': fileURLToPath(new URL('./src',import.meta.url)),
    }
  }
});
