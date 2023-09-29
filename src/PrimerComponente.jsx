// import React from 'react'
import PropTypes from 'prop-types'

export const PrimerComponente = ({titulo, subtitulo = 'Sección de props'}) => {
    console.log(titulo);
  return (
    <>
        <h1>{titulo}</h1>
        <h2>{subtitulo  }</h2>

    </>
  )
}


PrimerComponente.PropType = { //Pone como requerido las props
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
}


// PrimerComponente.defaultProps = { //Poner valor default en props
//     titulo : 'Curso de react',
//     subtitulo : 'Sección de props '
// }