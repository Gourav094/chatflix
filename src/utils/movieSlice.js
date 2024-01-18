import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        PopularMovies:null,
        TopRatedMovies:null,
        UpcomingMovie:null,
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
        }
    }
})

export const {addPopularMovie,addVideoTrailer,addTopRatedMovie,addUpcomingMovie}  = movieSlice.actions

export default movieSlice.reducer