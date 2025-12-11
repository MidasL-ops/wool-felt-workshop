'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminLogin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'authenticated' && session) {
      router.push('/admin');
    }
  }, [session, status, router]);

  const handleGoogleSignIn = async () => {
    try {
      setError(null);
      await signIn('google', { callbackUrl: '/admin', redirect: true });
    } catch (err) {
      console.error('登入錯誤:', err);
      setError('登入失敗，請稍後再試');
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-cloud to-bg-cream">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">載入中...</p>
        </div>
      </div>
    );
  }

  if (status === 'authenticated') {
    return null; // 會自動重定向
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-cloud to-bg-cream py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">管理者登入</h1>
          <p className="text-text-secondary">請使用 Google 帳號登入</p>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-gray-300 rounded-lg font-medium text-foreground hover:bg-gray-50 transition-colors shadow-sm"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span>使用 Google 登入</span>
        </button>

        {error && (
          <p className="text-sm text-red-600 text-center mt-4">
            {error}
          </p>
        )}
        <p className="text-sm text-text-secondary text-center mt-6">
          只有授權的管理者可以登入
        </p>
      </div>
    </div>
  );
}
