import React, { useState } from 'react'

const Button = () => {
    return (
        <button>Soy un botón</button>
    )
}

export const ContadorApp = ({value}) => {

    const [contador, setContador] = useState(value)

    const  handleClick = () => {
        setContador(contador + 1)
    }

    return (
        <>
            <h1>Contador:</h1>
            <p>{contador}</p>
            <button onClick={() => handleClick(value)}>
                Soy un botón
            </button>
    </>
  )
}
