import React from 'react'

export default function Form() {
    return (
        <>
            <div className='flex flex-col w-[80%] m-auto space-y-5 text-center mt-10 p-5 max-w-7xl'>
                <h2 className='text-xl font-bold'>Subscribe to our Newsletter</h2>
                <input className='border-2 rounded-md p-2 border-indigo-500 focus:outline-1 outline-orange-200'  type="text" name="" id="" placeholder='Enter your Name' />
                <input className='border-2 rounded-md p-2 border-indigo-500 focus:outline-1 outline-orange-200'  type="email" name="" id="" placeholder='Enter your E-main' />
                <button className='p-2 bg-indigo-500 text-white w-32 m-auto rounded-md hover:translate-y-[-0.15rem] active:translate-y-[0.15rem]'>Sign Up</button>
                <p>*No spam, ever. Will never share your email address and you can opt out at any time.</p>
            </div>
        </>
    )
}
