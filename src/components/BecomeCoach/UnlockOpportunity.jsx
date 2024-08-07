const UnlockOpportunity = () => {
  return (
    <div className="mx-auto mb-20 h-auto max-w-[1500px] px-4 lg:px-12">
      <div className="border-leland-gray-stroke relative flex w-full flex-wrap items-center justify-end overflow-hidden rounded-3xl border bg-white bg-cover bg-center lg:flex-nowrap">
        <div className="left-0 top-0 size-full lg:absolute lg:w-1/3">
          <img
            src="https://site.joinleland.com/_next/static/media/Unlock-Opportunity-Graphic.5e076e20.png"
            alt=""
            className="size-full object-cover object-right"
          />
        </div>
        <div className="w-full px-4 py-10 lg:w-2/3 lg:py-12 lg:pl-12 lg:pr-24">
          <h2 className="text-leland-black mb-5 text-lg font-medium">
            Unlock opportunity
          </h2>
          <p className="text-leland-gray-light mb-5 text-lg">
            There’s no better feeling than helping someone accomplish their
            goals. Come change lives with us.
          </p>
          <a
            href="https://coach.joinleland.com/signup"
            className="flex items-center text-lg text-[#15B078] transition-opacity duration-300 lg:hover:opacity-50"
          >
            <span className="pr-3">Become a coach</span>
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8327 5H1.16602"
                stroke="#15B078"
                strokeWidth="1.5px"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              ></path>
              <path
                d="M8.66602 9.16667L12.8327 5"
                stroke="#15B078"
                strokeWidth="1.5px"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              ></path>
              <path
                d="M8.66602 0.833313L12.8327 4.99998"
                stroke="#15B078"
                strokeWidth="1.5px"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnlockOpportunity;
