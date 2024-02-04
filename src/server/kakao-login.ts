const kakaoRestApiKey = process.env.KAKAO_REST_API_KEY
const kakaoRedirectUri = process.env.KAKAO_REDIRECT_URI
const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoRestApiKey}&redirect_uri=${kakaoRedirectUri}`