import React from 'react'
import './morefun.css'
import QuotesOpen from '../../assets/images/quotes-open.png';
import QuotesClose from '../../assets/images/quotes-close.png';

const morefun = () => {
  return (
    <section id='morefun'>
        <div className='morefun-section container'>
            <h3>More fun with my partner</h3>
            <div className='morefun-objective'>
                <div className='morefun-quote-open'>
                    <img src={QuotesOpen} alt='quotesopen'/>
                </div>
                <div className='morefun-objective-text'>
                    She clearly sees what's behind the patterns in relationships and help provide realistic tools for change. It was the best way to get things in order.
                </div>
                <div className='morefun-quote-close'>
                    <img src={QuotesClose} alt='quotesclose'/>
                </div>
            </div>
            <h4>Kevin</h4>
        </div>
    </section>
  )
}

export default morefun