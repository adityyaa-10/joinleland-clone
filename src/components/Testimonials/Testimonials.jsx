
import TestimonialSliderLTR from "./TestimonialSliderLTR"
import TestimonialSliderRTL from "./TestimonialSliderRTL"
import Image from 'next/image'

const Testimonials = () => {
    return (
        <div className="w-full bg-black pb-32 pt-80">
            <section className="mx-auto flex w-full flex-col items-center justify-center">
                <h2 className="max-w-7xl px-6 text-center tracking-tighter text-4xl font-medium text-white">Leland coaches are changing lives every day.</h2>
                {/* <EachTestimonialCard /> */}

            </section>
            <div className="pt-8">
                <TestimonialSliderLTR />
                <TestimonialSliderRTL />
            </div>
            <div className="mt-28 px-6">
                <h3 class="text-center uppercase tracking-wider text-[#9b9b9b]">Get into organizations like</h3>
                <div className="mt-11 flex flex-wrap justify-center gap-x-6 gap-y-20 px-6 text-white">
                    <Image src={'/bcg.svg'} width={56} height={24} />
                    <Image src={'/stanford.svg'} width={111} height={44} />
                    <Image src={'/goldmansachs.svg'} width={96} height={38} />
                    <Image src={'/mckinsey.svg'} width={263} height={34} />
                    <Image src={'/harvard.svg'} width={193} height={48} />
                    <Image src={'/linkedin.svg'} width={122} height={34} />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
