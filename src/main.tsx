import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { HashRouter, Route, Routes } from 'react-router'
import { Login } from './pages/login/login.tsx'
import { FiltersProvider } from './state/providers/filters-provider.tsx'
import { PostsProvider } from './state/providers/posts-provider.tsx'
import { AuthProvider } from './state/providers/auth-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <PostsProvider>
        <FiltersProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </HashRouter>
        </FiltersProvider>
      </PostsProvider>
    </AuthProvider>
  </StrictMode>,
)
