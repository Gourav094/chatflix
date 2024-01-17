import React, { useState, useRef } from 'react'
import Header from './Header'
import { validateData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../utils/firebase"

const Login = () => {
    const email = useRef(null)
    const password = useRef(null)

    const [isSignIn, setisSignIn] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null)

    const handleClick = () => {
        setisSignIn(!isSignIn)
    }

    const handleBtnClick = () => {
        // useref is giving value for email, pass (try to print it)
        const message = validateData(email.current.value, password.current.value);
        seterrorMessage(message)
        // if there is any error then return otherwise authenticate the user
        if (message) {
            return;
        }
        // Signin / Sign up
        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage);
                    // ..
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage("User not found. Please check your credentials!")
                });
        }
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
                    <form className='py-14 px-20 text-left flex flex-col gap-4' onSubmit={(e) => e.preventDefault()}>

                        <h1 className=' text-4xl font-semibold pb-8'>{isSignIn ? "Sign In" : "Sign Out"}</h1>
                        {!isSignIn && <input placeholder='Full Name' className='p-4  outline-none bg-neutral-800 rounded' />}
                        <input ref={email} placeholder='Email or phone number' className='p-4  outline-none bg-neutral-800 rounded' />

                        <input ref={password} placeholder='Password' className='p-4 outline-none bg-neutral-800 rounded' />

                        <p className='text-orange-400'>{errorMessage}</p>

                        <button className='bg-red-700 text-xl font-semibold     text-center py-3 rounded-md'
                            onClick={() => handleBtnClick()}
                        >{isSignIn ? "Sign In" : "Sign out"}</button>

                        <p className='py-2 cursor-pointer font-medium ' onClick={() => handleClick()}>{isSignIn ? "New to Netflix? Sign up now." : "Already registered? Sign In"}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
