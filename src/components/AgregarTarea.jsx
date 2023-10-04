import React, { useState } from 'react'

export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange =  (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        // console.log(inputValue);
        // const envio = {
        //     nombre : inputValue,
        //     visto : false
        // }
        // event.preventDefault()
        // agregarTarea(tareas => [...tareas, envio])


        event.preventDefault()
        agregarTarea(inputValue)
    }

    return (

        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type='text'
                placeholder='Ingresá tarea nueva'
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            >

            </input>
        </form>
    )
}