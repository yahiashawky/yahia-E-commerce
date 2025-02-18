import React from 'react'
import image1 from '../../img/about.jpg';
import './about.css';
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  const handleButtonClick = () =>{
    navigate('/shop');
  }
  
  return (
    <div className='about container'>
      <h1>About <span>US</span></h1>
      <div className="about-content">
        <div className="about-left">
          <img src={image1} alt="" />
        </div>
        <div className="about-right">
          <h2>Welcome To <span>Bravo Shop</span> </h2>
          <p> <span>Bravo Shop</span> is Best online shopping Company Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ullam, quaerat illo accusantium corrupti nobis! Molestias placeat voluptate vero possimus harum doloribus enim, neque aliquid reprehenderit, labore perferendis deleniti nobis?</p>
          <button onClick={handleButtonClick}>Shop Now</button>
        </div>
      </div>
      
    </div>
  )
}

export default About
