import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./style.css"
import React from 'react'
import Image from "next/image";

const ImageSlider = ({images}) => {

const settings = {
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay: true,
    autoplaySpeed: 5000,

};
return (
	<>
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((item) => (
                    <div key={item.id}>
                    <Image src={item.src} alt={item.alt} />
                    </div>
                ))}
            </Slider>
            <div className="scroll-for-more">scroll to begin</div>
            <div className="hero-image-footer-details">
                <div className="hero-image-ftr-detail-left">
                    <div className="triangle-top-heroimg"></div>
                    <div className="triangle-top-heroimg-detail"></div>
                    <div className="triangle-top-heroimg-bg"></div>
                </div>
                <div className="hero-image-ftr-detail-right">
                    <div className="triangle-top-heroimg"></div>
                    <div className="triangle-top-heroimg-detail"></div>
                    <div className="triangle-top-heroimg-bg"></div>
                </div>
            </div>
        </div>
    </>
)
}
export default ImageSlider;
