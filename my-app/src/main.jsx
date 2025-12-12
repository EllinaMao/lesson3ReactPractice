import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' //все необходимые методы для взаимодействия с DOM
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
