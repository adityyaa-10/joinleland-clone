

const SignupForm = () => {
    return (
        <div class="grid gap-3">
            <button type="button"
                class="sm:whitespace-nowrap leading-tight items-center justify-center border shadow-border text-leland-gray-dark bg-white disabled:bg-white border-[#e5e7eb] hover:bg-[#f5f5f5] shadow-transparent p-3 text-base space-x-2 flex w-full font-medium rounded-lg cursor-pointer"
                aria-label="Continue with Google">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" class="w-5 h-5">
                    <g clip-path="url(#google_svg__a)">
                        <path fill="#4285F4"
                            d="M20.305 10.23c0-.68-.055-1.363-.173-2.032H10.7v3.851h5.401a4.629 4.629 0 0 1-1.998 3.039v2.499h3.222c1.892-1.742 2.98-4.314 2.98-7.357Z">
                        </path>
                        <path fill="#34A853"
                            d="M10.7 20c2.697 0 4.972-.885 6.629-2.413l-3.223-2.5c-.896.61-2.054.956-3.402.956-2.61 0-4.821-1.76-5.615-4.126H1.764v2.576A10.001 10.001 0 0 0 10.7 20Z">
                        </path>
                        <path fill="#FBBC04" d="M5.085 11.917a5.99 5.99 0 0 1 0-3.829V5.512H1.764a10.009 10.009 0 0 0 0 8.98l3.321-2.575Z">
                        </path>
                        <path fill="#EA4335"
                            d="M10.7 3.958a5.434 5.434 0 0 1 3.836 1.5l2.855-2.856A9.611 9.611 0 0 0 10.7.001a9.998 9.998 0 0 0-8.936 5.511l3.321 2.576c.79-2.37 3.006-4.13 5.615-4.13Z">
                        </path>
                    </g>
                    <defs>
                        <clipPath id="google_svg__a">
                            <path fill="#fff" d="M.5 0h20v20H.5z"></path>
                        </clipPath>
                    </defs>
                </svg>
                <span>Continue with Google</span>
            </button>
            <button type="button"
                class="sm:whitespace-nowrap leading-tight items-center justify-center border shadow-border text-leland-gray-dark bg-white disabled:bg-white border-[#e5e7eb] hover:bg-[#f5f5f5] shadow-transparent p-3 text-base space-x-2 flex w-full font-medium rounded-lg cursor-pointer"
                aria-label="Continue with LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" class="w-5 h-5">
                    <g clip-path="url(#linkedin_svg__a)">
                        <path fill="#0077B5"
                            d="M18.77 0H1.727C.91 0 .25.645.25 1.441v17.114C.25 19.352.91 20 .727 20H18.77c.816 0 1.48-.648 1.48-1.441V1.44C20.25.645 19.586 0 18.77 0ZM6.184 17.043h-2.97V7.496h2.97v9.547ZM4.699 6.195a1.72 1.72 0 1 1-.006-3.439 1.72 1.72 0 0 1 .006 3.44Zm12.594 10.848h-2.965v-4.64c0-1.106-.02-2.532-1.543-2.532-1.543 0-1.777 1.207-1.777 2.453v4.719H8.047V7.496h2.844v1.305h.039c.394-.75 1.363-1.543 2.804-1.543 3.004 0 3.559 1.976 3.559 4.547v5.238Z">
                        </path>
                    </g>
                    <defs>
                        <clipPath id="linkedin_svg__a">
                            <path fill="transparent" d="M.25 0h20v20h-20z"></path>
                        </clipPath>
                    </defs>
                </svg>
                <span>Continue with LinkedIn</span>
            </button>
            <button type="button"
                class="sm:whitespace-nowrap leading-tight items-center justify-center border shadow-border text-leland-gray-dark bg-white disabled:bg-white border-[#e5e7eb] hover:bg-[#f5f5f5] shadow-transparent p-3 text-base space-x-2 flex w-full font-medium rounded-lg cursor-pointer"
                aria-label="Continue with Apple">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 24" class="w-5 h-5">
                    <path fill="currentColor"
                        d="M18.74 8.182c-.134.108-2.482 1.492-2.482 4.572 0 3.561 2.988 4.821 3.078 4.852-.014.077-.475 1.726-1.576 3.406-.981 1.478-2.006 2.954-3.566 2.954s-1.96-.948-3.76-.948c-1.755 0-2.379.98-3.805.98-1.426 0-2.422-1.368-3.566-3.048C1.738 18.977.667 15.912.667 13.003c0-4.665 2.898-7.14 5.751-7.14 1.516 0 2.78 1.042 3.731 1.042.906 0 2.318-1.104 4.043-1.104.653 0 3.002.062 4.547 2.38Zm-5.367-4.356c.713-.886 1.218-2.115 1.218-3.344 0-.17-.014-.343-.044-.482-1.16.046-2.54.809-3.373 1.82-.653.777-1.263 2.006-1.263 3.251 0 .187.03.375.043.435.073.014.193.03.312.03 1.041 0 2.35-.729 3.107-1.71Z"
                        vector-effect="non-scaling-stroke"></path>
                </svg>
                <span>Continue with Apple</span>
            </button>
            <div class="relative flex w-full items-center justify-center">
                <hr class="my-8 h-px w-full border-0 bg-gray-200" />
                <span class="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-lg text-[#707070]">or</span>
            </div>
            <form class="grid gap-3">
                <div class="flex flex-col lg:flex-row">
                    <div class="flex-1 lg:mr-3">
                        <div class="space-y-3">
                            <div class="flex items-center overflow-hidden rounded-lg border border-[#e5e7eb] transition duration-100 focus-within:border-[#9B9B9B]">
                                <input class="block w-full bg-white p-4 shadow-none outline-none outline-0 ring-0 placeholder:text-gray-400"
                                    type="text" placeholder="First name" name="firstName" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 flex-1 lg:mt-0">
                        <div class="space-y-3">
                            <div class="flex items-center overflow-hidden rounded-lg border border-[#e5e7eb] transition duration-100 focus-within:border-[#9B9B9B]">
                                <input class="block w-full bg-white p-4 shadow-none outline-none outline-0 ring-0 placeholder:text-gray-400"
                                    type="text" placeholder="Last name" name="lastName" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="space-y-3">
                        <div class="flex items-center overflow-hidden rounded-lg border border-[#e5e7eb] transition duration-100 focus-within:border-[#9B9B9B]">
                            <input class="block w-full bg-white p-4 shadow-none outline-none outline-0 ring-0 placeholder:text-gray-400"
                                type="email" placeholder="Email address" name="email" />
                        </div>
                    </div>
                </div>
                <button type="submit"
                    class="sm:whitespace-nowrap leading-tight items-center justify-center border shadow-border text-white bg-[#15B078] border-[#15B078] disabled:bg-[#15B078] hover:bg-[#4fbd95] hover:border-[#4fbd95] shadow-transparent p-3 text-base space-x-2 inline-flex font-medium rounded-lg cursor-pointer"
                    aria-label="Create an account" data-control-name="submit-auth-card-form">
                    <span>Create an account</span>
                </button>
            </form>
        </div>
    )
}

export default SignupForm
