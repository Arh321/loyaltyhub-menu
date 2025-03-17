"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  phone: string | null;
  login: (phone: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phone, setPhone] = useState<string | null>(null);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      const { phone, timestamp } = JSON.parse(user);
      if (Date.now() - timestamp < 30 * 60 * 1000) {
        setIsLoggedIn(true);
        setPhone(phone);
      } else {
        sessionStorage.removeItem("user");
      }
    }
  }, []);

  const login = (phone: string) => {
    sessionStorage.setItem(
      "user",
      JSON.stringify({ phone, timestamp: Date.now() })
    );
    setIsLoggedIn(true);
    setPhone(phone);
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    setIsLoggedIn(false);
    setPhone(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, phone, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
