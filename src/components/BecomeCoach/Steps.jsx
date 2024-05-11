import Image from 'next/image'
const Steps = () => {
    return (
        <div className="max-w-[1500px] mx-auto mb-24 grid grid-cols-12 gap-5 px-4 delay-200 lg:mb-36 lg:px-12">
            <div className="col-span-12 mb-8 flex flex-col items-center text-center lg:col-span-3 lg:mb-0 lg:items-start lg:px-8 lg:text-left">
                <div className="flex w-full justify-center items-center lg:justify-start lg:items-start h-[70px]">
                    <Image src={'/apply.svg'} width={44} height={44} />
                </div>
                <p className="mb-2 text-lg font-medium text-leland-gray-dark">Apply</p>
                <p className="w-2/3 text-lg text-leland-gray-light lg:w-auto">Build your coach profile and tell us about your expertise</p>
            </div>

            <div className="col-span-12 mb-8 flex flex-col items-center text-center lg:col-span-3 lg:mb-0 lg:items-start lg:px-8 lg:text-left">
                <div className="flex w-full justify-center items-center lg:justify-start lg:items-start h-[70px]">
                    <Image src={'/getapproved.svg'} width={36} height={40} />
                </div>
                <p className="mb-2 text-lg font-medium text-leland-gray-dark">Get approved</p>
                <p className="w-2/3 text-lg text-leland-gray-light lg:w-auto">Our team reviews your profile to ensure the best coaches join Leland</p>
            </div>

            <div className="col-span-12 mb-8 flex flex-col items-center text-center lg:col-span-3 lg:mb-0 lg:items-start lg:px-8 lg:text-left">
                <div className="flex w-full justify-center items-center lg:justify-start lg:items-start h-[70px]">
                    <Image src={'/startcoaching.svg'} width={39} height={40} />
                </div>
                <p className="mb-2 text-lg font-medium text-leland-gray-dark">Start coaching</p>
                <p className="w-2/3 text-lg text-leland-gray-light lg:w-auto">We’ll review your information and give you the green light to start coaching!</p>
            </div>

            <div className="col-span-12 mb-8 flex flex-col items-center text-center lg:col-span-3 lg:mb-0 lg:items-start lg:px-8 lg:text-left">
                <div className="flex w-full justify-center items-center lg:justify-start lg:items-start h-[70px]">
                    <Image src={'/buildbusiness.svg'} width={44} height={45} />
                </div>
                <p className="mb-2 text-lg font-medium text-leland-gray-dark">Build your business</p>
                <p className="w-2/3 text-lg text-leland-gray-light lg:w-auto">Earn money, build your brand, and guide the next generation of leaders</p>
            </div>
        </div>


    )
}

export default Steps
