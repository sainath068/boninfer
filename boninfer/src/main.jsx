import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import Router from './app/Router.jsx'
import './styles/globals.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  </StrictMode>
)
