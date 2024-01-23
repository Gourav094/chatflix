import { API_Options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovie } from '../utils/movieSlice'
import { useEffect } from 'react';

const usePopularMovies = () => {

    const dispatch = useDispatch()
    const PopularMovies = useSelector(store => store.movies.PopularMovies)
    useEffect(() => {
        !PopularMovies && getPopularMovies();
    }, [])

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_Options)
        const json = await data.json();
        dispatch(addPopularMovie(json.results))
    }
}

export default usePopularMovies