import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';
import logo from '@/public/logo/agricme-logo.png'

type formVariant = {
    page: string
}

export default function Form({page}: formVariant) {
  return (
    <>
        <div className='form-container'>
            <div className='logo'>
                <Link href={'/'}><img src={'/logo/agricme-logo.png'} width={200} alt="" /></Link>
            </div>
            <div>
                <h3>{page}</h3>
                <div className="oauth">
                    <button className='auth'><span><FcGoogle /></span> Continue with Google</button>
                    <button className='auth'><span><FaFacebook /></span> Continue with facebook</button>
                </div>
                <form className='form' action="">
                    {
                        page == "Create Account" &&
                        <label className='label flex flex-col items-stretch' htmlFor="username">Username
                            <input className=' bg-white' type="username" name="username" id="username" />
                        </label>
                    }
                    <label className='label grid' htmlFor="email">Email
                        <input className='w-full bg-white' type="email" name="email" id="email" />
                    </label>
                    <label className='label grid' htmlFor="password">Password
                        <input className='w-full bg-white' type="password" name="password" id="password" />
                    </label>
                    <label className='label remember' htmlFor="remember">
                        <input className='text-white bg-white' type="checkbox" name="remember" id="remember" /> Remember me
                    </label>
                    <button className='submit'>Continue</button>
                </form>
                {
                    page == 'Log In'?
                    <span className='label account'>Already have an account? <Link href={'/signup'}>Create Account</Link></span>:
                    <span className='label account'>Don't have an account? <Link href={'/login'}>Log In</Link></span>
                }
            </div>
        </div>
    </>
  )
}
