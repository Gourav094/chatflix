import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MoviesList = ({ title, movies }) => {
    if(!movies)return
    return (
        <div className='pb-6'>
            <h1 className='text-white text-2xl font-semibold py-6'>{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex gap-4 '>
                {movies.map((movie) => <Link key ={movie.id} to={"/info/"+ movie?.id}> <MovieCard  rating = {movie.vote_average} title = {movie.title}  poster_path={movie.poster_path} /> </Link>)}
                </div>
            </div>
        </div>
    )
}

export default MoviesList