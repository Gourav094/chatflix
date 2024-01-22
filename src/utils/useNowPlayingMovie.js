import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovie } from './movieSlice';
import { API_Options } from './constant';

const useNowPlayingMovie = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getNowPlaying();
    }, [])

    const getNowPlaying = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_Options)
        const json = await data.json();
        dispatch(addNowPlayingMovie(json.results))
    }
}

export default useNowPlayingMovie