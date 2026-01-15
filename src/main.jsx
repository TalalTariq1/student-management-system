import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StudentProvider } from './Context/StudentContext.jsX'


createRoot(document.getElementById('root')).render(
  <StudentProvider>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </StudentProvider>
)
