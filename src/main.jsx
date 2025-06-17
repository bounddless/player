import './styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< Updated upstream
import Header from './layouts/Header/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
=======
// import App from './App.jsx'

import Header from './layouts/Header/Header.jsx';
import Fest from '@/layouts/Fest/Fest.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <Fest/>
    <Header/>
>>>>>>> Stashed changes
  </StrictMode>,
    

)
