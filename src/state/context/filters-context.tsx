import { createContext } from 'react'

type FiltersContextType = {
  filters: Array<string>
  setFilters: (filters: Array<string>) => void
}

export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined,
)
