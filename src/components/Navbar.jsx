import React from 'react'

export default function Navbar() {
    let menufunc = ()=>{
        console.log('you clicked me ')
    }
    return (
        <>
            <div className='hidden lg:flex space-x-4 justify-end pr-10 bg-gray-200 pt-3'>
                <h1 className='text-xl text-blue-600 font-bold'>You Dream We Build</h1>
                <img src="../images/rocket.png" alt="rocket image" />
            </div>

            <nav className='flex items-center justify-between bg-gray-200 p-5 lg:pt-0'>
                <div className='w-32'>
                    <img src="../images/logo.svg" alt="logo" />
                </div>
                {/* hamburger menu */}
                <div className='lg:hidden' onClick={menufunc}>
                    <img className='w-7 opacity-60' src="../images/hamburger.png" alt="hamburger menu" />
                </div>
            </nav>

            <ul className='flex flex-col items-center font-bold space-y-3 mt-5 text-lg'>
                <li>Company</li>
                <li>Service</li>
                <li>Our Work</li>
                <li>Insights</li>
                <li>Careers</li>
            </ul>
        </>
    )
}
