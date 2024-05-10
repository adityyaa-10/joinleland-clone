

const EachMarketingCard = () => {
    return (
        <a href="/coach/lola-agabalogun" className="relative mx-2 flex flex-col items-center justify-between rounded-xl border border-[#E5E5E5] bg-white transition-all duration-150 hover:-translate-y-2 hover:shadow-lg">
            <div className="flex h-52 w-full flex-col items-center border-b border-[#E5E5E5] p-5 text-center">
                <div className="relative mb-4 size-20">
                    <img alt="Lola A." loading="lazy" decoding="async" data-nimg="fill" className="rounded-full object-cover absolute h-full w-full inset-0 text-transparent" sizes="80px"
                        src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                </div>
                <p className="text-xl font-medium text-[#333]">Lola A.</p>
                <p className="line-clamp-2 text-[#707070]">Business Strategy &amp; Operations, Product Management, Management Consulting and College Coach</p>
            </div>
            <div className="flex min-h-0 w-full flex-1 flex-col space-y-5 p-5">
                <div className="flex items-center">
                    <div className="relative size-10">
                        <img alt="Stripe" loading="lazy" decoding="async" data-nimg="fill" className="size-10 rounded object-cover absolute h-full w-full inset-0 text-transparent"
                            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                        />
                    </div>
                    <div className="pl-3">
                        <p className="line-clamp-1 font-medium text-[#333]">Stripe</p>
                        <p className="line-clamp-1 text-sm text-[#707070]">Strategy &amp; Product</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative size-10">
                        <img alt="McKinsey &amp; Company" loading="lazy" decoding="async" data-nimg="fill" className="size-10 rounded object-cover absolute h-full w-full inset-0 text-transparent"
                            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                        />
                    </div>
                    <div className="pl-3">
                        <p className="line-clamp-1 font-medium text-[#333]">McKinsey &amp; Company</p>
                        <p className="line-clamp-1 text-sm text-[#707070]">Business Analyst</p>
                    </div>
                </div>
            </div>
        </a>

    )
}

export default EachMarketingCard
