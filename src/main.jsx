import './styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './layouts/Header/Header.jsx'
import App from './App';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <App />
  </StrictMode>,
    

)
