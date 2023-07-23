import React from 'react'

export default function Contact_us() {
    return (
        <>
            <div className='space-y-5 mt-10 max-w-7xl	 m-auto'>
                
                <h1 className='text-xl text-center mt-3 underline'>Contact Us</h1>
                <h5 className='text-xl text-center mt-3'>demo@gmail.com</h5>
                <div className=' w-1/2 m-auto'>
                    <img className='w-[50%] m-auto' src="../images/mobile-iso_logo.svg" alt="" />
                    <img className='w-3/2 m-auto' src="../images/mobile-Microsoft_partner.svg" alt="" />
                </div>

                <div className='text-2xl text-center space-x-5'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-chrome"></i>
                <i class="fa-brands fa-whatsapp"></i>
                </div>

            </div>
        </>
    )
}
