import React from 'react'
import { Link } from 'react-router-dom'

const VideoTitle = ({ title, overview,movieId }) => {
    return (
        <div className='w-screen md:h-screen pt-[80%] md:pt-[20%] text-white bg-gradient-to-r from-black px-6 md:px-14  absolute'>
            <h1 className='font-semibold text-2xl md:text-6xl'>{title}</h1>
            <p className='hidden md:inline-block md:w-1/4 text-md py-4 tracking-wide'>{overview}</p>
            <div className='flex gap-2 py-4'>
                <button className='py-2 px-6 bg-white rounded text-black font-semibold hover:bg-opacity-80'>
                    <i className="fa-solid fa-play mr-2"></i>
                    Play
                </button>
                <Link to={"/info/"+ movieId}>
                <button className='py-2 px-5 bg-gray-600 text-white font-bold rounded bg-opacity-45'>
                    <i className="fa-solid fa-info border-2 rounded-2xl text-xs mr-2 py-1 px-2 font-bold"></i>
                    More Info</button></Link>
            </div>
        </div>
    )
}

export default VideoTitle