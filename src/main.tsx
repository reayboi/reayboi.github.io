import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FiltersProvider } from './context/filters-context.tsx'
import { PostsProvider } from './context/posts-context.tsx'
import { HashRouter, Route, Routes } from 'react-router'
import { Login } from './pages/login/login.tsx'
import { AuthProvider } from './context/auth-context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <PostsProvider>
        <FiltersProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </HashRouter>
        </FiltersProvider>
      </PostsProvider>
    </AuthProvider>
  </StrictMode>
)
