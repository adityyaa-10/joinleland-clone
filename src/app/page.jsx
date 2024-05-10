import Hero from "@/components/Hero/Hero"
import NavBar from "@/components/NavBar"
import PopularCategories from "@/components/Categories/PopularCategories"
import Marketing from "@/components/Marketing/Marketing"
import Features from "@/components/Features"

const Home = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <div className="pt-28 sm:pt-60">
        <div className="w-full flex flex-col">
          <Hero />
          <PopularCategories />
          <Marketing />
          <Features />
        </div>

      </div>
    </div>
  )
}

export default Home
