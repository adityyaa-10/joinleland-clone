"use client";
import EachTestimonialCard from "./EachTestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function TestimonialSliderRTL() {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 7000,
          autoplaySpeed: 0,
          cssEase: "linear",
          arrows: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 7000,
          autoplaySpeed: 0,
          cssEase: "linear",
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 7000,
          autoplaySpeed: 0,
          cssEase: "linear",
          arrows: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 7000,
          autoplaySpeed: 0,
          cssEase: "linear",
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <EachTestimonialCard />
        </div>
        <div>
          <EachTestimonialCard />
        </div>
        <div>
          <EachTestimonialCard />
        </div>
        <div>
          <EachTestimonialCard />
        </div>
        <div>
          <EachTestimonialCard />
        </div>
        <div>
          <EachTestimonialCard />
        </div>
      </Slider>
    </div>
  );
}

export default TestimonialSliderRTL;
