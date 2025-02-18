import React from 'react'
import './contact.css'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { IoCallSharp } from 'react-icons/io5'

const Contact = () => {
  return (
    <div>
      <h1 className='container'>Contact <span className='title'>Us</span></h1>
    <div className='contact container'>
      <div className="contact-left">
        <form action="">
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Subject'/>
            <textarea placeholder='Message'></textarea>
            <button>send message</button>
        </form>
      </div>
      <div className="contact-right">
        <div className="contact-right-up">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13776.284877749491!2d31.749152588867908!3d30.32049200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f807ffe22e8b0b%3A0x52c8514a7b64592!2z2KzYp9mF2LnZhyDYp9mE2KfYqNiq2YPYp9ix!5e0!3m2!1sar!2seg!4v1737998726114!5m2!1sar!2seg"></iframe>
        </div>
        <div className="contact-right-down">
            <div>
                <FaLocationCrosshairs className='contact-icons'/>
                <span>10th Of Ramadan - Egypt</span>
            </div>
            <div>
                <IoIosMail className='contact-icons'/>
                <span>yahyashaeky@gmail.com</span>
            </div>
            <div>
                <IoCallSharp className='contact-icons'/>
                <span>+201069073422</span>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
