import React from 'react'
import './footer.css'
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
const Footer = () => {
  return (
    <section id='footer'>
        <div className='menu-section'>
            <div className='menu container'>
                    <div className='menu-items'>
                        <a href='#menu-item'><h3>Home</h3></a>
                        <a href='#menu-item'><h3>About</h3></a>
                        <a href='#menu-item'><h3>Work With Me</h3></a>
                        <a href='#menu-item'><h3>Testimonials</h3></a>
                        <a href='#menu-item'><h3>Contact</h3></a>
                    </div>
                    <div className='socials'>
                        <a href='facebook'><FaFacebookF/></a>
                        <a href='instagram'><FaInstagram/></a>
                    </div>
            </div>
        </div>
        <div className='footer-section'>
            <div className='copyright-footer-section container'>
                    <h6>Inter Love </h6>
                    <h6>&copy;2023 </h6>
                    <h6>Disclaimer </h6>
                    <h6>Privacy Policy </h6>
                    <h6>Terms of use</h6>
            </div>
        </div>
    </section>
  )
}

export default Footer