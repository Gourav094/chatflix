import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_Options } from './constant'
import {addTopRatedMovie} from "../utils/movieSlice"
const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    const TopRatedMovies = useSelector(store => store.movies.TopRatedMovies)
    useEffect(() => {
        !TopRatedMovies && getTopRatedMovies();
    })
    const getTopRatedMovies = async() => {
        const data =await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_Options)
        const json =await data.json();
        dispatch(addTopRatedMovie(json.results))
    }

}

export default useTopRatedMovies