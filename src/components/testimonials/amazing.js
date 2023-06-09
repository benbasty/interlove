import React from 'react'
import QuotesOpen from '../../assets/images/quotes-open.png';
import QuotesClose from '../../assets/images/quotes-close.png';
import './amazing.css';

const amazing = () => {
  return (
    <section id='amazing'>
        <div className='amazing-section container'>
            <h3>I met the most amazing man</h3>
            <div className='objective'>
                <div className='quote-open'>
                    <img src={QuotesOpen} alt='quotesopen'/>
                </div>
                <div className='objective-text'>
                    My objective has come to fruition, and I am still in awe of it. This year, I feel like a completely different individual. I am grateful to Kate for her help.
                </div>
                <div className='quote-close'>
                    <img src={QuotesClose} alt='quotesclose'/>
                </div>
            </div>
            <h4>Alicia</h4>
        </div>
    </section>
  )
}

export default amazing