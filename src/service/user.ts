import { Constants } from '@/libs/Constants';

export const registerOrLoginWithKakao = async (accessToken: string) => {
  try {
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
    
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const refreshAccessToken = async (token: string) => {
  try {
    const response = await fetch(`${Constants.apiBaseUrl}/api/v1/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (err) {
    console.error(err);
  }
}