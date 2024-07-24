import React from 'react'
import Link from 'next/link'
import "../css/home.css"
import Image from 'next/image'
import { cn } from '@/utils/cn'
const Hero = () => {
    return (
        <div className='hero-wrapper'>
            <div className='hero-cont'>
                <div className='hero-btn-txt'>
                    <p className='font-bold text-[#274C5B]/70'>A Social Platform for Farmers</p>
                    <h2 className='font-bold'>An Avenue for Empowering Farmers, Building Communities</h2>
                    <div>
                        <Link href={"/login"}>
                            <button
                                className={cn(
                                    "px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
                                    "bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn green-btn py-3 px-6 rounded-lg"
                                )}
                                >
                                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                                    Get Started
                                </span>
                                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 yellow-btn">
                                    Join Us
                                </div>
                            </button>
                        </Link>  
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