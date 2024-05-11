

const Stats = () => {
    return (
        <div className="max-w-[1500px] mx-auto mb-36 grid grid-cols-12 gap-5 px-4 lg:px-12">
            <div className="col-span-12 mb-12 flex flex-col items-center text-center lg:col-span-4 lg:mb-0 lg:items-start lg:px-8 lg:text-left">
                <div className="w-full h-[200px] mb-8 flex items-center justify-center lg:justify-start">
                    <img src="https://site.joinleland.com/_next/static/media/Coach-Benefits-01.5a0dcd13.png" alt="" className="size-full object-contain object-left" />
                </div>
                <p className="mb-2 text-lg font-medium text-leland-gray-dark">Be your own boss</p>
                <p className="text-lg text-leland-gray-light">Here, you work for yourself. You choose the services you offer, set your own prices, and define your working hours.</p>
            </div>
            <div className="col-span-12 mb-12 flex flex-col items-center text-center lg:col-span-4 lg:mb-0 lg:items-start lg:px-8 lg:text-left">
                <div className="w-full h-[200px] mb-8 flex items-center justify-center lg:justify-start">
                    <img src="https://site.joinleland.com/_next/static/media/Coach-Benefits-02.b51333bb.png" alt="" className="size-full object-contain object-left" />
                </div>
                <p className="mb-2 text-lg font-medium text-leland-gray-dark">Keep more of what’s yours</p>
                <p className="text-lg text-leland-gray-light">On Leland, you keep 80-90% of the cut (vs 30-50% with a consulting firm).</p>
            </div>
            <div className="col-span-12 flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:px-8 lg:text-left">
                <div className="w-full h-[200px] mb-8 flex items-center justify-center lg:justify-start">
                    <img src="https://site.joinleland.com/_next/static/media/Coach-Benefits-03.9dff90b6.png" alt="" className="size-full object-contain object-left" />
                </div>
                <p className="mb-2 text-lg font-medium text-leland-gray-dark">Focus on the things that matter</p>
                <p className="text-lg text-leland-gray-light">We take care of payment, scheduling, and more, so you can focus on being a fantastic coach.</p>
            </div>
        </div>

    )
}

export default Stats
