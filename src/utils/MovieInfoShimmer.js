import React from 'react'

const MovieInfoShimmer = () => {
    return (
        <div className='flex space-x-4 gap-16 p-[8%] bg-neutral-800 h-screen'>
            <div className='w-1/4 animate-pulse  bg-neutral-700 rounded-lg'> 
            </div>
            <div className='flex animate-pulse flex-col gap-16 py-16 w-1/3'>
                <div className='h-12 rounded-lg w-full bg-neutral-700'></div>
                <div className='h-4 rounded-md w-96 bg-neutral-700'></div>
                <div className='h-4 rounded-md w-96 bg-neutral-700'></div>
                <div className='h-4 rounded-md w-96 bg-neutral-700'></div>
            </div>
        </div>
    )
}

export default MovieInfoShimmer