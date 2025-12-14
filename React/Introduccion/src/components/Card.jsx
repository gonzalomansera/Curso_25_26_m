import React from 'react'

export const Card = ( props ) => {
    const { imagen,text } = props
  return (
    <>
    <div>Card
    <img src={imagen} alt="No hay imagen"/>
    <p>{text}</p>
    </div>
    </>
  )
}
