<script lang="ts" setup>
import { KAKAO } from './constants'
  // 카카오 로그인 팝업 호출
  function loginKaKao() {
      const popup = window.open(
           `${KAKAO.URL}?response_type=code&client_id=${KAKAO.REST_API_KEY}&redirect_uri=${KAKAO.REDIRECT_URI}`
      )

      // 팝업 차단 확인
      if (!popup) {
        console.error('팝업 창이 차단되었습니다.');
      }

      // 부모 창에 콜백 함수 등록
      window.callbackKaKaoLogin = async function (data: string) {
        console.info('팝업으로부터 데이터를 받았습니다: ', data);

        const questionMarkIndex = data.indexOf('?')
     if (questionMarkIndex === -1 || data.includes('error')) return

        const queryString = data.slice(questionMarkIndex + 1, data.length)
        const params = queryString
          .split('&')
          .map(item => {
            const [key, value] = item.split('=')
            return { key, value }
          })
          .reduce((acc: Record<string, any>, cur) => {
            acc[cur.key] = cur.value
            return acc
          }, {})


          //api 호출

      console.info(params)
        // // JSON 파싱
        // try {
        //   const data = JSON.parse(callbackData);
        //   console.info('파싱된 데이터:', data);
        // } catch (err) {
        //   console.error('JSON 파싱 실패:', err);
        // }
      };
    }
</script>
<template>
  <div>
    <button @click="loginKaKao">로그인</button>
  </div>
</template>
