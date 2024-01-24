import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_Options, IMG_CDN } from '../utils/constant'
import { addCast } from '../utils/movieInfoSlice'

const MovieCast = ({movieId}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        getMovieCast();
    }, [movieId])

    const getMovieCast = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, API_Options);
        const json = await data.json()
        dispatch(addCast(json))
    }
    const castData = useSelector(store => store.movieInfo.movieCast)
    // const {profile_path,name} = castData?.cast[0]
    return (
        <div>
            <p className='text-2xl pb-4 font-medium'>Cast</p>
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex gap-4'>
                    {
                        castData?.cast.map((cast) => (
                            cast.profile_path && <div className='w-40' key={cast?.id}>
                                <img className='h-52 w-[150px] rounded-lg' src={IMG_CDN + cast.profile_path} alt='cast' />
                                <p className='py-2 px-1 text-lg'>{cast.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieCast