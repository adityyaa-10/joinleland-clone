
const Join = () => {
    return (
        <section className="flex flex-col items-center space-y-6 px-6 py-32 text-center">
            <h2 className="font-condensed text-4xl font-medium">Ready to get started?</h2>
            <p className="max-w-2xl text-xl text-leland-gray-light">A dedicated mentor makes all the difference. Tell us your goals, budget, and background, and we’ll connect you to the perfect coach.</p>
            <a href="https://www.joinleland.com/signup" className="w-full sm:w-auto">
                <button type="button" className="sm:whitespace-nowrap leading-tight items-center justify-center border shadow-border text-white bg-black disabled:bg-black border-black hover:bg-[#333] hover:border-[#333] shadow-transparent py-4 px-5 text-base space-x-2 inline-flex font-medium rounded-lg cursor-pointer" aria-label="Join Leland">
                    <span>Join Leland</span>
                </button>
            </a>
        </section>

    )
}

export default Join
