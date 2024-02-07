import React from 'react'

type buttonVariant = {
    text: string
    clas: string
}

const Button = ({text, clas}:buttonVariant) => {
  return (
    <div><button className={clas}>{text}</button></div>
  )
}

export default Button