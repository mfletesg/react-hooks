import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimerComponente } from './PrimerComponente'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerComponente titulo="Esta seccion es de props" />
  </React.StrictMode>,
)
