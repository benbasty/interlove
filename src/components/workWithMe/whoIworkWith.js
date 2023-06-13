import React from 'react'
import couples from '../../assets/images/couples.jpg'
import singles from '../../assets/images/singles.jpg'
import inarelationship from '../../assets/images/inarelationship.jpg'
import './whoIworkWith.css'


const whoIworkWith = () => {
  return (
    <section id='work'>
        <h3 className='work-header'>Who I work with ?</h3>
        <div className='work-categories'>
            <div className='singles'>
                <img src={singles} alt='singles'/>
                <div className='singles-desc'>
                    <h3>#singles</h3>
                    <p>You don't experience any difficulty in meeting new people, however, finding those with whom you can establish a profound connection is a challenge for you.</p>
                    <p>Although you feel satisfied with your job, you struggle to establish the same level of connection in your personal life.</p>
                    <p>And even when you do, it's hard for you to be vulnerable and display your true self.</p>
                    <p>Our sessions aim to help you heal past wounds, differentiate between fear and intuition, determine your personal definition of love, and empower you to speak with confidence and clarity.</p>
                </div>
            </div>
            <div className='inrelationship'>
                <div className='inrelationship-desc'>
                    <h3>#inRelationship</h3>
                    <p>You are in a positive relationship but you sense that there is a void. You are not contemplating ending the relationship, but you are contemplating where you may have taken a misstep.</p>
                    <p>Your enthusiasm is not as strong as it once was, and your relationship mirrors this.</p>
                    <p>You are eager to put in the effort, to present your best self, and to unleash your independence and individual strengths.</p>
                    <p>I will aid and guide you in acquiring knowledge and evolving in a manner that will soon lead to an all-encompassing love: same partner, but a refreshed relationship.</p>
                </div>
                <img src={inarelationship} alt='inrelationship'/>
            </div>
            <div className='couples'>
            <img src={couples} alt='couples'/>
                <div className='couples-desc'>
                    <h3>#couples</h3>
                    <p>Despite being in a fulfilling relationship, you feel like something is missing. You're not considering ending things, but you're reflecting on what might have gone wrong.</p>
                    <p>Your passion for the relationship has dwindled, which is reflected in your partner's attitude as well.</p>
                    <p>You're determined to make things work and showcase your talents and independence.</p>
                    <p>By working together, we can help you grow, learn, and transform, leading to a deeper love with the same partner but a rejuvenated relationship.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default whoIworkWith