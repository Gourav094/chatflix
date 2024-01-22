import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrendingTvShow } from './movieSlice';
import { API_Options } from './constant';

const useTrendingTvShow = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getTvShow();
    }, [])

    const getTvShow = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', API_Options)
        const json = await data.json();
        dispatch(addTrendingTvShow(json.results))
    }
}

export default useTrendingTvShow