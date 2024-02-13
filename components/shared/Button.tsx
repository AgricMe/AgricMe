import React from 'react'

type buttonVariant = {
    text: string
    clas: string
}

const Button = ({text, clas}:buttonVariant) => {
  return (
    <button className={clas}>{text}</button>
  )
}

export default Button