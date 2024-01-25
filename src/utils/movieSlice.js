import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        PopularMovies: null,
        TopRatedMovies: null,
        UpcomingMovie: null,
        TrendingTvShow: null,
        NowPlayingMovie: null,
        videoTrailer: null,
        RecommendedMovies: null,
        watchLater: [],
        likedMovies: [],
    },
    reducers: {
        addPopularMovie: (state, action) => {
            state.PopularMovies = action.payload
        },
        addVideoTrailer: (state, action) => {
            state.videoTrailer = action.payload
        },
        addTopRatedMovie: (state, action) => {
            state.TopRatedMovies = action.payload
        },
        addUpcomingMovie: (state, action) => {
            state.UpcomingMovie = action.payload
        },
        addNowPlayingMovie: (state, action) => {
            state.NowPlayingMovie = action.payload
        },
        addTrendingTvShow: (state, action) => {
            state.TrendingTvShow = action.payload
        },
        addRecommendedMovies: (state, action) => {
            state.RecommendedMovies = action.payload
        },
        addWatchLater: (state, action) => {
            const check = state.watchLater?.some((movie) => movie?.id === action.payload?.id)
            if(check){
                toast.error('Already added')
            }
            else{
                toast.success('Successfully added to watch later')
                state.watchLater.push(action.payload)
            }
        },
        removeWatchLater: (state, action) => {
            toast.success('Succesfully removed')
            state.watchLater = state.watchLater.filter((movie) =>
                movie?.id !== action.payload
            )
        },
        addLikedMovies: (state, action) => {
            const check = state.likedMovies?.some((movie) => movie?.id === action.payload?.id)
            if(check){
                toast.error('Already added')
            }
            else{
                toast.success('Successfully added to liked')
                state.likedMovies.push(action.payload)
            }
        },
        removeLikedMovies: (state, action) => {
            toast.success('Succesfully removed')
            state.likedMovies = state.likedMovies.filter((movie) =>
                movie?.id !== action.payload
            )
        }
    }
})

export const { addLikedMovies, addWatchLater, addPopularMovie, addVideoTrailer, addTopRatedMovie, addUpcomingMovie, addNowPlayingMovie, addTrendingTvShow, addRecommendedMovies } = movieSlice.actions

export default movieSlice.reducer