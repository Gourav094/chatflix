import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({ poster_path }) => {

    return (
        <div className='w-56'>
            <img className='' src={IMG_CDN + poster_path} alt='moviecard'/>
        </div>
    )
}

export default MovieCard