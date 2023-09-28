// import React from 'react'

export const PrimerComponente = ({titulo, subtitulo}) => {
    console.log(titulo);
  return (
    <>
        <h1>{titulo}</h1>
        <h2>{subtitulo + 1  }</h2>

    </>
  )
}


PrimerComponente.PropType = {
    titulo: PropType.string.isRequired,
    subtitulo: PropType.string.isRequired,
}
