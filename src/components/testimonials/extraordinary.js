import React from 'react'
import './extraordinary.css';
import QuotesOpen from '../../assets/images/quotes-open.png';
import QuotesClose from '../../assets/images/quotes-close.png';


const ExtraOrdinary = () => {
  return (
    <section id='extra-ordinary'>
        <div className='extra-ordinary-section container'>
            <h3>I met the most amazing man</h3>
            <div className='extra-ordinary-objective'>
                <div className='extra-ordinary-quote-open'>
                    <img src={QuotesOpen} alt='quotesopen'/>
                </div>
                <div className='extra-ordinary-objective-text'>
                    My objective has come to fruition, and I am still in awe of it. This year, I feel like a completely different individual. I am grateful to Kate for her help.
                </div>
                <div className='extra-ordinary-quote-close'>
                    <img src={QuotesClose} alt='quotesclose'/>
                </div>
            </div>
            <h4>Alicia</h4>
        </div>
    </section>
  )
}

export default ExtraOrdinary