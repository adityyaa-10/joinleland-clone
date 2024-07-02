const EachTestimonialCard = () => {
  return (
    <section>
      <div className="overflow-hiddenr mb-4 mr-4 flex flex-col self-stretch rounded-lg border border-[#70707080] bg-[#33333380] text-lg transition-colors duration-200 hover:border-[#9b9b9b]">
        <div className="flex grow flex-col gap-4 p-6">
          <div className="flex items-center justify-between pb-4">
            <span className="text-[#9b9b9b]">Anonymous</span>
            <span className="text-[#9b9b9b]">Feb 5</span>
          </div>
          <p className="line-clamp-4 text-white">
            "Michael has been an invaluable help in my casing practice as he
            gave me many great insights on how consultants would tackle a case
            which in turn helped me sharpen my consulting lingo. I would highly
            recommend any medium or advanced level caser to seek Michael's help
            in refining your case framework, brainstorming structure and
            communication abilities. With his help, I managed to clinch an offer
            from MBB! Thank you!"
          </p>
          <div className="flex items-center">
            <img
              alt="Bain & Company Logo"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              className="mr-4 size-6 rounded-full object-contain text-transparent"
              src="https://leland.imgix.net/profile-photos/65b622bc6b439d39a88ba127.jpg?fit=crop&amp;crop=faces&amp;h=96&amp;w=96"
            />
            <span className="line-clamp-1 text-[#9b9b9b]">
              Landed a role at Bain &amp; Company
            </span>
          </div>
        </div>
        <a
          href="/coach/m-c"
          className="hover:bg-leland-gray-dark flex grow-0 items-center justify-between border-t border-[#70707080] px-4 py-3 text-[#9b9b9b] transition-colors duration-100 hover:text-white"
        >
          <span className="line-clamp-1">Coached by Michael C.</span>
          <img
            className="size-6 rounded-full object-cover"
            src="https://leland.imgix.net/profile-photos/65b622bc6b439d39a88ba127.jpg?fit=crop&amp;crop=faces&amp;h=96&amp;w=96"
            alt="Michael C."
            referrerPolicy="no-referrer"
          />
        </a>
      </div>
    </section>
  );
};

export default EachTestimonialCard;
