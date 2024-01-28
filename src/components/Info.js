import React from 'react'
import { useSelector } from 'react-redux'
import MovieCast from './MovieCast';
import MovieSuggestion from './MovieSuggestion';
import { useParams } from 'react-router-dom';
import useMovieInfo from '../utils/useMovieInfo';
import MovieInfoShimmer from '../utils/MovieInfoShimmer';
import Header from './Header';
import { Toaster } from 'react-hot-toast';
import TvShowSuggestion from './TvShowSuggestion';
import MovieInfo from './MovieInfo';


const Info = () => {
    const id = useParams()?.movieId
    const movieId = id

    useMovieInfo(movieId)

    const movieData = useSelector(store => store.movieInfo.movieData)
    if (!movieData) return <MovieInfoShimmer />

    return movieId != movieData?.id ? (<MovieInfoShimmer />) : (
        <div className='relative'>
            <Toaster />
            <Header />
            <MovieInfo movieData={movieData}/>
            <div className='py-10 px-24 text-white bg-neutral-900'>
                <MovieCast movieId={movieId} />
                <MovieSuggestion movieId={movieId} />
                <TvShowSuggestion movieId={movieId} />
            </div>
        </div>
    )
}
export default Info