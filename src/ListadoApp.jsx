import React, { useState } from 'react'
import { AgregarTarea } from './components/AgregarTarea'

const Item = ({nombre, visto}) => {
  return(
    <li className="rojito">
      {nombre} 
      {visto ? '✅' : '❌'}
    </li>
  )
}



export const ListadoApp = () => {
  const addTask = () => {
    setArreglo([...arreglo, { nombre : 'nuevo', visto : false}])
  }

  let listadoSecciones = [
    { id : 0, nombre : 'Instalaciones necesarias', visto : true },
    { id : 1, nombre : 'Uso de vite', visto : true },
    { id : 2, nombre : 'Componentes', visto : true },
    { id : 3, nombre : 'Variables en JSX', visto : true },
    { id : 4, nombre : 'Props', visto : true },
    { id : 5, nombre : 'Eventos', visto : true },
    { id : 6, nombre : 'useState', visto : true },
    { id : 7, nombre : 'Redux', visto : false },
    { id : 8, nombre : 'customHooks', visto : false }
  ]

  const [arreglo, setArreglo] = useState(listadoSecciones)

  const onAgregarTarea = (val) => {
    let valor = val.trim()
    if (valor < 1) return
    const envio = {
      id : arreglo.length + 1,
      nombre : valor,
      visto : false
    }
    setArreglo([...arreglo, envio])
  }

  return (
    <>
        <h1>Listado de temas del curso</h1>
        <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
        <ol>
          {arreglo.map(x => <Item key={x.id} nombre={x.nombre} visto={x.visto}></Item>)}
        </ol>

        {/* <button onClick={() => addTask()}>Agregar tarea</button> */}

    </>
  )
}
