import React, { useEffect } from 'react'
import { Logo, userIcon } from '../utils/constant'
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from "../utils/userSlice"
import { toggleGptSearch } from '../utils/searchSlice';

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const showGPT = useSelector(store => store.search.showGptSearch)

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                navigate('/error')
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate('/browse')
            } else {
                dispatch(removeUser())
                navigate('/')
            }
        });

        return () => unsubscribe();
    }, [])

    const handleSearchClick = () => {
        dispatch(toggleGptSearch())
    }

    return (
        <div className='absolute z-10 px-8 py-2 w-full bg-gradient-to-b from-black flex justify-between items-center'>
            <img className='w-52' src={Logo} alt="logo" />
            {auth.currentUser && (
                <div className='flex items-center gap-2'>
                    <div>
                        <button className='py-2 px-4 rounded hover:opacity-90 bg-purple-600 text-white font-semibold'
                            onClick={() => handleSearchClick()}
                         >{!showGPT ? "GPT Search":"Home Page"}</button>
                    </div>
                    <div className='flex gap-2 p-2'>
                        <img className='rounded-3xl h-12 w-12' src={userIcon} alt='user' />
                        <button className='font-bold pointer text-white' onClick={() => handleSignOut()}>Sign Out</button>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Header
