import React from 'react'
import './header.css';
import Logo from '../../assets/images/interlove.png';
import {FaTimes, FaBars} from 'react-icons/fa';
import { useState } from 'react';
const Header = () => {
    //showing the hamburger menu is initially set to false
    const [showHamburger, setShowHamburger] = useState(false);
    // showNavBar on click
    const showNavBar = () => {
        setShowHamburger(!showHamburger);
    }

  return (
    <section id='header'>
        <nav id='navbar' className='container'>
            <div className='logo'>
                <img src={Logo} alt='logoInterlove'/>
            </div>
            <div className={showHamburger ? 'menu responsive-menu' : 'menu'}>
                <a href='#menu-item'><h3 onClick={() => setShowHamburger(false)}>Home</h3></a>
                <a href='#menu-item'><h3 onClick={() => setShowHamburger(false)}>About</h3></a>
                <a href='#menu-item'><h3 onClick={() => setShowHamburger(false)}>Work With Me</h3></a>
                <a href='#menu-item'><h3 onClick={() => setShowHamburger(false)}>Testimonials</h3></a>
                <a href='#menu-item'><h3 onClick={() => setShowHamburger(false)}>Contact</h3></a>
                <a href='#menu-item' className='menu-select'>
                    <select id='language'>
                        <option value='EN'>EN</option>
                        <option value='CN'>CN</option>
                        <option value='RU'>RU</option>
                    </select>
                </a>
            </div>
            <div className='hamburger' onClick={showNavBar}>
                {showHamburger ?
                    (<FaTimes/>)
                    :
                    (<FaBars/>)
                }
            </div>
        </nav>
        <div id='hero-description' className='container'>
            <h3>Build authentic and <br/> <span>irresistible</span> self-assurance.</h3>
            <h4>Build your self-esteem, expand your social <br/>circle, attract your perfect mate to design <br/>the life you desire.</h4>
            <h4>As a dating coach, I can assist you in<br/> revealing your true self to establish genuine<br/> connections.</h4>
        </div>
    </section>
  )
}

export default Header