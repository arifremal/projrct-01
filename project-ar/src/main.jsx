import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Arif from './Arif.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Arif/>
  </StrictMode>,
)
