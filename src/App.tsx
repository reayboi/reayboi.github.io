import './App.css'
import { CreatePost } from './components/create-post/create-post'
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
      <div className="content">
        {!adminAuthenticated && <CreatePost />}
        <div className="refine">{filters.length >= 1 && <Filters />}</div>
        <Feed />
      </div>
    </main>
  )
}

export default App
