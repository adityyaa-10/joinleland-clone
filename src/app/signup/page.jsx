import SignupForm from "@/components/SignupForm";

const Signup = () => {
  return (
    <div class="grid h-full grid-cols-12">
      <div class="relative col-span-4 hidden h-full min-h-screen bg-cover bg-center p-8 lg:block">
        <img
          alt=""
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          class="absolute bottom-0 left-0 right-0 top-0 z-0 size-full object-cover object-center text-transparent"
          sizes="33vw"
          src="https://www.joinleland.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauth.20cfe275.jpg&w=750&q=75"
        />
        <a
          class="fixed left-6 top-6 z-10 block rounded-full bg-white p-2 shadow-lg"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 28"
            class="size-7 text-[#15B078]"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m25.67 2.334-17.5 5.25-5.833 18.084 18.083-5.25 5.25-18.084ZM14.004 16.917a2.917 2.917 0 1 0 0-5.833 2.917 2.917 0 0 0 0 5.833Z"
              clipRule="evenodd"
              vectorEffect="non-scaling-stroke"
            ></path>
          </svg>
        </a>
      </div>
      <a
        class="col-span-12 mt-20 block place-self-center rounded-full shadow-lg lg:hidden"
        href="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 31 31"
          class="size-11 rounded-lg"
        >
          <path fill="#15b078" d="M0 0h31v31H0z"></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="m24 7-12.75 3.825L7 24l13.175-3.825L24 7Zm-8.5 10.625a2.125 2.125 0 1 0 0-4.25 2.125 2.125 0 0 0 0 4.25Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
      <div class="col-span-12 flex flex-col items-start p-8 lg:col-span-8 lg:justify-center lg:p-20">
        <div class="max-w-md place-self-center lg:w-3/4">
          <div>
            <h1 class="mb-2.5 w-full text-center text-4xl font-medium tracking-tight">
              Create your Leland account
            </h1>
            <p class="mb-8 w-full text-center leading-5 text-gray-500">
              By continuing below, you agree to Leland’s
              <a class="text-[#15B078]"> terms </a>
              and <a class="text-[#15B078]">privacy policy</a>.
            </p>
            <div class="mb-5 grid w-full gap-6">
              <SignupForm />
            </div>
            <p class="w-full text-center text-[#707070]">
              Already have an account?
              <a class="text-[#15B078]" href="/login">
                {" "}
                Log in
              </a>
            </p>
            <div class="mt-4 w-full text-center text-[#9B9B9B]">
              <a class="px-2">Terms &amp; Conditions</a>·
              <a class="px-2">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
