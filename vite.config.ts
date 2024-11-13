import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
export default defineConfig(({ mode }): any =>{

   // 현재 모드에 맞는 환경 변수를 로드
  const env = loadEnv(mode, resolve(__dirname, 'env'))

  console.info('>>>>>>env' , env)
  console.info(import.meta.env)
  return {
    plugins: [
      vue(),
      vueDevTools(),
      // https://github.com/antfu/unplugin-auto-import
      // 필수 의존성 전역 import 처리
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        // eslint 예외 처리
        eslintrc: {
          enabled: true,
          filepath: './src/system/auto-config/.eslintrc-auto-import.json',
          globalsPropValue: true
        },
        exclude: ['**/dist/**'],
        dts: 'src/system/auto-config/auto-imports.d.ts'
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
  
})
