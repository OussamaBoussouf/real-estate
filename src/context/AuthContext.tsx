import { createContext, useContext, useState, type ReactNode } from 'react';
import type { UserInfo, UserLogin, UserSignup } from '../types/user';
import api from '../app/axios';
import type { AxiosResponse } from 'axios';

type AuthContextType = {
  user: UserInfo | null;
  login: (user: UserLogin) => Promise<void>;
  logout: () => void;
  signup: (user: UserSignup) => Promise<AxiosResponse<any, any, {}>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const getUser = () => {
  const storedUser = localStorage.getItem('user');
  if(!storedUser) return null;
  return JSON.parse(storedUser) as UserInfo;
}

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserInfo | null>(getUser);

  const login = async (user: UserLogin) => {
    const response = await api.post('/auth/login', user);
    localStorage.setItem('user', JSON.stringify(response.data));
    setUser(response.data);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const signup = async (user: UserSignup) => {
    return await api.post('/auth/sign-up', user);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuthContext must be used within an AuthContextProvider'
    );
  }

  return context;
};
