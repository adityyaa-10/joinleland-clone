const Features = () => {
  return (
    <section className="-mt-24 w-full items-center border-b border-[#E5E5E5] sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col">
        <header className="flex flex-col items-center space-y-2 text-center">
          <h2 className="text-base font-medium uppercase tracking-wider text-[#707070]">
            How it works
          </h2>
          <h3 className="max-w-sm text-4xl font-medium tracking-tighter">
            Achieving your goal is more doable than ever.
          </h3>
        </header>
        <div className="mt-20 flex flex-col gap-10 sm:mt-24 sm:flex-row sm:gap-0">
          <div className="flex flex-col items-center border-b border-[#E5E5E5] px-8 text-center sm:border-b-0 sm:px-0">
            <h2 className="text-xl font-medium">Find your coach</h2>
            <p className="mt-1 max-w-80 text-[#707070]">
              Browse 500+ experts and schedule free intro calls to get to know
              each coach.
            </p>
            <img
              src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Fimage-1.0ea453a7.png&w=750&q=75"
              alt="Find your coach"
              loading="lazy"
              width="653"
              height="716"
              decoding="async"
              data-nimg="1"
              className="mt-6"
            />
          </div>
          <div className="flex flex-col items-center border-b border-[#E5E5E5] px-8 text-center sm:border-b-0 sm:px-0">
            <h2 className="text-xl font-medium">
              Get custom-tailored coaching
            </h2>
            <p className="mt-1 max-w-80 text-[#707070]">
              Your coach will help you make a concrete plan and work on each
              step with you.
            </p>
            <img
              src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Fimage-1.0ea453a7.png&w=750&q=75"
              alt="Get custom-tailored coaching"
              loading="lazy"
              width="653"
              height="716"
              decoding="async"
              data-nimg="1"
              className="mt-6"
            />
          </div>
          <div className="flex flex-col items-center border-b border-[#E5E5E5] px-8 text-center sm:border-b-0 sm:px-0">
            <h2 className="text-xl font-medium">Reach your goal</h2>
            <p className="mt-1 max-w-80 text-[#707070]">
              Work with your coach to achieve your goal within your timeline.
            </p>
            <img
              src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Fimage-1.0ea453a7.png&w=750&q=75"
              alt="Reach your goal"
              loading="lazy"
              width="653"
              height="716"
              decoding="async"
              data-nimg="1"
              className="mt-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
