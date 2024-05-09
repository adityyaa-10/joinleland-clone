import Hero from "@/components/Hero"
import NavBar from "@/components/NavBar"

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-28 sm:pt-60">
        <div className="w-full flex flex-col z-10">
          <Hero />
        </div>

      </div>
    </div>
  )
}

export default Home
