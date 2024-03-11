'use client'
import React from 'react'
import Button from '../shared/Button'
import "../css/home.css"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Hero = () => {
    const router = useRouter()
    return (
        <div className='hero-wrapper'>
            <div className='hero-cont'>
                <div className='hero-btn-txt'>
                    <p className='custom-txt'>100% Natural Food</p>
                    <h2>Choose the best healthier way of life(Dummie Text)</h2>
                    <div className='.green-btn'>
                        <Button click={()=> router.push('/signup')} clas={"yellow-btn"} text={"Sign up"} />
                        <Button click={()=> router.push('/login')} clas={"green-btn"} text={"Login"} />
                    </div>
                </div>
                <div>
                    <div className="hero-border"></div>
                    <div className='hero-img'>
                        <Image 
                        src="/component-images/hero-img.png"
                        alt="hero-img"
                        width={650}
                        height={436}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero