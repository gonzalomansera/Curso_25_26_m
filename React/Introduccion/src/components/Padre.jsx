import React from 'react'

export const Padre = ( props ) => {
    const { nombre,datos } = props;
  return (
    <>
    <div>Su padre tiene { datos.edad }</div>
    <p>Su nombre {nombre}</p>
    </>
  )
}
