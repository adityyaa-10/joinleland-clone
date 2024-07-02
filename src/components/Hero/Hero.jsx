import HeroSlider from "./HeroSlider";
import Image from "next/image";
import Header from "./Header";
import PreferenceSelector from "./PreferenceSelector";
import Featured from "./Featured";

const Hero = () => {
  return (
    <section className="mx-auto flex w-full flex-col justify-center text-center">
      <Header />
      <PreferenceSelector />
      <p className="mt-20 px-6 text-sm uppercase tracking-wider text-[#707070] sm:mt-32">
        JOIN 50,000+ Real people achieving their goals on Leland
      </p>
      <HeroSlider />
      <Featured />
    </section>
  );
};

export default Hero;
