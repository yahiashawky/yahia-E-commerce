import React from 'react';
import './header.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {  useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate();
    const handleButtonclick = () => {
      navigate("/shop")
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 1700,
        slidesToShow: 1,
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
          slidesToShow: 1,
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

    <div className='header container'>
       <div  className="header-left">
        <Slider {...settings}>
        <div className="header-left-man h">
            <div>
                <h2>Men Fashion</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, expedita incidunt fugit debitis sequi reiciendis laborum tenetur perspiciatis distinctio saepe nesciunt repudiandae, ex maxime nam quis sapiente, at autem quae.</p>
                <button onClick={handleButtonclick}>Shop Now</button>
            </div>
        </div>
        <div className="header-left-Woman h">
            <div>
                <h2>Woman Fashion</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam commodi quos, illum beatae cupiditate in pariatur libero facere quibusdam illo? Iure minus inventore praesentium totam. Consectetur minima molestiae incidunt commodi?</p>
                <button onClick={handleButtonclick}>Shop Now</button>
            </div>
        </div>
        <div className="header-left-kids h">
            <div>
                <h2>Kids Fashion</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam commodi quos, illum beatae cupiditate in pariatur libero facere quibusdam illo? Iure minus inventore praesentium totam. Consectetur minima molestiae incidunt commodi?</p>
                <button onClick={handleButtonclick}>Shop Now</button>
            </div>
        </div>
        </Slider>
       
       </div>
       <div className="header-right">
        <div className="header-right-up s">
            <div>
                <h4>Save 20%</h4>
                <h2>Special Offer</h2>
                <button onClick={handleButtonclick}>Shop Now</button>
            </div>
        </div>
        <div className="header-right-down s">
        <div>
                <h4>Save 20%</h4>
                <h2>Special Offer</h2>
                <button onClick={handleButtonclick}>Shop Now</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Header
