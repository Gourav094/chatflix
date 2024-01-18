import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import useTopRatedMovies from '../utils/useTopRatedMovies'
import usePopularMovies from '../utils/usePopularMovies'
import useUpcomingMovies from '../utils/useUpcomingMovie'

const SecondayContainer = () => {
    useTopRatedMovies()
    usePopularMovies()
    useUpcomingMovies()
    const moviesData = useSelector(store => store.movies)
     
    return (
        <div className='pl-12 bg-neutral-900 w-screen '>
            <div className=''>
                <MoviesList title = {"Trending Movie"} movies = {moviesData.PopularMovies}/>
                <MoviesList title = {"Top Rated"} movies = {moviesData.TopRatedMovies}/> 
                <MoviesList title = {"Upcoming"} movies = {moviesData.UpcomingMovie}/> 
            </div>
        </div>
    )
}

export default SecondayContainer
