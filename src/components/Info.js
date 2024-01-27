import React from 'react'
import {  IMG_CDN } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { MovieDuration } from '../utils/helper';
import MovieCast from './MovieCast';
import MovieSuggestion from './MovieSuggestion';
import { useParams } from 'react-router-dom';
import useMovieInfo from '../utils/useMovieInfo';
import MovieInfoShimmer from '../utils/MovieInfoShimmer';
import { addLikedMovies, addWatchLater } from '../utils/movieSlice';
import Header from './Header';
import {Toaster} from 'react-hot-toast';
import TvShowSuggestion from './TvShowSuggestion';

const Info = () => {
    const dispatch = useDispatch() 

    const id = useParams()?.movieId
    const movieId = id

    useMovieInfo(movieId)
    const movieData = useSelector(store => store.movieInfo.movieData)
    if (!movieData) return <MovieInfoShimmer/>

    const handleWatchLater = () => {
        dispatch(addWatchLater(movieData))
    }
    const handleFavourites = () => {
        dispatch(addLikedMovies(movieData))
    }

    const { overview, poster_path, runtime, vote_average, spoken_languages,tagline, genres} = movieData
    
    return movieId != movieData?.id ? (<MovieInfoShimmer/>):(
        <div className=' relative'>
            {/* Toaster can be added anywhere in the code */}
            <Toaster/> 
            <Header/>
            <img className=' object-cover w-screen h-screen absolute -z-10 opacity-90' src={IMG_CDN+poster_path} alt='bg'/>
            <div className='bg-gradient-to-t from-black h-screen md:flex gap-16 p-[8%] text-gray-50'>
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
                        <span className='flex items-center cursor-pointer gap-2 text-xl'>
                            <i className="fa-regular fa-circle-play text-2xl"></i>
                            <p className='font-semibold'>Play</p>
                        </span>
                        <span onClick={handleFavourites}><i className="fa-regular fa-heart text-2xl cursor-pointer"></i></span>
                        <span onClick={handleWatchLater}><i className="fa-regular fa-bookmark text-xl pl-3 cursor-pointer"></i></span>
                    </div>
                    <div className='flex items-center gap-2 py-6'>
                        <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                        <p className='text-lg'>{Math.round(vote_average * 10) / 10}/10</p>
                    </div>
                    <p className='hidden md:inline-block tracking-wide pt-2'>{overview}</p>

                </div>
            </div>
            <div className='py-10 px-24 text-white bg-neutral-900'>
                <MovieCast movieId={movieId}/>
                <MovieSuggestion movieId = {movieId}/>
                <TvShowSuggestion movieId = {movieId}/>
            </div>

        </div>
    )
}

export default Info