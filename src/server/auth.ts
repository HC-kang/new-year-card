import { Constants } from '@/libs/Constants';
import { addUserKakao } from '@/service/user';
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
      if (!user) return false;
      const tokens = await addUserKakao(account.access_token);
      if (!tokens) return false;

      user.accessToken = tokens.accessToken;
      user.refreshToken = tokens.refreshToken;
      return true;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      console.log('jwt token: ', token);
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
      session.token = token;
      return session;
    },
  },

  pages: {
    signIn: '/signIn',
  },
};
