import { API_Options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovie } from '../utils/movieSlice'
import { useEffect } from 'react';

const usePopularMovies = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        getPopularMovies();
    }, [])

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_Options)
        const json = await data.json();
        dispatch(addPopularMovie(json.results))
    }
}

export default usePopularMovies