import type { App } from "vue"

declare global {
interface Window {
    callbackKaKaoLogin: Function
}
}
  
/**
 * @description
 * 전역 변수 설정
 * setup global(window) properties
 */
export function setupGlobalProperties(app: App): void {
    app.config.globalProperties.window = window
    // app.config.globalProperties.window.$t = t
    // app.config.globalProperties.window.$config = setConfigOptions()
    // app.config.globalProperties.window.$isLoading = ref(false)
    // app.config.globalProperties.window.$isOpenErrorDialog = ref(false)
    // app.config.globalProperties.$config = setConfigOptions()
  }
  