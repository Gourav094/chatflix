import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        showGptSearch: false,
        showDropDown:false,
    },
    reducers:{
        toggleGptSearch : (state,action) => {
            state.showGptSearch = !state.showGptSearch
        },
        toggleDropDown:(state) => {
            state.showDropDown = !state.showDropDown
        }
    }
})


export const {toggleGptSearch,toggleDropDown} = searchSlice.actions

export default searchSlice.reducer