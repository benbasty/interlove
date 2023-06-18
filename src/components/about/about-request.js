import React from 'react'
import couple from '../../assets/images/coupl.jpg'
import './about-request.css'

const aboutRequest = () => {
  return (
    <section id='about-request'>
        <div className='head-request'>
            <h4>What is your greatest aspiration for your romantic relationships?</h4>
        </div>
        <div className='request-description container'>
            <div className='request-text'>
                <h4>
                    Have you explored all options in trying to capture the attention of your loved one and are unsure of what to do next? Perhaps the best solution is to try a new approach.
                </h4>
                <h4>
                    While exploring techniques such as energy work and astrology may be enjoyable, it is important to realize that true change cannot occur until you alter your core beliefs about yourself, relationships, love and what you believe you deserve ?
                </h4>
                <h4>
                    Even after reading countless self-help books and completing various online dating courses, it may not have been the best advice for your specific situation.
                </h4>
                <h4>
                    This is where working with a coach like Kate can be transformative, as they can guide you through the process and provide alternative solutions. You are welcome to request a consultation now.
                </h4>
                <button>REQUEST A CONSULTATION</button>
            </div>
            <div className='request-pic'>
                <img src={couple} alt='couple'/>
            </div>
        </div>
        <div className='bottom-request'>
            <h4>Confidence, clarity, and connection are the key elements.</h4>
        </div>
    </section>
  )
}

export default aboutRequest