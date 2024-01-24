import React, { useEffect } from 'react'
import { API_Options} from '../utils/constant'
import { useDispatch} from 'react-redux'
import { addMovie } from '../utils/movieInfoSlice';

const useMovieInfo = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getMovieDetails()
    }, [movieId])

    const getMovieDetails = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_Options)
        const json = await data.json()
        dispatch(addMovie(json))
    }

}

export default useMovieInfo