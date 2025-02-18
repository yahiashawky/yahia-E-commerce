import React from 'react'
import './partner.css'
import image1 from '../../img/vendor-1.jpg'
import image2 from '../../img/vendor-2.jpg'
import image3 from '../../img/vendor-3.jpg'
import image4 from '../../img/vendor-4.jpg'
import image5 from '../../img/vendor-5.jpg'
import image6 from '../../img/vendor-6.jpg'
import image7 from '../../img/vendor-7.jpg'
import image8 from '../../img/vendor-8.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Partner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1700,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
      };
  return (
    <Slider {...settings} className='parent-partners container'>
        <div className="child-partner">
            <img src={image1} alt="" />
        </div>
        <div className="child-partner">
            <img src={image2} alt="" />
        </div>
        <div className="child-partner">
            <img src={image3} alt="" />
        </div>
        <div className="child-partner">
            <img src={image4} alt="" />
        </div>
        <div className="child-partner">
            <img src={image5} alt="" />
        </div>
        <div className="child-partner">
            <img src={image6} alt="" />
        </div>
        <div className="child-partner">
            <img src={image7} alt="" />
        </div>
        <div className="child-partner">
            <img src={image8} alt="" />
        </div>
      
    </Slider>
  )
}

export default Partner
