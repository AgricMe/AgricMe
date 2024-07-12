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
                    <p className='font-bold text-[#274C5B]'>A Social Platform for Farmers</p>
                    <h2 className='font-bold'>Welcome to Agricme: Empowering Farmers, Building Communities</h2>
                    <div>
                        <Button click={()=> router.push('/signup')} clas={"yellow-btn"} text={"Sign up"} />
                        <Button click={()=> router.push('/login')} clas={"green-btn"} text={"Login"} />
                    </div>
                </div>
                <div>
                    <div className='hero-img'>
                        <div className="hero-border"></div>
                        <Image 
                        src="/component-images/hero-img.jpeg"
                        alt="hero-img"
                        width={650}
                        height={0}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero