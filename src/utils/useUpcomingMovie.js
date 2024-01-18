import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUpcomingMovie } from './movieSlice';
import { API_Options } from './constant';

const useUpcomingMovie = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getUpcomingMovie();
    }, [])

    const getUpcomingMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_Options)
        const json = await data.json();
        console.log(json)
        dispatch(addUpcomingMovie(json.results))
    }
}

export default useUpcomingMovie