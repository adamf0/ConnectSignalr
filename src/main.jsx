import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StreamData from './StreamData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StreamData />
  </StrictMode>,
)
