import { createSlice } from "@reduxjs/toolkit";

const movieInfoSlice = createSlice({
    name:'movieInfo',
    initialState:{
        movieData:null,
        movieCast:null,
    },
    reducers:{
        addMovie:(state,action) => {
            state.movieData = action.payload
        },
        addCast:(state,action) => {
            state.movieCast = action.payload
        }
    }
})

export const {addMovie,addCast} = movieInfoSlice.actions

export default movieInfoSlice.reducer