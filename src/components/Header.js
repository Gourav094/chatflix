import React, { useEffect } from 'react'
import { Logo, userIcon } from '../utils/constant'
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from "../utils/userSlice"
import { toggleDropDown} from '../utils/searchSlice';
import avatarMan from '../assets/avatar-man.gif';

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const showDropDown = useSelector(store => store.search.showDropDown)

    const handleDropDown = (e) => {
        e.stopPropagation();
        dispatch(toggleDropDown())
    }

    const handleDocumentClick = () => {
        dispatch(toggleDropDown())
    }

    useEffect(() => {
        if (showDropDown) {
            document.addEventListener('click', handleDocumentClick)
        }
        else {
            document.removeEventListener('click', handleDocumentClick)
        }
        return () => document.removeEventListener('click', handleDocumentClick)
    }, [showDropDown])

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
                if(window.location.pathname === '/'){
                    navigate('/browse')
                }
            } else {
                dispatch(removeUser())
                navigate('/')
            }
        });

        return () => unsubscribe();
    }, [])

    
    return (
        <div className='absolute z-10 md:px-8 py-2 w-full bg-gradient-to-b from-neutral-900 flex justify-between items-center pr-2 '>
            <div className='flex items-center gap-4'>
                <Link to={'/browse'}>
                <img className='w-32 md:w-52' src={Logo} alt="logo" />
                </Link>
                <div className='text-gray-100 font-medium opacity-0 md:opacity-100'>
                    <ul className='flex gap-4'>
                    <Link to={'/browse'}><li className='hover:border-red-600 scroll-smooth border-transparent border-b-2 cursor-pointer py-1 border-red-600'>Home</li></Link>
                    <Link to={'/tvShow'}><li className='hover:border-red-600 scroll-smooth border-transparent border-b-2 cursor-pointer py-1 border-red-600'>TV Shows</li></Link>
                    <Link to={'/movies'}><li className='hover:border-red-600 scroll-smooth border-transparent border-b-2 cursor-pointer py-1 border-red-600'>Movies</li></Link>
                    </ul>
                </div>
            </div>
            {user && (
                <div className='flex items-center gap-2 md:gap-6'>
                    <div>
                        <Link to={'/search'}><button className='py-1 md:py-2 px-2 md:px-4 rounded hover:opacity-90 bg-purple-600 text-white font-semibold'>Search</button></Link>
                    </div>
                    <div className=' relative inline-block'>
                        <div className='bg-cyan-800 text-gray-50 text-xl w-11 h-11 rounded-full py-2 px-4 cursor-pointer text-center' onClick={(e) => handleDropDown(e)}>{user?.displayName?.[0]}</div>
                        {!user?.displayName && <img className='rounded-3xl w-12 cursor-pointer' src={userIcon} alt='user' onClick={(e) => handleDropDown(e)} />}
                        {showDropDown && <div className="absolute right-0 mt-3 w-48 bg-white border shadow-lg rounded-t-lg">
                            <div className="pt-1">
                                <span className="flex items-center px-4 py-2 font-medium border-b text-gray-800">
                                    <img alt='user' src={avatarMan} className='w-9 h-8' />
                                    Hello, {user?.displayName}
                                </span>
                                <Link to={'/watchlater'}> <button className="block w-full border-b text-left px-4 py-3 text-gray-800 hover:bg-gray-100">
                                    Watch Later
                                </button></Link>
                                <Link to={'/favorites'}><button className="block w-full border-b text-left px-4 py-3 text-gray-800 hover:bg-gray-100">
                                    Favourites
                                </button></Link>
                                <button
                                    className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 " onClick={() => handleSignOut()}
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header


