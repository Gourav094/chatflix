import { useEffect, useState } from "react"
import { API_Options } from "../utils/constant"
import { addVideoTrailer } from "../utils/movieSlice"
import { useDispatch, useSelector } from "react-redux"

const useVideoTrailer = (movieId) => {
    const dispatch = useDispatch()
    const videoTrailer = useSelector(store => store.movies.videoTrailer)
    useEffect(() => {
        !videoTrailer && getMovieTrailer()
    }, [movieId])

    const getMovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_Options)
        const json = await data.json();

        const filterData = json.results.filter(video => video?.type === "Trailer")
        //we are checking trailer exists or not. if not exist lets take any treaser
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addVideoTrailer(trailer))
    }

}

export default useVideoTrailer