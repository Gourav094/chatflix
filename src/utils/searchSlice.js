import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        showGptSearch: false,
        showDropDown:false,
        searchMovies:null,
        searchQuery:null
    },
    reducers:{
        toggleGptSearch : (state,action) => {
            state.showGptSearch = !state.showGptSearch
        },
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


export const {toggleGptSearch,toggleDropDown,addSearchMovie,addSearchQuery} = searchSlice.actions

export default searchSlice.reducer