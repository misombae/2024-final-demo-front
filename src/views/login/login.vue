<script lang="ts" setup>
import { KAKAO } from './constants'
function loginKaKao() {
  console.info(KAKAO.REST_API_KEY)
  return 
  //https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}
  window.open(
    `${KAKAO.URL}?response_type=code&client_id=${KAKAO.REST_API_KEY}&redirect_uri=${KAKAO.REDIRECT_URI}`
  )
  const callback = async (callbackData: string) => {
    console.info('콜콜콜백으로 응답을 받았나요?')
    const data = JSON.parse(callbackData)
    console.info(data)
  }
  window.addEventListener('message', (event) => {
    // 보안상의 이유로, 이벤트의 origin을 확인하는 것이 좋습니다.
    if (event.origin === window.location.origin) {
      const callbackData = event.data; // 카카오 로그인에서 받은 데이터
      console.info('콜콜콜백으로 응답을 받았나요?')
      const data = JSON.parse(callbackData)
      console.info(data)
    }
  })
  // window.callbackKaKaoLogin = callback
}
</script>
<template>
  <div>
    <button @click="loginKaKao">로그인</button>
  </div>
</template>
