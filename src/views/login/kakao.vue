<script lang="ts" setup>
console.info('여기로 오나요?')
window.opener.callbackKaKaoLogin(window.location.href)
window.close()
</script>
<template>
  <div>여깅?</div>
</template>
