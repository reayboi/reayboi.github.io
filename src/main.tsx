import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FiltersProvider } from './context/filters-context.tsx'
import { PostsProvider } from './context/posts-context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostsProvider>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </PostsProvider>
  </StrictMode>,
)
