import React from 'react'

type textVariant = {
    text: string,
    small: string
}

export default function LeftSection({text, small}: textVariant) {
  return (
    <>
        <div className='side-display'>
            <h1>{text}</h1>
            <p>{small}</p>
        </div>
    </>
  )
}
