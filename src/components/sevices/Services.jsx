import React from 'react';
import './services.css';
import { FaCheck , FaTruck , FaPhoneVolume} from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Services = () => {
  return (
    <div className='services container'>
      <div className='service'>
      <FaCheck className='service-icon'/>
      <span>Quality Product</span>
      </div>
      <div className='service'>
      <FaTruck className='service-icon' />
      <span>Free Shipping</span>
      </div>
      <div className='service'>
      <MdKeyboardDoubleArrowRight  className='service-icon'/>
      <span>14-Day Return</span>
      </div>
      <div className='service'>
      <FaPhoneVolume className='service-icon'/>
      <span>24/7 Support</span>
      </div>
    </div>
  )
}

export default Services
