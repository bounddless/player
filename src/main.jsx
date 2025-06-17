import './styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Header from './layouts/Header/Header.jsx'
import {Test} from "@/layouts/Test/Test";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
      <Test/>
  </StrictMode>,
)
