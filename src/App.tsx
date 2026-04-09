import './App.css'
import { Feed } from './components/feed/feed'
import { Filters } from './components/filters/filters'
import { Header } from './components/header/header'
import { useAuth } from './state/hooks/use-auth'
import { useFilters } from './state/hooks/use-filters'

function App() {
  const { filters } = useFilters()
  const { adminAuthenticated } = useAuth()

  return (
    <main>
      <Header />
      <div className="refine">
        {/* currently not working <Sort /> */}
        {filters.length >= 1 && <Filters />}
      </div>
      {adminAuthenticated && <h3>Hello World</h3>}
      <Feed />
    </main>
  )
}

export default App
