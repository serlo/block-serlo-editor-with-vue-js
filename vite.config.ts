import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import react from '@vitejs/plugin-react'
// @ts-ignore
import veauryVitePlugins from 'veaury/vite/index.js'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': loadEnv('', process.cwd())
  },
  plugins: [
    veauryVitePlugins({
      type: 'vue',
      vueOptions: {
        template: {
          compilerOptions: {
            isCustomElement: (tag: string) => tag === 'react-wrapper'
          }
        }
      },
      vueJsxOptions: {},
      reactOptions: {}
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
