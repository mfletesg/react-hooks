import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimerComponente } from './PrimerComponente'
import './styles/styles.css'
import {  ContadorApp } from './ContadorApp'
import { ListadoApp } from './ListadoApp'
import { UsersApp } from './UsersApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PrimerComponente titulo="Esta seccion es de props" /> */}
    {/* <ContadorApp value={0}/> */}
    {/* <ListadoApp/> */}
    <UsersApp/>
  </React.StrictMode>,
)
