import './App.css'
import { Feed } from './components/feed/feed';
import { Filters } from './components/filters/filters';
import { Header } from './components/header/header';
import { useFilters } from './context/filters-context';

function App() {
  const { filters } = useFilters();

  return (
    <main>
      <Header />
      <div className='refine'>
        {/* currently not working <Sort /> */}
        {filters.length >= 1 && <Filters />}
      </div>
      <Feed />
    </main>
  )
}

export default App
