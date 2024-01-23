import React from 'react'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import GPTSearchBar from './GPTSearchBar'
import { Background_url} from '../utils/constant';
import { useSelector } from 'react-redux';

const Search = () => {
    const search = useSelector(store => store.search.searchQuery)
    return (
        <div className={`${search !== null ? "bg-gray-800":""} h-full`}>
            <div className='absolute h-full -z-10'>
                 <img src={Background_url}
                    alt='background' ></img> 
            </div>
            <GPTSearchBar/>
            <GPTMovieSuggestion/> 
        </div>
    )
}

export default Search