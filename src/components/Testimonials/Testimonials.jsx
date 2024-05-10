
import TestimonialSliderLTR from "./TestimonialSliderLTR"
import TestimonialSliderRTL from "./TestimonialSliderRTL"

const Testimonials = () => {
    return (
        <div className="w-full bg-black pb-32 pt-80">
            <section className="mx-auto flex w-full flex-col items-center justify-center">
                <h2 className="max-w-7xl px-6 text-center tracking-tighter text-4xl font-medium text-white">Leland coaches are changing lives every day.</h2>
                {/* <EachTestimonialCard /> */}

            </section>
            <div className="py-8">
                <TestimonialSliderLTR />
                <TestimonialSliderRTL />
            </div>
        </div>
    )
}

export default Testimonials
