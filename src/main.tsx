import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/AppRouter'
import { ContactModalProvider } from './context/ContactModalContext'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContactModalProvider>
      <AppRouter />
      <FloatingWhatsApp />
    </ContactModalProvider>
  </React.StrictMode>
)
