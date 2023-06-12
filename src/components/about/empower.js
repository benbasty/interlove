import React from 'react'
import './empower.css'
import  ExplainImg from '../../assets/images/explain-image.png';
import ProfessionalImg from '../../assets/images/professional-image.png';
import SupportImg from '../../assets/images/support-image.png';

const empower = () => {
  return (
    <section id='empower'>
        <div className='empower-section container'>
            <h1>How can I empower you ?</h1>
            <p>Connect with Kate to discover the pace at which you can improve your marriage, relationship, or dating life!</p>
            <div className='empower-steps'>
                <div className='explain'>
                    <div className='explain-img'>
                        <img src={ExplainImg} alt='explain-img'/>
                    </div>
                    <div className='explain-num'>
                        1
                    </div>
                    <div className='explain-desc'>
                        <h5>Explain Your Situation</h5>
                        <p>Answer a few questions about your relationship.</p>
                    </div>
                </div>
                <div className='professional-coaching'>
                    <div className='professional-coaching-img'>
                            <img src={ProfessionalImg} alt='professional-coaching-img'/>
                    </div>
                    <div className='professional-coaching-num'>
                        2
                    </div>
                    <div className='professional-coaching-desc'>
                        <h5>Get Professional Coaching</h5>
                        <p>Get professional coaching for your relationship. Talk on Zoom, live chat or meet in person.</p>
                    </div>
                </div>
                <div className='support'>
                    <div className='support-img'>
                        <img src={SupportImg} alt='support-img'/>
                    </div>
                    <div className='support-num'>
                        3
                    </div>
                    <div className='support-desc'>
                        <h5>Ongoing Support</h5>
                        <p>Keep work with your coach whenever you need help!</p>
                    </div>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default empower