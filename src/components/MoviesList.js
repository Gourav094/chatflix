import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({ title, movies }) => {
    if(!movies)return
    return (
        <div className=''>
            <h1 className='text-white text-2xl font-semibold p-2 '>{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex gap-4'>
                    {movies.map((movie) => <MovieCard key ={movie.id}  poster_path={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MoviesList