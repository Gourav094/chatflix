import React, { useState } from 'react'
import { IMG_CDN } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { MovieDuration } from '../utils/helper';
import { addLikedMovies, addWatchLater } from '../utils/movieSlice';
import VideoPlayer from "./VideoPlayer"
import useMovieInfoTrailer from '../utils/useMovieInfoTrailer';

const MovieInfo = ({movieData }) => {
    
    const [togglePlay, settogglePlay] = useState(false)
    const dispatch = useDispatch()

    useMovieInfoTrailer()
    const trailer = useSelector(store => store.movies?.MovieInfoTrailer?.key)
    
    const handlePlay = () => {
        settogglePlay(!togglePlay)
    }
    const handlePause = () => {
        settogglePlay(false)
    }

    const handleWatchLater = () => {
        dispatch(addWatchLater(movieData))
    }
    const handleFavourites = () => {
        dispatch(addLikedMovies(movieData))
    }

    const { overview, poster_path, runtime, vote_average, spoken_languages, tagline, genres } = movieData

    return (
        <div className='bg-gradient-to-t from-black h-screen text-gray-50'>
            <img className=' object-cover w-screen h-screen absolute -z-10 opacity-90' src={IMG_CDN + movieData?.poster_path} alt='bg' />
            <div className='absolute md:flex gap-16 p-[8%]'>
                <div className='md:w-1/4'>
                    <img className='rounded-2xl' src={IMG_CDN + poster_path} alt='movie-card' />
                </div>
                <div className='pt-4 md:w-2/4'>
                    <p className='font-semibold text-3xl md:text-6xl pb-5'>{movieData?.title || movieData?.name}</p>
                    <p className='font-medium pb-3 text-xl'>{tagline}</p>
                    <div className='pb-6 flex gap-4 text-lg font-semibold'>
                        <p>{movieData?.release_date || movieData?.first_air_date}</p>
                        {runtime && <p className=''>{MovieDuration(runtime)}</p>}
                        <p>{spoken_languages.length} Languages</p>
                    </div>
                    <div className='pb-3'>
                        {genres && genres.map((genre) => (
                            <button className='mr-2 px-3 py-1 rounded-lg bg-sky-600 text-white'>{genre.name}</button>
                        ))}
                    </div>
                    <div className='flex items-center py-4 gap-10'>
                        <span className='flex items-center cursor-pointer gap-2 text-xl' onClick={handlePlay}>
                            <i className="fa-regular fa-circle-play text-2xl hover:text-red-600"></i>
                            <button className='font-semibold' >Play</button>
                        </span>
                        <span onClick={handleFavourites}><i className="fa-regular fa-heart text-2xl cursor-pointer hover:text-red-600"></i></span>
                        <span onClick={handleWatchLater}><i className="fa-regular fa-bookmark text-xl pl-3 cursor-pointer hover:text-red-600"></i></span>
                    </div>
                    <div className='flex items-center gap-2 py-6'>
                        <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                        <p className='text-lg'>{Math.round(vote_average * 10) / 10}/10</p>
                    </div>
                    <p className='hidden md:inline-block tracking-wide pt-2'>{overview}</p>

                </div>
            </div>
            {togglePlay && (
                <div className="w-full h-screen absolute">
                    <div className="w-full aspect-video px-2 md:w-[50%] z-30 top-[45%] md:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 absolute">
                        <VideoPlayer id={trailer} />
                    </div>
                    <div
                        onClick={handlePause}
                        className="w-full h-screen bg-black bg-opacity-90 z-20 absolute"
                    >
                    </div>  
                </div>
            )}
        </div>
    )
}

export default MovieInfo