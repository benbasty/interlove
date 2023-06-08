import React from 'react'
import './about-mission.css'
import kateintro from '../../assets/images/kate-intro.png'
import quote from '../../assets/images/quote.png'

const about = () => {
  return (
    <section id='about-mission'>
        <div className='introduction container'>
            <div className='kate-pic'>
                <img src={kateintro} alt='kate-intro'/>
            </div>
            <div className='kate-description'>
                <h4>Hi, I'm <span>Kate</span>.</h4>
                <h4>Whether you're currently in a relationship or <br />not, your relationship tendencies are rooted <br />in childhood and societal conditioning.</h4>
                <h4>My mission is to assist you in overcoming<br /> these obstacles and negative thought<br /> patterns, allowing you to welcome profound <br />love into your life and locate your ideal <br />partner.</h4>
                <h4>I have aided numerous couples and <br />individuals as an accomplished dating coach and <br />unwavering champion of love.</h4>
                <button>LEARN MORE ABOUT KATE</button>
                <div className='final-intro'>
                    <div className='apostrophe'>
                        <img src={quote} alt='quote'/>
                    </div>
                    <h4 className='final-desc'>
                        As a dating coach, I can assist you in<br /> revealing your true self to establish<br /> genuine connections.
                    </h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default about