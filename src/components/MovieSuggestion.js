import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_Options } from '../utils/constant'
import { addRecommendedMovies } from '../utils/movieSlice'
import MoviesList from './MoviesList'

const MovieSuggestion = ({movieId}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        getRecommendations()
        window.scrollTo(0,0)
    },[movieId])

    const getRecommendations = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`, API_Options)
        const json = await data.json()
        dispatch(addRecommendedMovies(json))
    }

    const Recommendations = useSelector(store => store?.movies?.RecommendedMovies)
    return (
        Recommendations?.results && <div className='py-4'>
            <MoviesList title={'Recommended Movies'} movies={Recommendations?.results}/>
        </div>
    )
}

export default MovieSuggestion