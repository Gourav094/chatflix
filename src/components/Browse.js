import Header from './Header'
import usePopularMovies from '../utils/usePopularMovies'
import MainContainer from './MainContainer'
import SecondayContainer from './SecondayContainer'


const Browse = () => {

    usePopularMovies()
    return (
        <div>
            <Header/>   
            <MainContainer/>
            <SecondayContainer/>
        </div>
    )
}

export default Browse
