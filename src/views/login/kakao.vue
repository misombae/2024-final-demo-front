<script lang="ts" setup>
 // 카카오 로그인 완료 후 부모 창에 데이터 전달
  const callbackData = JSON.stringify({
    userId: '12345',
    name: 'John Doe',
    token: 'abcdefg1234567',
  });

  // 부모 창에 콜백 호출
  if (window.opener && typeof window.opener.callbackKaKaoLogin === 'function') {
    window.opener.callbackKaKaoLogin(window.location.href);
    console.info('부모 창으로 데이터 전송 완료');
  } else {
    console.error('부모 창의 callbackKaKaoLogin 함수를 찾을 수 없습니다.');
  }

  // 팝업 창 닫기
  window.close();
</script>
<template>
  <div>카카오 로그인 중..</div>
</template>
