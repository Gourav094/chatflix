import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import searchSlice from "./searchSlice";

const appStore = configureStore({
    reducer:{
        user : userSlice,
        movies:movieSlice,
        search:searchSlice,
    }
})
export default appStore;