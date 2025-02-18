import React, { useRef, useState } from 'react'
import './footer.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTwitter , FaFacebookF ,FaLinkedinIn, FaInstagram ,FaPlus} from "react-icons/fa";
import image1 from '../../img/payments.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className="top-footer">
        <div className="top-footer-content">
        <div className="top-left-footer">
            <h3>Get In Touch</h3>
            <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
            <div className="loc-footer">
                <FaLocationDot className='loc-icon'/>
                <span>123 Street, New York, USA</span>
            </div>
            <div className="loc-footer">
                <IoIosMail className='loc-icon'/>
                <span>yahyashaeky@gmail.com</span>
            </div>
            <div className="loc-footer">
                <IoCallSharp className='loc-icon'/>
                <span>+201069073422</span>
            </div>
        </div>
        </div>
        <div className="top-footer-content">
        <div className="top-middle-left-footer">
            <div className="middle-footer-title">
            <h3>Quick Shop</h3>
            <FaPlus className='plus-icon' />
            </div>
            <div>
            <MdKeyboardArrowRight />
            <Link to="/">Home</Link>
            </div>
            <div>
            <MdKeyboardArrowRight/>
            <Link to='/shop'>Our Shop</Link>
            </div>
            <div>
            <MdKeyboardArrowRight/>
            <a href="#">Shop Detail</a>
            </div>
            <div>
            <MdKeyboardArrowRight/>
            <a href="#">Shopping Cart</a>
            </div>
            <div>
            <MdKeyboardArrowRight/>
            <a href="#">Checkout</a>
            </div>
            <div>
            <MdKeyboardArrowRight/>
            <Link to='/contact'>Contact Us</Link>
            </div>
        </div>
        </div>
        <div className="top-footer-content">
        <div className="top-middle-right-footer">
            <div className="middle-footer-title">
            <h3>My Account</h3>
            <FaPlus className='plus-icon'/>
            </div>
            <div>
            <MdKeyboardArrowRight/>
            <Link to="/">Home</Link>
            </div>
            <div>
            <MdKeyboardArrowRight/>
            <Link to='/shop'>Our Shop</Link>
            </div>
            <div>
            <MdKeyboardArrowRight/>
            <a href="#">Shop Detail</a>
            </div>
            <div>
            <MdKeyboardArrowRight/>
            <a href="#">Shopping Cart</a>
            </div>
            <div>
            <MdKeyboardArrowRight/>
            <a href="#">Checkout</a>
            </div>
            <div>
            <MdKeyboardArrowRight/>
            <Link to='/contact'>Contact Us</Link>
            </div>

        </div>
        </div>
        <div className="top-footer-content">
        <div className="top-right-footer">
            <h3>Newsletter</h3>
            <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
            <form action="">
                <input type="text" placeholder='Your Email Address' />
                <input type="submit" value="Sign Up" className='submit' />
            </form>
            <span>Follow Us</span>
            <div className="follow-us">
                <a href="https://x.com/yahyashawqi?s=21&t=Ipjh2ma1errbZZYK_vjtww" target='_blank'><FaTwitter/></a>
                <a href="https://www.facebook.com/ana.yahya.7773/" target="_blank"><FaFacebookF/></a>
                <a href="www.linkedin.com/in/yahya-shawky-b3ba2a288" target="_blank"><FaLinkedinIn/></a>
                <a href="https://www.instagram.com/yahyashawky?igsh=MXB0M3V3b3J1YmhkeQ%3D%3D&utm_source=qr" target="_blank"><FaInstagram/></a>


            </div>
            
        </div>
        </div>
      </div>
      <hr />
      <div className="down-footer">
        <div className="down-left-footer">
        <h4>© <a href="#">Domain</a>. All Rights Reserved. Designed by <a href="#">yahia shawky</a></h4>
        </div>
        <div className="down-right-footer">
            <img src={image1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
