import React from 'react'
import '../Styles/Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-container">
        <div className="contact-title">
            <h3>Contact Me</h3>
        </div>
        <div className="contact-form">
            <form>
                <p>Fullname:</p> 
                <input type="text" /> 
                <p>E-mail</p> 
                <input type="email" />
                <p>Message:</p> 
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Send the Message</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
