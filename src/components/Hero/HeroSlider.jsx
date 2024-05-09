"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const HeroSlider = () => {
    const settings = {
        slidesToShow: 8,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 2700,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    speed: 2100,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    speed: 2100,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    speed: 2100,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    arrows: false,
                }
            }
        ]
    };
    return (
        <div className="mb-4 pt-8">
            <div className="slider-container flex-wrap">
                <Slider {...settings}>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div><div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div><div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>
                    <div>
                        <Image src={'/bain.png'} width={150} height={100} />
                    </div>

                </Slider>
            </div>


        </div>
    )
}

export default HeroSlider