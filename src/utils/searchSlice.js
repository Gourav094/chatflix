import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        showDropDown:false,
        searchMovies:null,
        searchQuery:null
    },
    reducers:{
        toggleDropDown:(state) => {
            state.showDropDown = !state.showDropDown
        },
        addSearchMovie:(state,action) =>{
            state.searchMovies = action.payload
        },
        addSearchQuery:(state,action)=>{
            state.searchQuery = action.payload
        }
    }
})


export const {toggleDropDown,addSearchMovie,addSearchQuery} = searchSlice.actions

export default searchSlice.reducer