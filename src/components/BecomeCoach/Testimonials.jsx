const Testimonials = () => {
  return (
    <div className="mx-auto mb-24 max-w-[1500px] px-4 delay-300 lg:px-12">
      <h2 className="mb-5 text-4xl font-semibold leading-10 tracking-tighter text-[#333]">
        Join hundreds of coaches growing their business on Leland.
      </h2>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 rounded-3xl bg-[#F5F5F5] p-6 lg:col-span-6">
          <div className="flex items-center pb-5">
            <div className="w-12 rounded-xl">
              <div className="relative pb-[100%]">
                <div className="absolute left-0 top-0 size-full">
                  <img
                    className="size-full rounded-lg object-cover object-center"
                    src="https://site.joinleland.com/_next/static/media/jesseL.4b7db665.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="ml-4">
              <p className="subheading-text pr-3 tracking-tighter text-[#333]">
                Jesse L.
              </p>
              <p className="text-[#707070]">MBA Coach</p>
            </div>
          </div>
          <div>
            <p className="mb-5 text-lg italic text-[#707070]">
              “When I heard about Leland, I felt an immediate calling to get
              involved. Education, and the opportunities that it affords, is so
              vital, especially in bridging the gap between the privileged few
              and the non-quite-as-privileged many. That is why I coach.”
            </p>
            <div className="flex items-center text-lg font-medium text-[#15B078] transition-opacity duration-300 lg:hover:opacity-50">
              <span className="pr-3">View Jesse's Profile</span>
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
            </div>
          </div>
        </div>
        <div className="col-span-12 rounded-3xl bg-[#F5F5F5] p-6 lg:col-span-6">
          <div className="flex items-center pb-5">
            <div className="w-12 rounded-xl">
              <div className="relative pb-[100%]">
                <div className="absolute left-0 top-0 size-full">
                  <img
                    className="size-full rounded-lg object-cover object-center"
                    src="https://site.joinleland.com/_next/static/media/samA.eebe78dd.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="ml-4">
              <p className="subheading-text pr-3 tracking-tighter text-[#333]">
                Sam A.
              </p>
              <p className="text-[#707070]">Management Consulting Coach</p>
            </div>
          </div>
          <div>
            <p className="mb-5 text-lg italic text-[#707070]">
              “Building relationships with individuals from outside my typical
              circle, hearing about their paths and how they’re preparing for
              careers is inspiring and motivating. A little extra money on the
              side is never a bad perk either. If you’re interested and
              qualified to coach, I’d recommend giving it a try. It brings a lot
              of benefits aside from the money and has kept me in touch with a
              lot of the skills I developed during my time at Bain”
            </p>
            <div className="flex items-center text-lg font-medium text-[#15B078] transition-opacity duration-300 lg:hover:opacity-50">
              <span className="pr-3">View Sam's Profile</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
