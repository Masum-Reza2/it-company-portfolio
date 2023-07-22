import React from 'react'

export default function Country() {
    return (
        <>
            <div>

                <div className='flex flex-col items-center justify-center space-y-4'>
                    <div className='w-full '>
                        <img className='w-32 m-auto' src="../images/logo.svg" alt="" />
                    </div>
                    <p className='text-center text-sm  px-5 leading-relaxed'>We are a global software development company transforming businesses with high quality and cost effective digital solutions.</p>
                </div>

                <div className='space-y-5 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:gap-y-5 mt-10'>
                    <div className='p-5 w-72 h-full shadow-xl rounded-lg mt-3 m-auto flex flex-col space-y-2 items-center cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:bg-pink-400 hover:font-bold'>
                        <div><img src="../images/india.svg" alt="" /></div>
                        <h4 className='font-bold'>India</h4>
                        <p className=' text-sm'>SCO 2, Janta</p>
                        <p className=' text-sm'>Enclave Market,</p>
                        <p className=' text-sm'>Dugri Urban</p>
                        <p className=' text-sm'>Estate, Ludhiana,</p>
                        <p className=' text-sm'>Punjab, India-</p>
                        <p className=' text-sm'>141003</p>
                        <p className=' text-sm'>+91-98885</p>
                        <p className=' text-sm'>11691</p>
                    </div>
                    <div className='p-5 w-72 h-full shadow-xl rounded-lg mt-3 m-auto flex flex-col space-y-2 items-center cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:bg-pink-400 hover:font-bold'>
                        <div><img src="../images/aus.svg" alt="" /></div>
                        <h4 className='font-bold'>Australia</h4>
                        <p className=' text-sm'>1417/25</p>
                        <p className=' text-sm'>Coventry Street,</p>
                        <p className=' text-sm'>Southbank,</p>
                        <p className=' text-sm'>Victoria 3006</p>
                        <p className=' text-sm'>+61 401 730 760</p>
                    </div>
                    <div className='p-5 w-72 h-full shadow-xl rounded-lg mt-3 m-auto flex flex-col space-y-2 items-center cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:bg-pink-400 hover:font-bold'>
                        <div><img src="../images/canada.svg" alt="" /></div>
                        <h4 className='font-bold'>Canada</h4>
                        <p className='text-sm'>Unit #5106, 4310</p>
                        <p className='text-sm'>-104</p>
                        <p className='text-sm'>AVE NE,</p>
                        <p className='text-sm'>CALGARY,AB, T3</p>
                        <p className='text-sm'>4E9</p>
                        <p className='text-sm'>+1 (403) 437-</p>
                        <p className='text-sm'>+1 (403) 437-3112</p>
                        <p className='text-sm'>11691</p>
                    </div>
                    <div className='p-5 w-72 h-full shadow-xl rounded-lg mt-3 m-auto flex flex-col space-y-2 items-center cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:bg-pink-400 hover:font-bold'>
                        <div><img src="../images/usa.svg" alt="" /></div>
                        <h4 className='font-bold'>United States</h4>
                        <p className='text-sm'>11790 Christian</p>
                        <p className='text-sm'>Ave, Concord</p>
                        <p className='text-sm'>Township, OH</p>
                        <p className='text-sm'>44077</p>
                        <p className='text-sm'>+1(440) 413-</p>
                        <p className='text-sm'>+1(440) 413-</p>
                        <p className='text-sm'>8300</p>
                    </div>
                    <div className='p-5 w-72 h-full shadow-xl rounded-lg mt-3 m-auto flex flex-col space-y-2 items-center cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:bg-pink-400 hover:font-bold'>
                        <div><img src="../images/new-zealand.svg" alt="" /></div>
                        <h4 className='font-bold'>New Zealand</h4>
                        <p className='text-sm'>4 Schooner Drive,</p>
                        <p className='text-sm'>Whitby, Porirua,</p>
                        <p className='text-sm'>5024, NZ</p>
                        <p className='text-sm'>Estate, Ludhiana,</p>
                        <p className='text-sm'>+91-98885</p>
                        <p className='text-sm'>11691</p>
                    </div>
                    <div className='p-5 w-72 h-full shadow-xl rounded-lg mt-3 m-auto flex flex-col space-y-2 items-center cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:bg-pink-400 hover:font-bold'>
                        <div><img src="../images/india.svg" alt="" /></div>
                        <h4 className='font-bold'>Italy</h4>
                        <p className='text-sm'>Via Fontana Delle</p>
                        <p className='text-sm'>Rose, 201 -</p>
                        <p className='text-sm'>Velletri (Roma)</p>
                        
                    </div>
                    
                    
                </div>

            </div>
        </>
    )
}
