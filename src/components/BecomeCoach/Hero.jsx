import React from "react";

const Hero = () => {
  return (
    <div className="mx-auto mb-12 flex max-w-[1500px] flex-wrap items-center px-4 py-12 lg:mb-24 lg:flex-nowrap lg:px-12">
      <div className="mb-8 w-full lg:mb-0 lg:w-5/12">
        <div className="w-full lg:w-5/6">
          <img
            src="https://site.joinleland.com/_next/static/media/coach-hero.e1c30c1d.jpg"
            alt=""
            className="size-full object-contain object-center"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center delay-100 lg:w-7/12 lg:items-start">
        <h1 className="mb-10 text-center text-5xl font-bold leading-[1] tracking-normal text-[#333] sm:text-6xl lg:text-left">
          Monetize your expertise.
          <br />
          <span className="text-[#9b9b9b]">Guide the next generation.</span>
        </h1>
        <p className="mb-10 text-center text-xl text-[#707070] lg:text-left lg:text-2xl">
          Coaching can bring in extra income and help you build lifelong
          connections with tomorrow’s leaders.
        </p>
        <a href="https://coach.joinleland.com/signup">
          <button
            type="button"
            className="shadow-border inline-flex cursor-pointer items-center justify-center space-x-2 rounded-lg border border-[#15B078] bg-[#15B078] px-5 py-4 text-base font-medium leading-tight text-white shadow-transparent disabled:bg-[#15B078] sm:whitespace-nowrap"
            aria-label="Become a Coach"
          >
            <span>Become a Coach</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
