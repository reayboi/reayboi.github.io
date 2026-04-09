import { createContext } from 'react'

type AuthContextType = {
  adminAuthenticated: boolean
  setAdminAuthenticated: (adminAuthenticated: boolean) => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
