import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        PopularMovies:null,
        TopRatedMovies:null,
        UpcomingMovie:null,
        TrendingTvShow:null,
        NowPlayingMovie:null,
        videoTrailer:null,
    },
    reducers:{
        addPopularMovie: (state,action) => {
            state.PopularMovies = action.payload
        },
        addVideoTrailer:(state,action) => {
            state.videoTrailer = action.payload
        },
        addTopRatedMovie:(state,action) => {
            state.TopRatedMovies = action.payload
        },
        addUpcomingMovie:(state,action) => {
            state.UpcomingMovie = action.payload
        },
        addNowPlayingMovie:(state,action) => {
            state.NowPlayingMovie = action.payload
        },
        addTrendingTvShow:(state,action) =>{
            state.TrendingTvShow = action.payload
        }
    }
})

export const {addPopularMovie,addVideoTrailer,addTopRatedMovie,addUpcomingMovie,addNowPlayingMovie,addTrendingTvShow}  = movieSlice.actions

export default movieSlice.reducer