import { Constants } from '@/libs/Constants';

export const addUserKakao = async (accessToken: string) => {
  const response = await fetch(
    `${Constants.apiBaseUrl}/api/v1/users/login/kakao`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accessToken,
      }),
    }
  );
  const resAccessToken = await response.json();
  const cookie = response.headers.get('set-cookie');
  const refreshToken = parseCookie(cookie);
  return { ...resAccessToken, refreshToken };
};

const parseCookie = (cookie: string | null) => {
  if (!cookie) return null;

  const cookies = cookie.split(';');

  for (const c of cookies) {
    const parts = c.trim().split('=');
    if (parts[0] === 'refreshToken') {
      return parts[1];
    }
  }
  return null;
};
