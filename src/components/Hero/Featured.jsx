import Image from 'next/image'
const Featured = () => {
    return (
        <section className="mt-4 w-full flex flex-wrap items-center justify-center gap-6 bg-black px-6 py-8 text-white sm:gap-14">
            <span className="text-lg font-medium">Featured in</span>
            <div className="transition-opacity duration-200 ease-in-out hover:opacity-70">
                <Image src={'/forbes.svg'} width={100} height={100} />
            </div>
            <div className="transition-opacity duration-200 ease-in-out hover:opacity-70">
                <Image src={'/business.svg'} width={100} height={100} />
            </div>
            <div className="transition-opacity duration-200 ease-in-out hover:opacity-70">
                <Image src={'/tc.svg'} width={100} height={100} />
            </div>
            <div className="transition-opacity duration-200 ease-in-out hover:opacity-70">
                <Image src={'/protocol.svg'} width={100} height={100} />
            </div>
        </section>
    )
}

export default Featured
