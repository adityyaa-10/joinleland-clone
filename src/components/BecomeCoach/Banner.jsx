const Banner = () => {
  return (
    <div className="mx-auto -mt-[275px] mb-24 max-w-[1500px] px-4 lg:px-12">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="image-inner relative pb-[50%]">
          <div className="absolute left-0 top-0 size-full">
            <img
              className="size-full object-cover object-center"
              src="https://site.joinleland.com/_next/static/media/big-card-image.654e646d.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="absolute left-0 top-0 flex size-full flex-col items-start justify-end p-4 lg:flex-row lg:items-end lg:justify-between lg:p-12">
          <p className="mb-4 w-full text-left text-5xl font-semibold leading-[1] text-white sm:text-[68px] lg:mb-0 lg:w-1/2 lg:text-7xl">
            Your clients are waiting for you.
          </p>
          <button>
            <div
              className="shadow-border hover:bg-[#15B078]-hover hover:border-[#15B078]-hover inline-flex cursor-pointer items-center justify-center space-x-2 rounded-lg border border-[#15B078] bg-[#15B078] px-5 py-4 text-base font-medium leading-tight text-white shadow-transparent disabled:bg-[#15B078] sm:whitespace-nowrap"
              aria-label="Become a Coach"
            >
              <span>Become a Coach</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
