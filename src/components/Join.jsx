const Join = () => {
  return (
    <section className="flex flex-col items-center space-y-6 px-6 py-32 text-center">
      <h2 className="font-condensed text-4xl font-medium">
        Ready to get started?
      </h2>
      <p className="text-leland-gray-light max-w-2xl text-xl">
        A dedicated mentor makes all the difference. Tell us your goals, budget,
        and background, and we’ll connect you to the perfect coach.
      </p>
      <a href="https://www.joinleland.com/signup" className="w-full sm:w-auto">
        <button
          type="button"
          className="shadow-border inline-flex cursor-pointer items-center justify-center space-x-2 rounded-lg border border-black bg-black px-5 py-4 text-base font-medium leading-tight text-white shadow-transparent hover:border-[#333] hover:bg-[#333] disabled:bg-black sm:whitespace-nowrap"
          aria-label="Join Leland"
        >
          <span>Join Leland</span>
        </button>
      </a>
    </section>
  );
};

export default Join;
