import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
export default defineConfig({
  overrides: [
    {
      name: 'app/files-to-lint',
      files: ['**/*.{ts,mts,tsx,vue}'],
    },
    {
      name: 'app/files-to-ignore',
      ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    },
    {
      files: ['src/**/__tests__/*'],
      ...pluginVitest.configs.recommended,
    },
  ],
  extends: [
    'plugin:vue/vue3-recommended', // Vue 3 추천 설정
    'eslint:recommended', // 기본 ESLint 추천 설정
    ...pluginVue.configs['flat/essential'],
    ...vueTsEslintConfig(),
    './src/system/auto-config/.eslintrc-auto-import.json',
  ],
  rules: {
    'vue/multi-word-component-names': 'off', // 컴포넌트 이름에 대해 다중 단어 요구를 비활성화
  },
  // skipFormatting의 사용은 필요에 따라 결정
  skipFormatting,
});