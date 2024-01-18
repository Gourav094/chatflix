import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen h-screen pt-[20%] text-white bg-gradient-to-r from-black px-14 absolute'>
            <h1 className='font-semibold text-6xl'>{title}</h1>
            <p className='w-1/3 text-md py-4 tracking-wide'>{overview}</p>
            <div className='flex gap-2 py-2'>
                <button className='py-2 px-6 bg-white rounded text-black font-semibold hover:bg-opacity-80'>
                    <i className="fa-solid fa-play mr-2"></i>
                    Play
                </button>
                <button className='py-2 px-5 bg-gray-600 text-white font-bold rounded bg-opacity-45'>
                    <i className="fa-solid fa-info border-2 rounded-2xl text-xs mr-2 py-1 px-2 font-bold"></i>
                    More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle