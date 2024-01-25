import React from 'react'
import { useSelector } from 'react-redux'
import MovieInfoShimmer from '../utils/MovieInfoShimmer'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'
import Header from './Header'

const LikedMovies = () => {
    const movies = useSelector(store => store.movies.likedMovies)
    console.log(movies)
    if (!movies) return <MovieInfoShimmer />
    return (
        <div className='min-h-screen bg-neutral-800'>
            <Header />
            <div className='pt-32 pl-20 md:px-36'>
                <h1 className=' text-white font-semibold text-2xl'>Favorites</h1>
                <div className='h-full flex flex-wrap gap-6 pt-4'>
                    {movies.map((movie) => <Link key={movie.id} to={"/info/" + movie?.id}><MovieCard poster_path={movie.poster_path} title={movie.title || movie.name} rating={movie.vote_average} /></Link>
                    )}
                    {/* <MovieCard poster_path={movie.poster_path} title={movie.title || movie.name} rating={movie.vote_average} /> */}
                </div>
            </div>
        </div>
    )
}

export default LikedMovies