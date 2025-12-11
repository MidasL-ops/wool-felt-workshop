import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// 允許的管理者 email 列表（可以輕鬆新增多個管理者）
const ALLOWED_EMAILS = [
  'lesterskimo@gmail.com',
  'eaea128@gmail.com',
];

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // 只允許列表中的 email
      if (user.email && ALLOWED_EMAILS.includes(user.email)) {
        return true;
      }
      return false; // 拒絕其他用戶
    },
    async session({ session, token }) {
      return session;
    },
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  secret: process.env.NEXTAUTH_SECRET || 'fallback-secret-for-development',
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
