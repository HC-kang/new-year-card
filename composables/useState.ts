export const useAccessToken = () => useState<string>('accessToken', () => '');
export const useUser = () => useState<any>('user', () => null);
