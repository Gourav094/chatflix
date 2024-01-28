import Header from './Header'
import usePopularMovies from '../utils/usePopularMovies'
import useTopRatedMovies from '../utils/useTopRatedMovies'
import useUpcomingMovies from '../utils/useUpcomingMovie'
import MainContainer from './MainContainer'
import SecondayContainer from './SecondayContainer'
import useNowPlayingMovie from '../utils/useNowPlayingMovie'
import useTrendingTvShow from '../utils/useTrendingTvShow'
import Footer from './Footer'


const Browse = () => {
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    useNowPlayingMovie()
    useTrendingTvShow()
    
    return (
        <div className="bg-neutral-800">
            <Header />
            <MainContainer />
            <SecondayContainer />
            <Footer />

        </div>
    )
}

export default Browse