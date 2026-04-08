import { createContext, type ReactNode, useContext, useState } from 'react';

type AuthContextType = {
  adminAuthenticated: boolean;
  setAdminAuthenticated: (adminAuthenticated: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [adminAuthenticated, setAdminAuthenticated] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        adminAuthenticated,
        setAdminAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};