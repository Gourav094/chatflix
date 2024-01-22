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

    return (
        <div className=''>
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
