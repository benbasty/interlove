import React from 'react'
import './book-now.css'
import KatePic from '../../assets/images/katepic.jpg'

const BookNow = () => {
  return (
    <section id='book-now'>
        <div className=' book-now-container container'>
            <div className='booking-request'>
                <h3>
                    Interested in working with Kate or request a consultation ?
                </h3>
                <button>Book Now</button>
            </div>
            <div className='katepic'>
                <img src={KatePic} alt='katepic'/>
            </div>
        </div>
    </section>
  )
}

export default BookNow