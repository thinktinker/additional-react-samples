import React from 'react'
import './Contact.css'

function Contact(props) {
  return (
    <div className='content-area'> 
      <h1>Contact List</h1>
      <p>
        Add the names to the list below:
      </p>
      {/* ContactForm shall be introduced as a Property */}
      {props.contactForm}
      {props.test}
    </div>
  )
}

export default Contact;