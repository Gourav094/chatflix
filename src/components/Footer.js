import React from 'react'

const Footer = () => {
    return (
        <div className='h-fit w-screen px-16 md:px-40 text-gray-300 pt-14 bg-neutral-800'>
            <div className='flex flex-wrap gap-10 justify-between'>
                <ul className=''>
                    <li className='pt-3 font-bold'>FAQ</li>
                    <li className='pt-3'>Ways to watch</li>
                    <li className='pt-3'>Contribute</li>
                    <li className='pt-3'>Chatflix originals</li>
                </ul>
                <ul>
                    <li className='pt-3 font-bold'>Help center</li>
                    <li className='pt-3'>Carrer</li>
                    <li className='pt-3'>Terms of Use</li>
                    <li className='pt-3'>Privary policy</li>
                </ul>
                <ul>
                    <li className='pt-3 font-bold'>Want to watch</li>
                    <li className='pt-3'>Movies</li>
                    <li className='pt-3'>Tv shows</li>
                    <li className='pt-3'>Drama</li>
                </ul>
                <ul>
                    <li className='pt-3 font-bold'>Account</li>
                    <li className='pt-3'>Gift cards</li>
                    <li className='pt-3'>Privacy</li>
                    <li className='pt-3'>Media center</li>
                </ul>
                <ul>
                    <li className='py-3 font-bold'>Connect with us?</li>
                    <div className='text-2xl cursor-pointer'>
                        <i className='fa-brands fa-instagram pr-3'></i>
                        <i className='fa-brands fa-facebook pr-3'></i>
                        <i className='fa-brands fa-whatsapp pr-3'></i>
                        <i className='fa-regular fa-envelope'></i>
                    </div>
                </ul>
            </div>
            <p className='text-center font-semibold py-8 text-black'>© 2024 Chatflix by Gourav garg</p>
        </div>
    )
}

export default Footer