

const Footer = () => {
    return (
        <footer className="w-full bg-[#333] px-4 pb-20 pt-12 lg:px-8">
            <div className="mx-auto grid max-w-screen-xl grid-cols-12 gap-3">
                <div className="col-span-12 mb-8 lg:col-span-3">
                    <a className="mb-6 inline-block text-white lg:hover:opacity-50" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 99 23" className="w-32">
                            <path fill="#FFFFFF" fill-rule="evenodd" d="M20.572 2.334 6.822 6.46 2.24 20.667l14.208-4.125 4.125-14.208Zm-9.167 11.458a2.292 2.292 0 1 0 0-4.583 2.292 2.292 0 0 0 0 4.583Z" clip-rule="evenodd" vector-effect="non-scaling-stroke"></path>
                            <path fill="#FFFFFF" d="M80.285 12.707v6.466h3.195v-7.165c0-2.896-.874-5.142-4.344-5.142-1.747 0-2.97.773-3.62 2.047h-.074l.025-1.823h-3.195v12.083h3.195v-6.017c0-2.022.674-3.67 2.646-3.67 1.847 0 2.172 1.424 2.172 3.221ZM66.415 17.775l.05 1.398h3.07v-6.915c0-2.047-.449-3.146-1.323-3.994-.898-.85-2.121-1.398-4.268-1.398a9.467 9.467 0 0 0-4.719 1.273l.974 2.047c.524-.4 1.847-.999 3.445-.999 1.673 0 2.696.724 2.696 2.272v.324l-2.896.2c-2.496.175-4.967 1.148-4.967 3.67 0 2.521 1.897 3.794 4.243 3.794 1.798 0 3.196-.799 3.695-1.672Zm-2.222-3.92 2.172-.125v2.222a3.249 3.249 0 0 1-2.596 1.323c-1.323 0-2.097-.699-2.097-1.722 0-1.024.824-1.598 2.521-1.698ZM41.979 14.155h8.887s.05-.999.05-1.623c0-3.22-2.247-5.666-5.966-5.666-3.446 0-6.266 2.596-6.266 6.465 0 3.895 2.696 6.116 6.34 6.116 2.946 0 4.768-1.248 5.442-1.947l-1.248-1.722c-.574.499-2.022 1.223-3.644 1.223-1.823 0-3.296-.924-3.595-2.846Zm2.946-4.918c2.246 0 2.746 1.523 2.795 2.846H41.93c.1-1.523 1.098-2.846 2.996-2.846ZM31.738 3.557v12.918h6.017v2.696h-9.237V3.557h3.22ZM56.332 3.557v15.614h-3.17V3.557h3.17Z" vector-effect="non-scaling-stroke"></path>
                            <path fill="#FFFFFF" fill-rule="evenodd" d="M98.594 3.557v15.614h-3.02l-.025-1.897h-.075c-.974 1.548-2.472 2.172-4.144 2.172-3.545 0-5.717-2.746-5.717-6.341 0-3.42 2.272-6.241 5.942-6.241 1.622 0 2.995.6 3.844 1.897h.05c-.025-.549-.025-1.198-.025-2.047V3.557h3.17Zm-9.735 9.548c0 2.097 1.298 3.744 3.37 3.744 1.922 0 3.27-1.472 3.27-3.744 0-2.022-1.323-3.795-3.37-3.795-2.072 0-3.27 1.773-3.27 3.795Z" clip-rule="evenodd" vector-effect="non-scaling-stroke"></path>
                        </svg>
                    </a>
                    <div className="mb-9 flex text-white">
                        <a href="https://www.facebook.com/joinleland" target="_blank" className="mr-6 opacity-70 lg:hover:opacity-30" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6">
                                <path fill="#FFFFFF" d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54V12.06h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.093 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.572v1.886h2.773l-.443 2.908h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939Z" vector-effect="non-scaling-stroke"></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com/joinLeland" target="_blank" className="mr-6 opacity-70 lg:hover:opacity-30" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6">
                                <path fill="#FFFFFF" d="M9.033 18c6.037 0 9.34-4.617 9.34-8.62 0-.13-.004-.263-.01-.392A6.407 6.407 0 0 0 20 7.419a6.898 6.898 0 0 1-1.884.476 3.103 3.103 0 0 0 1.443-1.676 6.942 6.942 0 0 1-2.083.736 3.38 3.38 0 0 0-1.863-.915 3.527 3.527 0 0 0-2.081.319 3.149 3.149 0 0 0-1.443 1.42 2.82 2.82 0 0 0-.21 1.938A9.939 9.939 0 0 1 8.134 8.8a9.226 9.226 0 0 1-3.018-2.245 2.832 2.832 0 0 0-.358 2.207c.188.751.68 1.408 1.374 1.836a3.499 3.499 0 0 1-1.487-.378v.038c0 .7.261 1.378.742 1.92a3.34 3.34 0 0 0 1.891 1.05c-.482.123-.989.14-1.48.053.21.602.617 1.128 1.167 1.506a3.47 3.47 0 0 0 1.898.6 6.941 6.941 0 0 1-4.078 1.297c-.262 0-.524-.015-.784-.044A9.886 9.886 0 0 0 9.033 18Z" vector-effect="non-scaling-stroke"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/joinleland" target="_blank" className="mr-6 opacity-70 lg:hover:opacity-30" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6">
                                <path fill="#FFFFFF" d="M20.52 2H3.477C2.66 2 2 2.645 2 3.441v17.114C2 21.352 2.66 22 3.477 22H20.52c.816 0 1.48-.648 1.48-1.441V3.44C22 2.645 21.336 2 20.52 2ZM7.934 19.043h-2.97V9.496h2.97v9.547ZM6.449 8.195a1.72 1.72 0 1 1-.006-3.439 1.72 1.72 0 0 1 .006 3.44Zm12.594 10.848h-2.965v-4.64c0-1.106-.02-2.532-1.543-2.532-1.543 0-1.777 1.207-1.777 2.453v4.719H9.797V9.496h2.844v1.305h.039c.394-.75 1.363-1.543 2.804-1.543 3.004 0 3.559 1.976 3.559 4.547v5.238Z" vector-effect="non-scaling-stroke"></path>
                            </svg>
                        </a>
                    </div>
                    <p className="text-sm text-white/70">© Leland 2024. All rights reserved.</p>
                </div>
                <div className="col-span-12 mb-8 lg:col-span-3">
                    <p className="mb-1 text-lg text-white">Welcome</p>
                    <ul>
                        <li className="mb-1"><a className="text-lg text-white/60 lg:hover:underline" href="https://www.joinleland.com/signup">Get started</a></li>
                        <li className="mb-1"><a className="text-lg text-white/60 lg:hover:underline" href="https://www.joinleland.com/login">Log in</a></li>
                        <li className="mb-1"><a className="text-lg text-white/60 lg:hover:underline" href="/become-a-coach">Become a coach</a></li>
                        <li className="mb-1"><a className="text-lg text-white/60 lg:hover:underline" href="/events">Events</a></li>
                    </ul>
                </div>
                <div className="col-span-12 mb-8 lg:col-span-3">
                    <p className="mb-1 text-lg text-white">Library</p>
                    <ul>
                        <li className="mb-1"><a className="text-lg text-white/60 lg:hover:underline" href="/library">Content Library</a></li>
                        <li className="mb-1"><a className="text-lg text-white/60 lg:hover:underline" href="/library/mba">MBA</a></li>
                        <li className="mb-1"><a className="text-lg text-white/60 lg:hover:underline" href="/library/college">College</a></li>
                        <li className="mb-1"><a className="text-lg text-white/60 lg:hover:underline" href="/library/management-consulting">Management Consulting</a></li>
                        <li className="mb-1"><a className="text-lg text-white/60 lg:hover:underline" href="/library/product-management">Product Management</a></li>
                    </ul>
                </div>
                <div className="col-span-12 mb-8 lg:col-span-3">
                    <p className="mb-1 text-lg text-white">Company</p>
                    <ul>
                        <li className="mb-1"><a href="https://jobs.polymer.co/leland" target="_blank" rel="noreferrer" className="text-lg text-white/60 lg:hover:underline">Careers</a></li>
                        <li className="mb-1"><a href="https://go.joinleland.com/partner/partnerships" target="_blank" rel="noreferrer" className="text-lg text-white/60 lg:hover:underline">Partnerships</a></li>
                        <li className="mb-1"><a className="text-lg text-white/60 lg:hover:underline" href="/legal/terms">Terms of Service</a></li>
                        <li className="mb-1"><a className="text-lg text-white/60 lg:hover:underline" href="/legal/privacy-policy">Privacy Policy</a></li>
                        <li className="mb-1"><a className="text-lg text-white/60 lg:hover:underline" href="/support">Support</a></li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer
