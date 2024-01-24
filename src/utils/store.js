import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import searchSlice from "./searchSlice";
import movieInfoSlice from "./movieInfoSlice"

const appStore = configureStore({
    reducer:{
        user : userSlice,
        movies:movieSlice,
        search:searchSlice,
        movieInfo:movieInfoSlice,
    }
})
export default appStore;