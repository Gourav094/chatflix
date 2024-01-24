import React, { useEffect } from 'react'
import { API_Options, IMG_CDN } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addMovie } from '../utils/movieInfoSlice';
import { MovieDuration } from '../utils/helper';
import MovieCast from './MovieCast';
import MovieSuggestion from './MovieSuggestion';
import { useParams } from 'react-router-dom';
import useMovieInfo from '../utils/useMovieInfo';
import MovieInfoShimmer from '../utils/MovieInfoShimmer';

const Info = () => {
    const id = useParams()?.movieId
    const movieId = id
    useMovieInfo(movieId)


    const movieData = useSelector(store => store.movieInfo.movieData)
    if (!movieData) return <MovieInfoShimmer/>
    const { title, overview, poster_path, release_date, runtime, status, vote_average, spoken_languages,tagline, genres} = movieData
    
    return movieId != movieData?.id ? (<MovieInfoShimmer/>):(
        <div className=' relative'>
            <img className=' object-cover w-screen h-screen absolute -z-10 opacity-90' src={IMG_CDN+poster_path} alt='bg'/>
            <div className='bg-gradient-to-br from-black h-screen flex gap-16 p-[8%] text-gray-50'>
                <div className='w-1/4'>
                    <img className='rounded-2xl' src={IMG_CDN + poster_path} alt='movie-card' />
                </div>
                <div className='pt-4 w-2/4'>
                    <p className='font-semibold text-6xl pb-4'>{title}</p>
                    <p className='font-medium pb-2 text-xl'>{tagline}</p>
                    <div className='pb-4 flex gap-4 text-lg font-semibold'>
                        <p>{release_date}</p>
                        <p className=''>{MovieDuration(runtime)}</p>
                        <p>{spoken_languages.length} languages</p>
                    </div>
                    <div className='pb-6'>
                        {genres.map((genre) => (
                            <button className='mr-2 px-3 py-1 rounded-lg bg-sky-600 text-white'>{genre.name}</button>
                        ))}
                    </div>
                    <div>
                        <p className='text-lg'>{Math.round(vote_average * 10) / 10}/10</p>
                    </div>
                    <p className='tracking-wide pt-6'>{overview}</p>

                </div>
            </div>
            <div className='py-10 px-24 text-white bg-neutral-900'>
                <MovieCast movieId={movieId}/>
                <MovieSuggestion movieId = {movieId}/>
            </div>

        </div>
    )
}

export default Info