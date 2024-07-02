import CategoriesSlider from "./CategoriesSlider";

const PopularCategories = () => {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl sm:mt-20 sm:px-6">
      <div className="space-y-4 px-6 pb-7 sm:space-y-1 sm:px-0">
        <h2 className="text-4xl tracking-tighter">Popular Categories</h2>
        <h3 className="text-xl tracking-tighter text-[#707070]">
          Use Leland to{" "}
          <a className="underline underline-offset-2" href="/search/school">
            get into school
          </a>
          {", "}
          <a className="underline underline-offset-2" href="/search/career">
            build your career
          </a>
          {", "}
          <a className="underline underline-offset-2" href="/search/test">
            or take a test
          </a>
          .
        </h3>
      </div>
      <CategoriesSlider />
    </section>
  );
};

export default PopularCategories;
