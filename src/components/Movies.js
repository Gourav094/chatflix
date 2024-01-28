import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"
import { Link } from "react-router-dom"
import MovieCard from './MovieCard'
import usePopularMovies from "../utils/usePopularMovies"
import MovieInfoShimmer from '../utils/MovieInfoShimmer'
import {addClickedMovie} from '../utils/movieInfoSlice'
const Movies = () => {
    usePopularMovies()
    const dispatch = useDispatch()
    const movies = useSelector(store => store.movies.PopularMovies)

    const handleMovieClick = (movie) => {
        dispatch(addClickedMovie(movie))
    }

    if (!movies) return <MovieInfoShimmer/>
    return (
        <div className='min-h-screen bg-neutral-800'>
            <Header />
            <div className='pt-32 pl-20 md:px-36 text-white'>
                <h1 className='text-3xl font-semibold border-b pb-1'>Popular Movies</h1>
                <div className='flex flex-wrap gap-10 py-10'>
                    {movies.map((movie) => <Link key={movie.id} to={"/info/" + movie?.id}>
                        <div onClick={() => handleMovieClick(movie)}>
                            <MovieCard poster_path={movie.poster_path} title={movie.name} rating={movie.vote_average} />
                        </div></Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Movies