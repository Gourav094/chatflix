import Header from './Header'
import usePopularMovies from '../utils/usePopularMovies'
import useTopRatedMovies from '../utils/useTopRatedMovies'
import useUpcomingMovies from '../utils/useUpcomingMovie'
import MainContainer from './MainContainer'
import SecondayContainer from './SecondayContainer'
import { useSelector } from 'react-redux'
import Search from './Search'
import useNowPlayingMovie from '../utils/useNowPlayingMovie'
import useTrendingTvShow from '../utils/useTrendingTvShow'


const Browse = () => {
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    useNowPlayingMovie()
    useTrendingTvShow()
    const gptSearch = useSelector(store => store.search.showGptSearch)
    const search = useSelector(store=>store.search.searchQuery)
    return (
        <div className={`${(search || !gptSearch) ? "bg-neutral-800":"bg-transparent"}`}>
            <Header />
            {gptSearch ? (<Search />) : 
                (<>
                    <MainContainer />
                    <SecondayContainer />
                </>)
            }
        </div>
    )
}

export default Browse
// className={`${search !== null ? "bg-gray-800" : ""} h-full`}
// ${gptSearch ? "bg-transparent":"bg-neutral-800"}