import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieInfoShimmer from '../utils/MovieInfoShimmer'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'
import Header from './Header'
import {removeLikedMovies} from "../utils/movieSlice"
import { Toaster } from 'react-hot-toast'

const LikedMovies = () => {
    const dispatch = useDispatch()

    const movies = useSelector(store => store.movies.likedMovies)
    if (!movies) return <MovieInfoShimmer />
    return (
        <div className='min-h-screen bg-neutral-800'>
            <Toaster/> 
            <Header />
            <div className='pt-32 pl-4 md:px-36'>
                <h1 className=' text-white font-semibold text-2xl border-b pb-1'>Favorites</h1>
                {movies.length > 0 ? (<div className='h-full flex flex-wrap gap-6 pt-4'>
                    {movies.map((movie) => <Link key={movie.id} to={"/info/" + movie?.id}>
                        <MovieCard poster_path={movie.poster_path} title={movie.title || movie.name} rating={movie.vote_average} showDelete={true} 
                            onRemove = {() => dispatch(removeLikedMovies(movie.id))}
                        />
                        </Link>
                    )}
                    {/* <MovieCard poster_path={movie.poster_path} title={movie.title || movie.name} rating={movie.vote_average} /> */}
                </div>) : (
                <h1 className='text-3xl font-semibold text-red-800 md:text-center pt-24'>Please add movies in favourites !!</h1>
                )}
            </div>
        </div>
    )
}

export default LikedMovies