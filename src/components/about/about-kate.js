import React from 'react'
import './about-kate.css'
import Kate from '../../assets/images/AboutKate.jpg'
import KateBrand from '../../assets/images/kate-brand.jpg'
import KateFace from '../../assets/images/kate-face.jpg'
import KatePoster from '../../assets/images/kate-poster.jpg'
import KateModel from '../../assets/images/kate-model.jpg'

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
        <div className='about-kate-extra-img'>
            <div className='KatePoster'>
                <img src={KatePoster} alt='KatePoster'/>
            </div>
            <div className='KateBrand'>
                <img src={KateBrand} alt='KateBrand'/>
            </div>
            <div className='KateModel'>
                <img src={KateModel} alt='KateModel'/>
            </div>
            <div className='KateFace'>
                <img src={KateFace} alt='KateFace'/>
            </div>
        </div>
    </section>
  )
}

export default AboutKate