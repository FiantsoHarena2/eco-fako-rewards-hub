
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  points: number;
  level: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler la vérification de l'authentification au chargement
    const savedUser = localStorage.getItem('hackafako_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    // Simulation d'une API de connexion
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Utilisateur de démonstration
    const demoUser: User = {
      id: '1',
      name: 'John Doe',
      email,
      avatar: '',
      points: 1250,
      level: 4
    };
    
    setUser(demoUser);
    localStorage.setItem('hackafako_user', JSON.stringify(demoUser));
    setLoading(false);
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    // Simulation d'une API d'inscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      avatar: '',
      points: 0,
      level: 1
    };
    
    setUser(newUser);
    localStorage.setItem('hackafako_user', JSON.stringify(newUser));
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hackafako_user');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
