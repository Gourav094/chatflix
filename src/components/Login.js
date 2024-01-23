import React, { useState, useRef } from 'react'
import Header from './Header'
import { validateData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { Background_url, userIcon } from '../utils/constant';


const Login = () => {
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
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
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
                <img src={Background_url} className='h-screen w-screen object-cover'
                    alt='background' ></img>
            </div>
            <Header />
            <div className='absolute bg-transparent md:w-2/6 mx-auto right-0 left-0 md:my-36 text-white'>
                <div className='md:h-fit h-screen md:pb-24 bg-black bg-opacity-75 rounded-lg'>
                    <form className='pt-[50%] md:py-14 px-20 text-left flex flex-col gap-4' onSubmit={(e) => e.preventDefault()}>

                        <h1 className=' text-4xl font-semibold pb-8'>{isSignIn ? "Sign In" : "Sign Out"}</h1>
                        {!isSignIn && 
                        <input ref={name} placeholder='Full Name' className='p-4  outline-none bg-neutral-800 rounded' />
                        }

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
