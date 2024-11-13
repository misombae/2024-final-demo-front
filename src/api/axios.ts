// src/axios.ts
import axios from 'axios'
import type { AxiosInstance } from 'axios'

// Axios 기본 설정 (예: 백엔드 API의 베이스 URL)
const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Java 백엔드 URL
  timeout: 10000, // 요청 시간 초과 (ms)
  headers: {
    'Content-Type': 'application/json'
  }
})

// 요청 인터셉터 (필요시)
instance.interceptors.request.use(
  (config) => {
    // 요청 전 처리 (ex: 토큰 추가)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 응답 인터셉터 (필요시)
instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // 에러 처리 로직
    return Promise.reject(error)
  }
)

export default instance
