import { useEffect } from 'react'
import { API_Options} from '../utils/constant'
import { useDispatch, useSelector} from 'react-redux'
import { addMovie } from '../utils/movieInfoSlice';

const useMovieInfo = (movieId) => {
    const dispatch = useDispatch();
    const ClickedMovie = useSelector(store => store.movieInfo.ClickedMovie)

    ClickedMovie && localStorage.setItem('ClickedMovie', JSON.stringify(ClickedMovie));

    useEffect(() => {
        getMovieDetails()
    }, [movieId])
   
    const getMovieDetails = async () => {
        const ClickedMovieInfo = JSON.parse(localStorage.getItem('ClickedMovie'));

        const [movieData,tvData] = await Promise.all([fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_Options),fetch(`https://api.themoviedb.org/3/tv/${movieId}?language=en-US`, API_Options)])
        const movie = await movieData.json()
        const tvShow = await tvData.json()
        

        if(movie && movie?.success !== false && (ClickedMovieInfo?.name === movie?.name || ClickedMovieInfo?.title === movie?.title)){
            dispatch(addMovie(movie))
        }

        else dispatch(addMovie(tvShow))
        localStorage.setItem('ClickedMovieInfo', JSON.stringify(ClickedMovieInfo));
    }

}

export default useMovieInfo