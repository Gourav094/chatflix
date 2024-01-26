import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_Options } from '../utils/constant'
import { addRecommendedMovies } from '../utils/movieSlice'
import MoviesList from './MoviesList'

const MovieSuggestion = ({ movieId }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        getRecommendations()
        window.scrollTo(0, 0)
    }, [movieId])

    const getRecommendations = async () => {

        const [movieData, tvData] = await Promise.all([fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`, API_Options), fetch(`https://api.themoviedb.org/3/tv/${movieId}/recommendations?language=en-US&page=1`, API_Options)])
        const movie = await movieData.json()
        const tvShow = await tvData.json()
        if (movie?.results !== undefined) {
            dispatch(addRecommendedMovies(movie))
        }
        else dispatch(addRecommendedMovies(tvShow))
    }

    const Recommendations = useSelector(store => store?.movies?.RecommendedMovies)
    if (!Recommendations?.results) return
    return (
        Recommendations?.results.length !== 0 && <div className='py-4'>
            <MoviesList title={'Recommended Movies'} movies={Recommendations?.results} />
        </div>
    )
}

export default MovieSuggestion