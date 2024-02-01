import { redirect } from 'next/navigation';

export default function SignIn() {
  const isSignedIn = false;
  if (isSignedIn) {
    redirect('/');
  }

  const kakaoRestApiKey = ''
  const kakaoRedirectUri = ''
  const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoRestApiKey}&redirect_uri=${kakaoRedirectUri}`

  return (
    <section>
      <a href={kakaoLoginUrl}
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Kakao로 로그인하기
      </a>
    </section>
  );
}
