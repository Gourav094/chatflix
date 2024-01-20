import React from 'react'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import GPTSearchBar from './GPTSearchBar'
import { Background_url} from '../utils/constant';

const Search = () => {

    return (
        <div className=''>
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