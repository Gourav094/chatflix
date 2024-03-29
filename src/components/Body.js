import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Info from './Info'
import WatchLater from './WatchLater'
import LikedMovies from './LikedMovies'
import Search from './Search'
import TvShow from './TvShow'
import Movies from './Movies'


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/search",
            element: <Search />
        },
        {
            path:"/info/:movieId",
            element:<Info/>
        },
        {
            path:"/watchlater",
            element:<WatchLater/>
        },
        {
            path:"/tvShow",
            element:<TvShow/>
        },
        {
            path:"/movies",
            element:<Movies/>
        },
        {
            path:'/favorites',
            element:<LikedMovies/>
        }
    ])


    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body
