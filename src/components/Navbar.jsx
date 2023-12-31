import React from 'react'

export default function Navbar() {
    let toggle = () => {
        let hamburger = document.getElementById('hamburger');
        hamburger.classList.toggle('hidden');
    }

    return (
        <>
            <div className=' max-w-7xl m-auto'>
                <div className='lg:fixed lg:w-full lg:top-0 max-w-7xl	 m-auto'>
                    <div className='hidden lg:flex space-x-4 justify-end pr-10 bg-gray-200 lg:bg-white pt-3 '>
                        <h1 className='text-xl text-blue-600 font-bold'>You Dream We Build</h1>
                        <img src="../images/rocket.png" alt="rocket image" />
                    </div>

                    <nav className='flex items-center justify-between bg-gray-200 lg:bg-white p-5 lg:pt-0'>
                        <div className='w-32 lg:hidden'>
                            <img src="../images/logo.svg" alt="logo" />
                        </div>
                        {/* hamburger menu */}
                        <div className='fixed right-4 lg:left-8 lg:top-4 w-7 opacity-60 hover:cursor-pointer' onClick={toggle}>
                            <img className='' src="../images/hamburger.png" alt="hamburger menu" />
                        </div>
                    </nav>

                    <ul id='hamburger' className='hidden flex fixed top-12 bg-gray-400 w-full p-5 lg:static flex-col items-center font-bold space-y-3 mt-5 text-lg lg:flex-row lg:bg-white lg:justify-between lg:items-center lg:mt-0 lg:pb-5 justify-between'>
                        <li></li>

                        <div className='w-32 hidden lg:block'>
                            <img src="../images/logo.svg" alt="logo" />
                        </div>


                        <li className='company shadow-sm hover:shadow-lg shadow-black w-32 text-center cursor-pointer'>
                            Company
                            <ul className='hidden nasted-menu text-sm space-y-2 lg:absolute lg:pt-2'>
                                <li className='border-2 hover:translate-y-[-0.10rem] active:translate-y-[0.10rem] '>About-Us</li>
                                <li className='border-2 hover:translate-y-[-0.10rem] active:translate-y-[0.10rem] '>Our-Team</li>
                                <li className='border-2 hover:translate-y-[-0.10rem] active:translate-y-[0.10rem] '>Our Process</li>
                                <li className='border-2 hover:translate-y-[-0.10rem] active:translate-y-[0.10rem] '>Core Values</li>
                                <li className='border-2 hover:translate-y-[-0.10rem] active:translate-y-[0.10rem] '>Key Services</li>
                            </ul>
                        </li>
                        <li className='company shadow-sm hover:shadow-lg shadow-black w-32 text-center cursor-pointer'>
                            Services
                            <ul className='hidden nasted-menu text-sm space-y-2 lg:absolute lg:pt-2'>
                                <li className='border-2 hover:translate-y-[-0.10rem] active:translate-y-[0.10rem] '>Mobile-App-Development</li>
                                <li className='border-2 hover:translate-y-[-0.10rem] active:translate-y-[0.10rem] '>Web Development</li>
                                <li className='border-2 hover:translate-y-[-0.10rem] active:translate-y-[0.10rem] '>E-Commerce-Solution</li>
                                <li className='border-2 hover:translate-y-[-0.10rem] active:translate-y-[0.10rem] '>Software Development</li>
                                <li className='border-2 hover:translate-y-[-0.10rem] active:translate-y-[0.10rem] '>Business Process Automation</li>
                            </ul>
                        </li>
                        <li className='company shadow-sm hover:shadow-lg shadow-black w-32 text-center cursor-pointer'>
                            Our Work
                        </li>
                        <li className='company shadow-sm hover:shadow-lg shadow-black w-32 text-center cursor-pointer'>
                            Insights
                            <ul className='hidden nasted-menu text-sm space-y-2 lg:absolute lg:pt-2'>
                                <li className='border-2 hover:translate-y-[-0.10rem] active:translate-y-[0.10rem] '>Blog</li>
                                <li className='border-2 hover:translate-y-[-0.10rem] active:translate-y-[0.10rem] '>Testimonials</li>
                                <li className='border-2 hover:translate-y-[-0.10rem] active:translate-y-[0.10rem] '>FAQs</li>
                            </ul>
                        </li>
                        <li className='company shadow-sm hover:shadow-lg shadow-black w-32 text-center cursor-pointer'>
                            Careers
                        </li>

                        <button className='bg-blue-500 w-[90%] text-white font-bold p-2 rounded-full lg:w-40 lg:rounded-md lg:mr-5 hover:translate-y-[-0.15rem] active:translate-y-[0.15rem]'>Contact-Us</button>
                    </ul>
                </div>
            </div>
        </>
    )
}
