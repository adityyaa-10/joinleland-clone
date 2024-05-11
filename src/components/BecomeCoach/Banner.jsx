
const Banner = () => {
    return (
        <div className="max-w-[1500px] mx-auto mb-24 px-4 lg:px-12 -mt-[275px]">
            <div className="relative overflow-hidden rounded-3xl">
                <div className="image-inner relative pb-[50%]">
                    <div className="absolute left-0 top-0 size-full">
                        <img className="size-full object-cover object-center" src="https://site.joinleland.com/_next/static/media/big-card-image.654e646d.jpg" alt="" />
                    </div>
                </div>
                <div className="absolute left-0 top-0 flex size-full flex-col items-start justify-end p-4 lg:flex-row lg:items-end lg:justify-between lg:p-12">
                    <p className="text-5xl sm:text-[68px] leading-[1] font-semibold mb-4 w-full text-left text-white lg:mb-0 lg:w-1/2 lg:text-7xl">Your clients are waiting for you.</p>
                    <button>
                        <div className="sm:whitespace-nowrap leading-tight items-center justify-center border shadow-border text-white bg-[#15B078] border-[#15B078] disabled:bg-[#15B078] hover:bg-[#15B078]-hover hover:border-[#15B078]-hover shadow-transparent py-4 px-5 text-base space-x-2 inline-flex font-medium rounded-lg cursor-pointer" aria-label="Become a Coach">
                            <span>Become a Coach</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Banner
