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
  
  return await response.json();
};

