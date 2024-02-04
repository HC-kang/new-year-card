'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import { ReactNode } from 'react';

interface AuthContextProps {
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
}

const AuthContext = createContext<AuthContextProps>({
  accessToken: null,
  setAccessToken: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = getCookie('access_token');
    setAccessToken(accessToken);
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// Helper function to get cookie value
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null; // SSR일 경우 null 반환

  const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  const cookie = cookies.find(cookie => cookie.startsWith(`${name}=`));

  if (!cookie) return null;

  return cookie.split('=')[1];
}