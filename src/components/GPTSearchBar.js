import React from 'react'

const  GPTSearchBar= () => {
    return (
        <div className=''>
            <div className='text-center'>
                <form className='pt-32' onSubmit={(e) => e.preventDefault()}>
                    <input placeholder='What would you like to watch today?'
                    className='m-2 bg-neutral-700 px-4 py-3 font-medium tracking-wide rounded-sm opacity-95 text-white w-2/5 outline-none' />
                    <button className='py-3 px-6 rounded-sm bg-red-600 text-white font-semibold hover:opacity-90'>Gooooo</button>
                </form>
            </div>
            <div>

            </div>
        </div>
    )
}

export default GPTSearchBar