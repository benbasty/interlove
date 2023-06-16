import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
        <div className='contact-container container'>
            <div className='contact-left-session'>
                <h2>Questions ? <br/>We Have Answers</h2>
                <p>Chat with Kate to figure out if she can help you with your unique situation.</p>
            </div>
            <div className='contact-right-session'>
                <form>
                  <textarea name="subject" rows="9" cols="50" placeholder='Tell us what you are looking for...'/>
                  <input type='submit' value='Chat with Kate'/>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact