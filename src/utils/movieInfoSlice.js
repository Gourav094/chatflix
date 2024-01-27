import { createSlice } from "@reduxjs/toolkit";

const movieInfoSlice = createSlice({
    name:'movieInfo',
    initialState:{
        movieData:null,
        movieCast:null,
        ClickedMovie:null,
    },
    reducers:{
        addMovie:(state,action) => {
            state.movieData = action.payload
        },
        addCast:(state,action) => {
            state.movieCast = action.payload
        },
        addClickedMovie:(state,action) => {
            state.ClickedMovie = action.payload
        }
    }
})

export const {addMovie,addCast,addClickedMovie} = movieInfoSlice.actions

export default movieInfoSlice.reducer