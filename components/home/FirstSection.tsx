import Image from 'next/image'
import React from 'react'

const FirstSection = () => {
  return (
    <div className='first-sec'>
        <section>
            <Image 
            src="/icons/firstscetionicons/image.svg"
            alt='first section'
            fill
            />
        </section>
        <section></section>
    </div>
  )
}

export default FirstSection