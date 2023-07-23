import React from 'react'

export default function Helping_hand() {
  return (
    <>
      <section className='lg:mt-40 max-w-7xl	 m-auto'>
        <div className='p-5 space-y-4 lg:flex lg:flex-row-reverse items-center justify-center lg:space-x-5'>

          <div className=' lg:w-3/5'>
            <img className='w-full rounded-md' src="../images/copmany-formation.png" alt="" />
          </div>

          <div className='space-y-4'>
            <h1 className='text-3xl lg:text-5xl font-bold text-indigo-400'>Here's what we can do for you</h1>
            <button className='bg-blue-500 w-[100%] text-white font-bold p-2 rounded-full lg:w-40 lg:rounded-md lg:mr-5 hover:translate-y-[-0.15rem] active:translate-y-[0.15rem]'>Explore</button>
          </div>

        </div>
      </section>
    </>
  )
}
