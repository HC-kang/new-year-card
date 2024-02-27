import { Constants } from '@/libs/Constants';
import { refreshAccessToken, registerOrLoginWithKakao } from '@/service/user';
import { NextAuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  providers: [
    KakaoProvider({
      clientId: Constants.kakaoClientId || '',
      clientSecret: Constants.kakaoClientSecret || '',
    }),
  ],
  callbacks: {
    async signIn({ account, user }) {
      if (!account || !account.access_token) return false;
      if (account.provider != 'kakao') return false;

      const tokens = await registerOrLoginWithKakao(account.access_token);
      if (!tokens) return false;
      
      if (!user) return false;
      user.accessToken = tokens.accessToken.token;
      user.accessTokenExpires = tokens.accessToken.expiresAt;
      user.refreshToken = tokens.refreshToken.token;
      user.refreshTokenExpires = tokens.refreshToken.expiresAt;
      
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
        token.accessTokenExpires = user.accessTokenExpires;
        token.refreshToken = user.refreshToken;
        token.refreshTokenExpires = user.refreshTokenExpires;
      }

      if (typeof token?.accessToken === 'string' && typeof token.accessTokenExpires === 'number') {
        const now = Date.now();
        if (now > token.accessTokenExpires) {
          const newTokenInfo = await refreshAccessToken(token.accessToken);
          token.accessToken = newTokenInfo.accessToken.token;
          token.accessTokenExpires = newTokenInfo.accessToken.expiresAt;
        }
      }
      
      return token;
    },
    async session({ session, token }) {
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
          id: token.id as string,
        };
      }

      session.accessToken = token.accessToken as string;
      return session;
    },
  },

  pages: {
    signIn: '/signIn',
  },
};
