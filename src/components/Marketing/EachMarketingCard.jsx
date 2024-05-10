

const EachMarketingCard = () => {
    return (
        <a href="/coach/lola-agabalogun" class="relative mx-2 flex flex-col items-center justify-between rounded-xl border border-[#E5E5E5] bg-white transition-all duration-150 hover:-translate-y-2 hover:shadow-lg">
            <div class="flex h-52 w-full flex-col items-center border-b border-[#E5E5E5] p-5 text-center">
                <div class="relative mb-4 size-20">
                    <img alt="Lola A." loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover absolute h-full w-full inset-0 text-transparent" sizes="80px"
                        src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                </div>
                <p class="text-xl font-medium text-[#333]">Lola A.</p>
                <p class="line-clamp-2 text-[#707070]">Business Strategy &amp; Operations, Product Management, Management Consulting and College Coach</p>
            </div>
            <div class="flex min-h-0 w-full flex-1 flex-col space-y-5 p-5">
                <div class="flex items-center">
                    <div class="relative size-10">
                        <img alt="Stripe" loading="lazy" decoding="async" data-nimg="fill" class="size-10 rounded object-cover absolute h-full w-full inset-0 text-transparent"
                            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                        />
                    </div>
                    <div class="pl-3">
                        <p class="line-clamp-1 font-medium text-[#333]">Stripe</p>
                        <p class="line-clamp-1 text-sm text-[#707070]">Strategy &amp; Product</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="relative size-10">
                        <img alt="McKinsey &amp; Company" loading="lazy" decoding="async" data-nimg="fill" class="size-10 rounded object-cover absolute h-full w-full inset-0 text-transparent"
                            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                        />
                    </div>
                    <div class="pl-3">
                        <p class="line-clamp-1 font-medium text-[#333]">McKinsey &amp; Company</p>
                        <p class="line-clamp-1 text-sm text-[#707070]">Business Analyst</p>
                    </div>
                </div>
            </div>
        </a>

    )
}

export default EachMarketingCard
