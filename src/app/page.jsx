import Hero from "@/components/Hero/Hero"
import NavBar from "@/components/NavBar"
import PopularCategories from "@/components/Categories/PopularCategories"

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-28 sm:pt-60">
        <div className="w-full flex flex-col">
          <Hero />
          <PopularCategories />
        </div>

      </div>
    </div>
  )
}

export default Home
