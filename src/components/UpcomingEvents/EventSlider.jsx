"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EachEventCard from "./EachEventCard";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} rounded-full border border-[#707070] p-2 absolute top-1/2 right-4 transform -translate-y-1/2`}
            onClick={onClick}
        >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} rounded-full border border-[#707070] p-2 absolute top-1/2 left-4 transform -translate-y-1/2`}
            onClick={onClick}
        >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
    );
}


const EventSlider = () => {
    var settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        < div className="slider-container" >
            <Slider {...settings}>
                <EachEventCard />
                <EachEventCard />
                <EachEventCard />
                <EachEventCard />
                <EachEventCard />
                <EachEventCard />
            </Slider>
        </div>
    )
}

export default EventSlider
