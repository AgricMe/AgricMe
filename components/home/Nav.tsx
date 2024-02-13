import React from 'react'
import "../css/home.css"
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import "../css/home.css"
import Image from 'next/image'
const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
  })

const Nav = () => {
    return (
        <div className='nav-bar-cont'>
            <div className='nav-bar'>
                <Image 
                src="/logo/agricme-logo.png"
                alt="logo"
                width={160}
                height={36.91}
                />
                <div className='nav-links'>
                    <Link href={"/"} className={`nav-link ${roboto.className}`}>Home</Link>
                    <Link href={"/"} className={`nav-link ${roboto.className}`}>About</Link>
                    <Link href={"/"} className={`nav-link ${roboto.className}`}>Services</Link>
                    <Link href={"/"} className={`nav-link ${roboto.className}`}>Product</Link>
                    <Link href={"/"} className={`nav-link ${roboto.className}`}>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav