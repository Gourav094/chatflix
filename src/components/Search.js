import React from 'react'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import GPTSearchBar from './GPTSearchBar'
import { Background_url } from '../utils/constant';
import { useSelector } from 'react-redux';

const Search = () => {
    const search = useSelector(store => store.search.searchQuery)
    return (
        <div>
            {!search && <div className='absolute -z-20'>
                <img src={Background_url} className='h-screen w-screen object-cover'
                    alt='background' ></img>
            </div>}
            <div className=''>
                <GPTSearchBar />
                <GPTMovieSuggestion />
            </div>
        </div>

    )
}

export default Search