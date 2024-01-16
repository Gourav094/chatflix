import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignIn, setisSignIn] = useState(true);

    const handleClick = () => {
        setisSignIn(!isSignIn)
    }

    return (
        <div className='h-full'>
            <div className='absolute h-full'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt='background' ></img>
            </div>
            <Header />
            <div className='absolute  bg-transparent w-2/6 mx-auto right-0 left-0 my-36 text-white'>
                <div className='h-screen  bg-black bg-opacity-75 rounded-lg'>
                    <form className='py-14 px-20 text-left flex flex-col gap-4'>

                        <h1 className=' text-4xl font-semibold pb-8'>{isSignIn ? "Sign In" : "Sign Out"}</h1>
                        {!isSignIn && <input placeholder='Full Name' className='p-4  outline-none bg-neutral-800 rounded' />}
                        <input placeholder='Email or phone number' className='p-4  outline-none bg-neutral-800 rounded' />
                        
                        <input placeholder='Password' className='p-4 outline-none bg-neutral-800 rounded' />
                        <button className='bg-red-700 text-xl font-semibold text-center py-3 rounded-md'>{isSignIn ?"Sign In":"Sign out"}</button>
                        <p className='py-2 cursor-pointer font-medium ' onClick={() => handleClick()}>{isSignIn ? "New to Netflix? Sign up now." : "Already registered? Sign In"}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
