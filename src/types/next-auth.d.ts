import { AuthUser } from '@/model/user';

declare module 'next-auth' {
  interface Session {
    user: AuthUser;
    token: any;
    accessToken: string;
  }

  interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    image?: string;
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
    refreshTokenExpires?: number;
  }

  interface Token {
    id: string;
    accessToken: string;
    accessTokenExpires: number;
    refreshToken: string;
    refreshTokenExpires: number;
  }
}
