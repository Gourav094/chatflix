import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import usePopularMovies from '../utils/usePopularMovies'


const MainContainer = () => {
    const movies = useSelector(store => store.movies?.PopularMovies)
    // early return to save from error
    if(!movies)return 
    const mainMovie = movies?.[1]
    const {original_title,overview,id} = mainMovie

    return (
        <div>
            <VideoTitle title = {original_title} overview = {overview}/>
            <VideoBackground movieId = {id}/>
        </div>
    )
}

export default MainContainer
