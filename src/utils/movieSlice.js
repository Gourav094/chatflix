import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        PopularMovies:null,
        videoTrailer:null,
    },
    reducers:{
        addPopularMovie: (state,action) => {
            state.PopularMovies = action.payload
        },
        addVideoTrailer:(state,action) => {
            state.videoTrailer = action.payload
        }
    }
})

export const {addPopularMovie,addVideoTrailer}  = movieSlice.actions

export default movieSlice.reducer