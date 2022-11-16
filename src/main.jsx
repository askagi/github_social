import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import { StoresProvider } from './contexts/StoresContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoresProvider>
      <App />
    </StoresProvider>
  </React.StrictMode>
)
