// Point d'entrée React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Récupération de l'élément racine
const rootElement = document.getElementById('root')!

// Rendu de l'application
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
