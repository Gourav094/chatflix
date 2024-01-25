import React, { useEffect } from 'react'
import { API_Options} from '../utils/constant'
import { useDispatch} from 'react-redux'
import { addMovie } from '../utils/movieInfoSlice';

const useMovieInfo = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getMovieDetails()
    }, [movieId])

    // const getMovieDetails = async () => {
    //     const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_Options)
    //     const json = await data.json()
    //     dispatch(addMovie(json))
    // }
    const getMovieDetails = async () => {
        const [movieData,tvData] = await Promise.all([fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_Options),fetch(`https://api.themoviedb.org/3/tv/${movieId}?language=en-US`, API_Options)])
        const movie = await movieData.json()
        const tvShow = await tvData.json()
        if(movie?.id !== undefined){
            dispatch(addMovie(movie))
        }
        else dispatch(addMovie(tvShow))
    }

}

export default useMovieInfo