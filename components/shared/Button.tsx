import React from 'react'

type buttonVariant = {
    text: string
    clas: string
    click: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({text, clas, click}:buttonVariant) => {
  return (
    <button onClick={click} className={clas}>{text}</button>
  )
}

export default Button