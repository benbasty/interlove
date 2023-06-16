import React from 'react'
import './testimonials.css'
import Lee from '../../assets/images/Lee.jpg'
import John from '../../assets/images/John.jpg'
import Eva from '../../assets/images/Eva.jpg'
import Julia from '../../assets/images/Julia.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <div className='testimonials-section container' >
            <h1>TESTIMONIALS</h1>
            <h4>Although I am the coach, these individuals are certainly the heroes.</h4>
            <div className='testimonials-texts'>
                <div className='testimonial'>
                    <img src={Lee} alt='Lee'/>
                    <h4>Lee</h4>
                    <p>" It was a remarkable experience to have a session with Kate. Prior to my wedding, we attended three couple sessions to ensure that we establish a solid foundation before embarking on a new chapter in our lives."</p>
                </div>
                <div className='testimonial'>
                    <img src={John} alt='John'/>
                    <h4>John</h4>
                    <p>" Kate shifted my focus from dwelling on my problems and ignited a lively and affectionate energy within me, revealing that it was always present within myself."</p>
                </div>
                <div className='testimonial'>
                    <img src={Eva} alt='Eva'/>
                    <h4>Eva</h4>
                    <p>" Kate possesses the ability to attentively listen to and comprehend not only the words you speak, but particularly the message your soul is attempting to convey through all of her senses."</p>
                </div>
                <div className='testimonial'>
                    <img src={Julia} alt='Julia'/>
                    <h4>Julia</h4>
                    <p>"Kate helped me see how my old wounds of not feeling “good enough” was contributing to me focusing on my partner’s short-comings. She helped me find a practice that resonated with me to find peace."</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials