import MarketingSlider from "./MarketingSlider";

const Marketing = () => {
  return (
    <>
      <section className="mt-16 w-full bg-[#f8f7f4] py-16 sm:mt-20 sm:py-24">
        <div className="relative mb-20 flex w-full flex-col">
          <div className="mx-auto max-w-7xl space-y-10 px-6 sm:px-20">
            <div className="flex w-full flex-col-reverse items-start justify-between gap-10 sm:flex-row sm:gap-20">
              <div className="flex max-w-sm grow flex-col">
                <h2 className="font-condensed text-4xl font-medium">
                  It’s never been easier to get help from an expert.
                </h2>
                <div className="mt-4">
                  <h3 className="flex items-center gap-2 text-xl font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="size-4 shrink-0"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9.482 19.741c.295-.039.593.041.828.222l1.083.831a.995.995 0 0 0 1.213 0l1.124-.863a.995.995 0 0 1 .737-.197l1.406.185a.997.997 0 0 0 1.051-.607l.541-1.308a.993.993 0 0 1 .54-.54l1.308-.54a.996.996 0 0 0 .607-1.052l-.178-1.355a1.117 1.117 0 0 1 .222-.828l.831-1.083a.995.995 0 0 0 0-1.213l-.863-1.124a.995.995 0 0 1-.197-.737l.185-1.406a.997.997 0 0 0-.607-1.05l-1.308-.542a.993.993 0 0 1-.54-.54l-.54-1.308a.996.996 0 0 0-1.052-.607l-1.406.185a.99.99 0 0 1-.736-.195l-1.124-.863a.995.995 0 0 0-1.213 0l-1.124.863c-.21.16-.475.231-.737.197l-1.406-.185a.997.997 0 0 0-1.05.607l-.54 1.308a1.006 1.006 0 0 1-.54.54l-1.309.54a.997.997 0 0 0-.607 1.051l.185 1.406a1 1 0 0 1-.197.736l-.863 1.124a.995.995 0 0 0 0 1.213l.863 1.124c.161.21.232.475.197.737l-.185 1.406a.997.997 0 0 0 .607 1.051l1.308.541a.993.993 0 0 1 .54.54l.541 1.308a.996.996 0 0 0 1.051.607l1.354-.179"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m14.797 10.603-3.501 3.501-2.1-2.1"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </svg>
                    <span>Stick to your budget</span>
                  </h3>
                  <p className="text-leland-gray-light mt-2">
                    Leland has coaches to fit virtually every budget.
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="flex items-center gap-2 text-xl font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="size-4 shrink-0"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9.482 19.741c.295-.039.593.041.828.222l1.083.831a.995.995 0 0 0 1.213 0l1.124-.863a.995.995 0 0 1 .737-.197l1.406.185a.997.997 0 0 0 1.051-.607l.541-1.308a.993.993 0 0 1 .54-.54l1.308-.54a.996.996 0 0 0 .607-1.052l-.178-1.355a1.117 1.117 0 0 1 .222-.828l.831-1.083a.995.995 0 0 0 0-1.213l-.863-1.124a.995.995 0 0 1-.197-.737l.185-1.406a.997.997 0 0 0-.607-1.05l-1.308-.542a.993.993 0 0 1-.54-.54l-.54-1.308a.996.996 0 0 0-1.052-.607l-1.406.185a.99.99 0 0 1-.736-.195l-1.124-.863a.995.995 0 0 0-1.213 0l-1.124.863c-.21.16-.475.231-.737.197l-1.406-.185a.997.997 0 0 0-1.05.607l-.54 1.308a1.006 1.006 0 0 1-.54.54l-1.309.54a.997.997 0 0 0-.607 1.051l.185 1.406a1 1 0 0 1-.197.736l-.863 1.124a.995.995 0 0 0 0 1.213l.863 1.124c.161.21.232.475.197.737l-.185 1.406a.997.997 0 0 0 .607 1.051l1.308.541a.993.993 0 0 1 .54.54l.541 1.308a.996.996 0 0 0 1.051.607l1.354-.179"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m14.797 10.603-3.501 3.501-2.1-2.1"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </svg>
                    <span>Find the perfect mentor</span>
                  </h3>
                  <p className="text-leland-gray-light mt-2">
                    With 500+ coaches across 50 categories, Leland has someone
                    who can help you achieve your goal.
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="flex items-center gap-2 text-xl font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="size-4 shrink-0"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9.482 19.741c.295-.039.593.041.828.222l1.083.831a.995.995 0 0 0 1.213 0l1.124-.863a.995.995 0 0 1 .737-.197l1.406.185a.997.997 0 0 0 1.051-.607l.541-1.308a.993.993 0 0 1 .54-.54l1.308-.54a.996.996 0 0 0 .607-1.052l-.178-1.355a1.117 1.117 0 0 1 .222-.828l.831-1.083a.995.995 0 0 0 0-1.213l-.863-1.124a.995.995 0 0 1-.197-.737l.185-1.406a.997.997 0 0 0-.607-1.05l-1.308-.542a.993.993 0 0 1-.54-.54l-.54-1.308a.996.996 0 0 0-1.052-.607l-1.406.185a.99.99 0 0 1-.736-.195l-1.124-.863a.995.995 0 0 0-1.213 0l-1.124.863c-.21.16-.475.231-.737.197l-1.406-.185a.997.997 0 0 0-1.05.607l-.54 1.308a1.006 1.006 0 0 1-.54.54l-1.309.54a.997.997 0 0 0-.607 1.051l.185 1.406a1 1 0 0 1-.197.736l-.863 1.124a.995.995 0 0 0 0 1.213l.863 1.124c.161.21.232.475.197.737l-.185 1.406a.997.997 0 0 0 .607 1.051l1.308.541a.993.993 0 0 1 .54.54l.541 1.308a.996.996 0 0 0 1.051.607l1.354-.179"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m14.797 10.603-3.501 3.501-2.1-2.1"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </svg>
                    <span>Protect your purchase</span>
                  </h3>
                  <p className="text-leland-gray-light mt-2">
                    <span>
                      With{" "}
                      <a
                        className="underline underline-offset-2"
                        href="/legal/experience-guarantee"
                      >
                        Leland’s Experience Guarantee
                      </a>
                      , you can feel confident in your coaching purchase.
                    </span>
                  </p>
                </div>
              </div>
              <img
                src="https://images.pexels.com/photos/20142606/pexels-photo-20142606/free-photo-of-balcony-greece.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full sm:w-1/2"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto mt-16 w-full max-w-7xl -translate-y-[50%] pb-4">
        <MarketingSlider />
      </div>
    </>
  );
};

export default Marketing;
