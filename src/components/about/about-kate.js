import React from 'react'
import './about-kate.css'
import Kate from '../../assets/images/AboutKate.jpg'

const AboutKate = () => {
  return (
    <section id="aboutkate">
        <div className='about-kate-header'>
            <h3>About Kate</h3>
        </div>
        <div className='about-kate-content'>
            <div className='about-kate-img'>
                <img src={Kate} alt='kate'/>
            </div>

            <div className='about-kate-desc'>
                <p>Hello, my name is Kate and I am the CEO of Inter Love.</p>
                <p>My mission is to assist self-aware individuals in taking a bold step forward, having faith in themselves, expressing their genuine opinions, and having a smooth experience with love.</p>
                <p>Your most powerful self is aware of your desires and can confidently communicate them while having faith in yourself.</p>
                <button>REQUEST A CONSULTATION</button>
            </div>
        </div>
    </section>
  )
}

export default AboutKate