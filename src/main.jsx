import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToggleContext } from './context/index.js';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleContext>
      <App />
    </ToggleContext>
  </React.StrictMode>,
);