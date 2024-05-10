"use client"
import { useState, useEffect, useRef } from 'react';

const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Function to close sidebar when clicking outside of it
    const handleOutsideClick = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
        }
    };
    useEffect(() => {
        // Attach event listener to handle outside clicks
        document.addEventListener('mousedown', handleOutsideClick);

        // Cleanup the event listener
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    return (
        <div className="fixed inset-x-0 top-0 flex flex-col-reverse z-50">
            <nav className="relative flex h-20 flex-col items-center justify-between border-b border-[#e5e5e5] bg-white p-4 sm:h-20 sm:flex-row sm:px-6 sm:py-0">
                <div className="flex w-full items-center justify-between sm:h-full">
                    {/* Sidebar Menu Button */}
                    <button className="p-3 sm:hidden"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6 ">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6h18M17 12H3M3 18h10" vectorEffect="non-scaling-stroke"></path>
                        </svg>
                    </button>
                    <aside
                        ref={sidebarRef}
                        className={`fixed inset-y-0 left-0 w-[270px] bg-[#f5f5f5] z-[500] transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                            }`}
                    >
                        {/* Sidebar Content */}
                        <div className="flex sm:hidden w-full flex-col bg-[#f5f5f5]">
                            <div className="flex flex-col items-start border-b border-[#f5f5f5] bg-white px-6 py-10">
                                <a href="https://www.joinleland.com/signup">
                                    <button type="button" className="sm:whitespace-nowrap leading-tight items-center justify-center border shadow-border text-white bg-[#15B078] border-[#15B078] disabled:bg-[#15B078] shadow-transparent p-3 text-sm space-x-2 inline-flex font-medium rounded-lg cursor-pointer" aria-label="Get Started">
                                        <span>Get Started</span>
                                    </button>
                                </a>
                                <div className="mt-10 flex w-full flex-col items-start gap-6">
                                    <a className="text-xl" href="/login">Sign in</a>
                                    <a className="text-xl" href="/login">Browse Coaching</a>
                                    <a className="text-xl" href="/login">Inbox</a>
                                    <a className="text-xl" href="/login">Free Events</a>
                                    <div className="fixed inset-0 bg-white hidden px-6 pt-7">
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 p-6">
                                <a className=" font-normal flex items-center gap-4 text-lg leading-7 text-[#707070] w-full" href="/">
                                    <div className="flex w-full items-center justify-between gap-3">
                                        <div className="flex items-center gap-3 font-medium text-base">Home</div>
                                    </div>
                                </a>
                                <a className=" font-normal flex items-center gap-4 text-lg leading-7 text-[#707070] w-full" href="/become-a-coach">
                                    <div className="flex w-full items-center justify-between gap-3">
                                        <div className="flex items-center gap-3 font-medium text-base">Become a coach</div>
                                    </div>
                                </a>
                                <a className=" font-normal flex items-center gap-4 text-lg leading-7 text-[#707070] w-full" href="https://go.joinleland.com/partner/partnerships">
                                    <div className="flex w-full items-center justify-between gap-3">
                                        <div className="flex items-center gap-3 font-medium text-base">Partnerships</div>
                                    </div>
                                </a>
                                <a className=" font-normal flex items-center gap-4 text-lg leading-7 text-[#707070] w-full" href="/support">
                                    <div className="flex w-full items-center justify-between gap-3">
                                        <div className="flex items-center gap-3 font-medium text-base">Support</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </aside>
                    <div className="flex w-full items-center justify-center space-x-6 justify-self-center sm:max-w-2xl sm:justify-start">
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 99 23" className="h-6 shrink-0 text-[#15B078]">
                                <path fill="currentColor" fillRule="evenodd" d="M20.572 2.334 6.822 6.46 2.24 20.667l14.208-4.125 4.125-14.208Zm-9.167 11.458a2.292 2.292 0 1 0 0-4.583 2.292 2.292 0 0 0 0 4.583Z" clipRule="evenodd" vectorEffect="non-scaling-stroke"></path>
                                <path fill="currentColor" d="M80.285 12.707v6.466h3.195v-7.165c0-2.896-.874-5.142-4.344-5.142-1.747 0-2.97.773-3.62 2.047h-.074l.025-1.823h-3.195v12.083h3.195v-6.017c0-2.022.674-3.67 2.646-3.67 1.847 0 2.172 1.424 2.172 3.221ZM66.415 17.775l.05 1.398h3.07v-6.915c0-2.047-.449-3.146-1.323-3.994-.898-.85-2.121-1.398-4.268-1.398a9.467 9.467 0 0 0-4.719 1.273l.974 2.047c.524-.4 1.847-.999 3.445-.999 1.673 0 2.696.724 2.696 2.272v.324l-2.896.2c-2.496.175-4.967 1.148-4.967 3.67 0 2.521 1.897 3.794 4.243 3.794 1.798 0 3.196-.799 3.695-1.672Zm-2.222-3.92 2.172-.125v2.222a3.249 3.249 0 0 1-2.596 1.323c-1.323 0-2.097-.699-2.097-1.722 0-1.024.824-1.598 2.521-1.698ZM41.979 14.155h8.887s.05-.999.05-1.623c0-3.22-2.247-5.666-5.966-5.666-3.446 0-6.266 2.596-6.266 6.465 0 3.895 2.696 6.116 6.34 6.116 2.946 0 4.768-1.248 5.442-1.947l-1.248-1.722c-.574.499-2.022 1.223-3.644 1.223-1.823 0-3.296-.924-3.595-2.846Zm2.946-4.918c2.246 0 2.746 1.523 2.795 2.846H41.93c.1-1.523 1.098-2.846 2.996-2.846ZM31.738 3.557v12.918h6.017v2.696h-9.237V3.557h3.22ZM56.332 3.557v15.614h-3.17V3.557h3.17Z" vectorEffect="non-scaling-stroke"></path>
                                <path fill="currentColor" fillRule="evenodd" d="M98.594 3.557v15.614h-3.02l-.025-1.897h-.075c-.974 1.548-2.472 2.172-4.144 2.172-3.545 0-5.717-2.746-5.717-6.341 0-3.42 2.272-6.241 5.942-6.241 1.622 0 2.995.6 3.844 1.897h.05c-.025-.549-.025-1.198-.025-2.047V3.557h3.17Zm-9.735 9.548c0 2.097 1.298 3.744 3.37 3.744 1.922 0 3.27-1.472 3.27-3.744 0-2.022-1.323-3.795-3.37-3.795-2.072 0-3.27 1.773-3.27 3.795Z" clipRule="evenodd" vectorEffect="non-scaling-stroke"></path>
                            </svg>
                        </a>
                    </div>
                    <a className="relative flex sm:hidden cursor-pointer justify-end items-end space-x-2.5 rounded-md p-3 font-semibold " role="menuitem" href="https://go.joinleland.com/partner/partnerships">
                        <div className="flex w-full items-center justify-between whitespace-nowrap">
                            <div className="flex items-center gap-2.5"><span>Join</span></div>
                        </div>
                    </a>
                    <div className="flex h-full shrink-0 items-center justify-end space-x-6 whitespace-nowrap text-base text-[#333]">
                        <a className="relative hidden sm:flex w-full cursor-pointer items-center justify-start space-x-2.5 rounded-md p-3 hover:bg-slate-100 font-semibold" role="menuitem" href="/events">
                            <div className="flex w-full items-center justify-between whitespace-nowrap">
                                <div className="flex items-center gap-2.5"><span>Free events</span></div>
                            </div>
                        </a>
                        <a className="relative hidden sm:flex w-full cursor-pointer items-center justify-start space-x-2.5 rounded-md p-3 font-semibold" role="menuitem" href="/become-a-coach">
                            <div className="flex w-full items-center justify-between whitespace-nowrap">
                                <div className="flex items-center gap-2.5"><span>Become a coach</span></div>
                            </div>
                        </a>
                        <a className="relative hidden md:flex w-full cursor-pointer items-center justify-start space-x-2.5 rounded-md p-3 font-semibold" role="menuitem" href="https://go.joinleland.com/partner/partnerships">
                            <div className="flex w-full items-center justify-between whitespace-nowrap">
                                <div className="flex items-center gap-2.5"><span>Partnerships</span></div>
                            </div>
                        </a>
                        <div className="hidden lg:flex h-full shrink-0 items-center space-x-3">
                            <a href="/login">
                                <button type="button" className="sm:whitespace-nowrap leading-tight items-center justify-center border shadow-border  bg-white disabled:bg-white shadow-transparent p-3 text-sm space-x-2 inline-flex font-semibold rounded-lg cursor-pointer" aria-label="Log In">
                                    <span>Log In</span>
                                </button>
                            </a>
                            <a href="https://www.joinleland.com/signup">
                                <button type="button" className="sm:whitespace-nowrap leading-tight items-center justify-center border shadow-border text-white bg-[#15B078] border-[#15B078] disabled:bg-[#15B078] shadow-transparent p-3 text-sm space-x-2 inline-flex font-medium rounded-lg cursor-pointer" aria-label="Get Started">
                                    <span>Get Started</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
