import './styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './layouts/Header/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
    

)
