import CategoriesSlider from "./CategoriesSlider"

const PopularCategories = () => {
    return (
        <section className="mx-auto mt-16 w-full max-w-7xl sm:mt-20 sm:px-6">
            <div class="space-y-4 px-6 pb-7 sm:space-y-1 sm:px-0">
                <h2 class="tracking-tighter text-4xl">Popular Categories</h2>
                <h3 class="text-xl text-[#707070] tracking-tighter">
                    Use Leland to{
                        ' '
                    }
                    <a class="underline underline-offset-2" href="/search/school">get into school</a>{', '}
                    <a class="underline underline-offset-2" href="/search/career">build your career</a>{', '}
                    <a class="underline underline-offset-2" href="/search/test">or take a test</a>.
                </h3>
            </div>
            <CategoriesSlider />

        </section>
    )
}

export default PopularCategories
