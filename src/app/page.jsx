import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar";
import PopularCategories from "@/components/Categories/PopularCategories";
import Marketing from "@/components/Marketing/Marketing";
import Features from "@/components/Features";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";
import GetStarted from "@/components/GetStarted";
import Testimonials from "@/components/Testimonials/Testimonials";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <div className="pt-28 sm:pt-60">
        <div className="flex min-h-screen w-full flex-col">
          <Hero />
          <PopularCategories />
          <Marketing />
          <Features />
          <UpcomingEvents />
          <GetStarted />
          <Testimonials />
          <Join />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
