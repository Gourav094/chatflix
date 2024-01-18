import React, { useEffect } from 'react'
import { Logo, userIcon } from '../utils/constant'
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from "../utils/userSlice"

const Header = () => {
    const navigate = useNavigate()
    const user = useSelector(store => store.user)

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {})
        .catch((error) => {
            navigate('/error')
        });
    }

    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName ,photoURL} = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL}))
                navigate('/browse')
            } else {
                dispatch(removeUser())
                navigate('/')
            }
        });

        return () => unsubscribe();
    }, [])

    return (
        <div className='absolute px-8 py-2 w-full bg-gradient-to-b  from-black flex justify-between items-center'>
            <img className='w-52' src={Logo} alt="logo" />
           {auth.currentUser && (<div className='flex gap-2 p-2'>
                <img className='rounded-3xl h-12 w-12' src={userIcon} alt='user' />
                <button className='font-bold pointer text-white' onClick={() => handleSignOut()}>Sign Out</button>
            </div>)}
        </div>
    ) 
}

export default Header
