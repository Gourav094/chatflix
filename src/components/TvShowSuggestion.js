import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_Options } from '../utils/constant'
import { addRecommendedTvShow } from '../utils/movieSlice'
import MoviesList from './MoviesList'

const TvShowSuggestion = ({ movieId }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        getRecommendations()
        window.scrollTo(0, 0)
    }, [movieId])

    const getRecommendations = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/tv/${movieId}/recommendations?language=en-US&page=1`, API_Options)
        const tvShow = await data.json()
        dispatch(addRecommendedTvShow(tvShow))
    }

    const Recommendations = useSelector(store => store?.movies?.RecommendedTvShow)
    if (!Recommendations?.results) return
    return (
        Recommendations?.results.length !== 0 && <div className='py-4'>
            <MoviesList title={'Recommended TvShow'} movies={Recommendations?.results} />
        </div>
    )
}

export default TvShowSuggestion