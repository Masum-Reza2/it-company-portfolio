import React from 'react'

export default function Review() {
    return (
        <>
            <section className='mt-2'>
                
                <div className='lg:grid lg:grid-cols-3 lg:place-items-center'>
                    
                    <div className='p-3 space-y-3  lg:w-3/4 lg:h-full'>
                        <img className='w-1/6' src="../images/one.webp" alt="" />
                        <h2 className='text-2xl font-bold'>Review the business</h2>
                        <p className='text-sm leading-loose'>Let's talk and design together with a strategy for your digital service or process. We deliver advisory, helping you craft the business model, design processes in your company that bring efficiency or bring a completely new product to the marketplace. We are your unfair advantage.</p>
                        <details className='border-y border-sky-500 cursor-pointer'>
                            <summary className='font-bold lg:text-xl'>Business Modeling</summary>
                            <ul className='p-5 list-disc text-sm font-semibold space-y-2'>
                                <li>Business Analysis</li>
                                <li>Solution Design</li>
                                <li>Canvases</li>
                                <li>Product Modelling</li>
                                <li>Go-to Market Strategy</li>
                            </ul>
                        </details>
                    </div>
                    
                    <div className='p-3 space-y-3  lg:w-3/4 lg:h-full'>
                        <img className='w-1/6' src="../images/two.webp" alt="" />
                        <h2 className='text-2xl font-bold'>Develop the solution</h2>
                        <p className='text-sm leading-loose'>Using the latest methodologies in software development enables us to work efficiently. Not only do we deliver tangible results but also implement them by delivering all the documentation and workshops. We don't use too many buzz words, but we know what they mean.</p>
                        <details className='border-y border-sky-500 cursor-pointer'>
                            <summary className='font-bold lg:text-xl'>Web and App developmen</summary>
                            <ul className='p-5 list-disc text-sm font-semibold space-y-2'>
                                <li>Workshops</li>
                                <li>User journeys</li>
                                <li>Wireframing</li>
                                <li>User testing</li>
                                <li>Prototyping / UI Design</li>
                                <li>Development</li>
                            </ul>
                        </details>
                        <details className='border-y border-sky-500 cursor-pointer'>
                            <summary className='font-bold lg:text-xl'>Change Management</summary>
                            <ul className='p-5 list-disc text-sm font-semibold space-y-2'>
                                <li>Product Training</li>
                                <li>Documentation</li>
                                <li>Communication</li>
                            </ul>
                        </details>
                    </div>

                    <div className='p-3 space-y-3  lg:w-3/4 lg:h-full'>
                        <img className='w-1/6' src="../images/three.webp" alt="" />
                        <h2 className='text-2xl font-bold'>Support post delivery</h2>
                        <p className='text-sm leading-loose'>Our focus is to build a resilient and long-lasting relationship beyond simple project delivery. We help to strategize the growth of business and stay with our clients to give them a seamless experience.</p>
                        <details className='border-y border-sky-500 cursor-pointer'>
                            <summary className='font-bold lg:text-xl'>Definition</summary>
                            <ul className='p-5 list-disc text-sm font-semibold space-y-2'>
                                <li>Stakeholder workshops</li>
                                <li>Market review</li>
                                <li>Unique value proposition</li>
                                <li>Brand personality & Tone of voice</li>
                                <li>Naming</li>
                                <li>Brand positioning & architecture</li>
                                <li>Audience profiling and segmentation</li>
                            </ul>
                        </details>
                        <details className='border-y border-sky-500 cursor-pointer'>
                            <summary className='font-bold lg:text-xl'>Design</summary>
                            <ul className='p-5 list-disc text-sm font-semibold space-y-2'>
                                <li>Product Training</li>
                                <li>Documentation</li>
                                <li>Communication</li>
                            </ul>
                        </details>
                        <details className='border-y border-sky-500 cursor-pointer'>
                            <summary className='font-bold lg:text-xl'>Growth Hacking</summary>
                            <ul className='p-5 list-disc text-sm font-semibold space-y-2'>
                                <li>Content marketing</li>
                                <li>Video production</li>
                                <li>Search Engine Optimisation</li>
                                <li>Search Engine Marketing</li>
                                <li>Marketing automation</li>
                                <li>EDM</li>
                                <li>Marketing funnels</li>
                                <li>Social Media</li>
                            </ul>
                        </details>
                    </div>

                </div>

            </section>
        </>
    )
}
