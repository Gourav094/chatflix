import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { IMG_CDN } from '../utils/constant'
import 'react-circular-progressbar/dist/styles.css';

const MovieCard = ({ poster_path, title, rating,showDelete=false,onRemove }) => {

    const handleRemove = (e) => {
        e.preventDefault()
        onRemove()
    }

    if (!poster_path) return
    return (
        <div className='w-64 md:w-56 cursor-pointer relative'>
            <img className='rounded-lg w-64 md:w-56 md:h-[330px] transition duration-200 hover:scale-105 hover:duration-200' src={IMG_CDN + poster_path} alt='moviecard'
            />
            {rating !== 0 && <div className="absolute left-2 bottom-10 text-6xl h-10 w-10 bg-slate-800  rounded-full">
                <CircularProgressbar value={Math.round(rating * 10) / 10} maxValue={10} text={`${Math.round(rating * 10) / 10}`}
                    styles={buildStyles({ textColor: '#c5d9ed', textSize: '38px' })}
                />
            </div>}
            <div className='flex items-center justify-between'>
            <p className='text-lg text-gray-300 font-semibold pt-2 pl-3 truncate'>{title}</p>
            {showDelete && <i className="fa-regular fa-trash-can text-red-600 pt-2 text-lg font-semibold hover:text-gray-700" onClick={(e) => handleRemove(e)}></i>}
            </div>
        </div>
    )
}

export default MovieCard