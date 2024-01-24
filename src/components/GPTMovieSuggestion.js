import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'
const GPTMovieSuggestion = () => {
    const movies = useSelector(store => store.search.searchMovies)
    const query = useSelector(store => store.search.searchQuery)
    if(!movies)return
    return (
        <div className='ml-20 md:mx-36 min-h-screen'>
            {query && <div className='text-white text-lg py-2 md:pl-[18%]'>search result for: <span className='pl-2 font-semibold'>{query}</span></div>}

            {query && movies.length === 0 && (
                <h1 className='md:pl-[18%] text-yellow-600 font-semibold text-lg'>Result not found! Please check spelling</h1> )}
            
            <div className='h-full flex flex-wrap gap-6 pt-4'>
                {movies.map((movie) =>  <Link key ={movie.id} to={"/info/"+ movie?.id}><MovieCard poster_path={movie.poster_path} title={movie.title || movie.name} rating={movie.vote_average} /></Link>
                )}
            </div>

        </div>
    )
}

export default GPTMovieSuggestion