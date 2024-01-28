import React, { useState, useRef } from 'react'
import Header from './Header'
import { validateData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { Background_url, userIcon } from '../utils/constant';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const [loading,setloading] = useState(false)
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const dispatch = useDispatch()
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
        setloading(true)
        // Signin / Sign up
        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // while sign out update user name
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: userIcon
                    }).then(() => {

                        const { uid, email, displayName, photoURL } = auth?.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                        toast.success('Welcome to Chatflix!')
                    }).catch((error) => {
                        seterrorMessage(error.message)
                    });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage);
                    // ..
                })
                .finally(() => setloading(false))
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    toast.success('Signed in Successfully')
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage("User not found. Please check your credentials!")
                })
                .finally(() => setloading(false))
        }
        
    }

    return (
        <div className='h-full'>
            <div className='absolute h-full'>
                <img src={Background_url} className='h-screen w-screen object-cover'
                    alt='background' ></img>
            </div>
            <Header />
            <Toaster />
            <div className='absolute bg-transparent md:w-2/6 mx-auto right-0 left-0 md:my-36 text-white'>
                <div className='md:h-fit h-screen md:pb-24 bg-black bg-opacity-75 rounded-lg'>
                    <form className='pt-[50%] md:py-14 px-20 text-left flex flex-col gap-4' onSubmit={(e) => e.preventDefault()}>

                        <h1 className=' text-4xl font-semibold pb-8'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                        {!isSignIn &&
                            <input ref={name} placeholder='Full Name' className='p-4  outline-none bg-neutral-800 rounded' />
                        }

                        <input ref={email} placeholder='Email or phone number' className='p-4  outline-none bg-neutral-800 rounded' />

                        <input ref={password} placeholder='Password' className='p-4 outline-none bg-neutral-800 rounded' />

                        <p className='text-orange-400'>{errorMessage}</p>

                        <button className='bg-red-700 text-xl font-semibold text-center py-3 rounded-md'
                            onClick={() => handleBtnClick()}
                        >

                            {isSignIn ? (
                                <span className='flex items-center justify-center gap-3'>
                                    {loading && <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>}
                                    Sign In
                                </span>
                            ) : (
                                <span className='flex items-center justify-center gap-3'>
                                    {loading && <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>}
                                    Sign Up
                                </span>
                            )}
                        </button>

                        <p className='py-2 font-medium ' onClick={() => handleClick()}>
                            {isSignIn ? (<span className='text-gray-400'>New to Netflix? <span className='cursor-pointer text-white hover:border-b-2'> Sign up now.</span></span>) : (<span className='text-gray-400'>Already registered? <span className='cursor-pointer text-white hover:border-b-2'> Sign in</span></span>)}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
