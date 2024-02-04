'use client';

import { useAuth } from '@/context/AuthContext';

export default function SignIn() {
  const kakaoRestApiKey = '3cbe533168d3c42d4e692132b5822087';
  const kakaoRedirectUri = 'http://localhost:3000/api/v1/auth/kakao/callback';
  const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoRestApiKey}&redirect_uri=${kakaoRedirectUri}`;

  const auth = useAuth();
  return (
    <section>
      {auth.accessToken}
      <a
        href={kakaoLoginUrl}
        className='inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Kakao로 로그인하기
      </a>
    </section>
  );
}
