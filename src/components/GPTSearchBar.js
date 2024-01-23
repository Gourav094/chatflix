import React, { useRef } from 'react'
import { API_Options } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addSearchMovie, addSearchQuery } from '../utils/searchSlice'

const GPTSearchBar = () => {
    const searchText = useRef(null)
    const dispatch = useDispatch()
    

    const handleClick = async () => {
        const movieAPI = fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText?.current?.value}&include_adult=false&language=en-US&page=1`, API_Options)
        const TVAPI = fetch(`https://api.themoviedb.org/3/search/tv?query=${searchText?.current?.value}&include_adult=false&language=en-US&page=1`, API_Options)

        const [movieResponse, TVResponse] = await Promise.all([movieAPI, TVAPI])

        const movieData = await movieResponse.json();
        const TVData = await TVResponse.json();


        const exactMatches = [...TVData?.results,...movieData?.results].filter(item => item.title === searchText?.current?.value);

        const nonExactMatches = [...movieData?.results, ...TVData?.results].filter(item => item.title !== searchText?.current?.value);

        const result = [...exactMatches, ...nonExactMatches];

        // const result = [...movieData?.results, ...TVData.results]
        dispatch(addSearchMovie(result))
        dispatch(addSearchQuery(searchText?.current?.value))
    }

    return (
        <div className=''>
            <div className='text-center'>
                <form className='pt-32' onSubmit={(e) => e.preventDefault()}>
                    <input ref={searchText} placeholder='What would you like to watch?'
                        className='m-2  bg-neutral-700 px-4 py-2 md:px-8 md:py-4 font-medium tracking-wide rounded opacity-95 text-white w-3/4 md:w-1/2 outline-none' />
                    <button className='py-2 md:py-4 px-2 md:px-6 rounded bg-red-600 text-white font-semibold hover:opacity-90'
                        onClick={handleClick}
                    >Goooo</button>
                </form>
            </div>
            <div>

            </div>
        </div>
    )
}

export default GPTSearchBar


// search movie in TMDB
//  const searchMovieTMDB = async (movie) => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/search/movie?query=" +
//         movie +
//         "&include_adult=false&language=en-US&page=1",
//       API_OPTIONS
//     );
//     const json = await data.json();

//     return json.results;
// note:- this will return promise because it will take time to resolve
//   };

//   const handleGptSearchClick = async () => {
//     console.log(searchText.current.value);
// Make an API call to GPT API and get Movie Results

//     const gptQuery =
//       "Act as a Movie Recommendation system and suggest some movies for the query : " +
//       searchText.current.value +
//       ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

//     const gptResults = await openai.chat.completions.create({
//       messages: [{ role: "user", content: gptQuery }],
//       model: "gpt-3.5-turbo",
//     });

//     if (!gptResults.choices) {
// TODO: Write Error Handling
//     }

//     console.log(gptResults.choices?.[0]?.message?.content);

// Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
//     const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

// ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

// For each movie I will search TMDB API

// note: we created searchMovieTMDB function to call search movies api's but note it will return the prmoise
// becoz it take time but js will quickly run map so wee need to resolve it using promise.all

//     const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
// [Promise, Promise, Promise, Promise, Promise]

//     const tmdbResults = await Promise.all(promiseArray);

//     console.log(tmdbResults);

//     dispatch(
//       addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
//     );
//   };