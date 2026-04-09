import { useState, type ReactNode } from 'react'
import { AuthContext } from '../context/auth-context'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [adminAuthenticated, setAdminAuthenticated] = useState<boolean>(false)

  return (
    <AuthContext.Provider
      value={{
        adminAuthenticated,
        setAdminAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
