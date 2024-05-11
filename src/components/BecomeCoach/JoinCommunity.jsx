import React from 'react'

const JoinCommunity = () => {
    return (
        <div className="bg-[#F5F5F5] py-[300px] -mt-[215px]">
            <div className="max-w-[1500px] mx-auto mb-24 flex flex-wrap items-center px-4 lg:flex-nowrap lg:px-12">
                <div className="order-2 grid w-full grid-cols-6 gap-5 lg:order-1 lg:w-1/2">
                    <div className="col-span-2">
                        <div>
                            <div className=" size-full overflow-hidden rounded-2xl">
                                <img className="size-full object-cover object-center" src="https://site.joinleland.com/_next/static/media/tile-2.5d9db907.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div>
                            <div className=" size-full overflow-hidden rounded-2xl">
                                <img className="size-full object-cover object-center" src="https://site.joinleland.com/_next/static/media/tile-2.5d9db907.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div>
                            <div className=" grid size-full grid-flow-col grid-rows-2 gap-5">
                                <div className="col-span-1 overflow-hidden rounded-2xl">
                                    <img className="size-full object-cover object-center" src="https://site.joinleland.com/_next/static/media/tile-3.461ca955.jpg" alt="" />
                                </div>
                                <div className="col-span-1 overflow-hidden rounded-2xl">
                                    <img className="size-full object-cover object-center" src="https://site.joinleland.com/_next/static/media/tile-4.ddda108b.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 mb-10 w-full px-4 lg:order-2 lg:mb-0 lg:w-1/2 lg:pl-10 lg:pr-24">
                    <h2 className="heading-text mb-5 font-semibold text-[#333]">Join an amazing community</h2>
                    <p className="mb-5 text-lg text-[#707070]">We’re building the largest professional community of coaches and applicants, and job seekers in the world. Join now and be a part of something big.</p>
                    <a href="https://www.joinleland.com/search" className="flex items-center text-lg text-[#15B078] transition-opacity duration-300 lg:hover:opacity-50">
                        <span className="pr-3">Browse Leland coaches</span>
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8327 5H1.16602" stroke="#15B078" stroke-width="1.5px" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
                            <path d="M8.66602 9.16667L12.8327 5" stroke="#15B078" stroke-width="1.5px" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
                            <path d="M8.66602 0.833313L12.8327 4.99998" stroke="#15B078" stroke-width="1.5px" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default JoinCommunity
