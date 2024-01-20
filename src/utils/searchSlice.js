import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        showGptSearch: false
    },
    reducers:{
        toggleGptSearch : (state,action) => {
            state.showGptSearch = !state.showGptSearch
        },
    }
})

export const {toggleGptSearch} = searchSlice.actions

export default searchSlice.reducer