import { useEffect } from "react"
import { API_Options } from "../utils/constant"
import { addMovieInfoTrailer } from "../utils/movieSlice"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

const useMovieInfoTrailer = () => {
    const dispatch = useDispatch()
    const movieId = useParams()?.movieId
    
    useEffect(() => {
        getMovieTrailer()
    }, [movieId])

    const getMovieTrailer = async () => {
        const [data,tvShow] = await Promise.all([fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_Options),fetch(`https://api.themoviedb.org/3/tv/${movieId}/videos?language=en-US`, API_Options)])

        const movieData = await data.json();
        const tvData = await tvShow.json();

        const filterMovie = movieData?.results?.filter(movie => movie?.type === "Trailer")
        const filterTv = tvData?.results?.filter(tv => tv?.type === "Trailer")
    
        const trailer = (filterMovie && filterMovie.length) ? filterMovie[0] : (filterTv?.length && filterTv[0])
        dispatch(addMovieInfoTrailer(trailer))
    }

}

export default useMovieInfoTrailer