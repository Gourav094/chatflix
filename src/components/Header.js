import React from 'react'
import { userIcon } from '../utils/constant'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const user = useSelector(store => store.user)

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            // Sign-out successful.
            navigate('/')
            
        }).catch((error) => {
            // An error happened.
            navigate('/error')
        });
    }

    return (
        <div className='absolute px-8 py-2 w-full bg-gradient-to-b  from-black flex justify-between items-center'>
            <img className='w-52' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
           {user && (<div className='flex gap-2 p-2'>
                <img className='rounded-3xl h-12 w-12' src={userIcon} alt='user' />
                <button className='font-bold pointer text-white' onClick={() => handleSignOut()}>Sign Out</button>
            </div>)}
        </div>
    )
}

export default Header
