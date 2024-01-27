import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addClickedMovie } from '../utils/movieInfoSlice'

const MoviesList = ({ title, movies }) => {
    const dispatch = useDispatch()
    const handleMovieClick = (movie) => {
        dispatch(addClickedMovie(movie))
    }
    if (!movies) return
    return (
        <div className='pb-6'>
            <h1 className='text-white text-2xl font-semibold py-6'>{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar' >
                <div className='flex gap-4 '>
                    {movies.map((movie) => <Link key={movie.id} to={"/info/" + movie?.id}>
                        <div onClick={() => handleMovieClick(movie)}>
                            <MovieCard rating={movie.vote_average} title={movie.title} poster_path={movie.poster_path} />
                        </div></Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MoviesList