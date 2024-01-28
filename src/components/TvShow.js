import React from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import MovieInfoShimmer from '../utils/MovieInfoShimmer';
import useTrendingTvShow from '../utils/useTrendingTvShow';
import { addClickedMovie } from '../utils/movieInfoSlice';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const TvShow = () => {
    useTrendingTvShow()
    const dispatch = useDispatch()
    const tvShow = useSelector(store => store.movies.TrendingTvShow)

    const handleMovieClick = (movie) => {
        dispatch(addClickedMovie(movie))
    }

    if (!tvShow) return <MovieInfoShimmer />
    return (
        <div className='min-h-screen bg-neutral-800'>
            <Header />
            <div className='pt-32 pl-20 md:px-36 text-white'>
                <h1 className='text-3xl font-semibold border-b pb-1'>Popular Tv Show</h1>
                <div className='flex flex-wrap gap-10 py-10'>
                    {tvShow.map((movie) => <Link key={movie.id} to={"/info/" + movie?.id}>
                        <div onClick={() => handleMovieClick(movie)}>
                            <MovieCard poster_path={movie.poster_path} title={movie.title} rating={movie.vote_average} />
                        </div></Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TvShow