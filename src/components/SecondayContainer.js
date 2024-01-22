import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
// import usePopularMovies from '../utils/usePopularMovies'


const SecondayContainer = () => {
    
    // usePopularMovies()
    const moviesData = useSelector(store => store.movies)
     
    return (
        <div className='pl-12 pb-8 bg-neutral-900 w-screen '>
            <div className=''>
                <MoviesList title = {"Now Playing Movies"} movies = {moviesData.NowPlayingMovie}/>
                <MoviesList title = {"Top Rated Movies"} movies = {moviesData.TopRatedMovies}/> 
                <MoviesList title = {"Upcoming Movies"} movies = {moviesData.UpcomingMovie}/> 
                <MoviesList title = {"Trending Movies"} movies = {moviesData.PopularMovies}/>
                <MoviesList title = {"Trending Tv Shows"} movies = {moviesData.TrendingTvShow}/>
            </div>
        </div>
    )
}

export default SecondayContainer
