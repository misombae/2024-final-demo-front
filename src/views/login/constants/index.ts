const { VITE_KAKAO_REST_API_KEY } = import.meta.env
export const KAKAO = {
  URL: 'https://kauth.kakao.com/oauth/authorize',
  REST_API_KEY: VITE_KAKAO_REST_API_KEY,
  REDIRECT_URI: 'http://localhost:8080/api/oauth/kakao'
}
