import React from 'react'
import { useState, useRef, useEffect } from 'react';
import "./ContactForm.css";

function ContactForm() {

  const [fullName, setfullName] = useState({firstName: "", lastName: ""});
  const [contactData, setContactData] = useState([]);
  const inputRef = useRef(null);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const contacts = contactData.map(contact => 
    <li key={contact.firstName + contact.lastName}>
        {contact.firstName} {contact.lastName}
    </li>
  )

  useEffect(() => {     /* Check whether the component did mount for the 1st time */
    inputRef.current.focus();
  }, []);

  useEffect(() => {     /* Check for changes happening to const state 'fullName' */
    
    if(fullName.firstName.trim() && fullName.lastName.trim())   /* Check whether both inputs are filled */
        setIsBtnDisabled(false);                                /* Enable the submit button */
    else
        setIsBtnDisabled(true);                                 /* Disable the submit button */

  }, [fullName]);
  
  function handleSubmit(event){
    event.preventDefault();
    setContactData(prevContact=>([...prevContact, fullName]));
    setfullName({firstName:"", lastName:""});
  }

  function handleChange(event){
    const {name, value} = event.target;
    setfullName(prevContact => ({...prevContact,[name]: value}));   /* computed property  */
  }

  return (
    <>
      <form name="contactForm" onSubmit={handleSubmit}>
    
        {/* First Name */}
        <input 
            type = "text"
            placeholder = "First Name" 
            name = "firstName"                /* the name applied here is used in the target: handleSubmit() */
            value = {fullName.firstName}    
            onChange = {handleChange}
            ref = {inputRef}
        />

        {/* Last Name */}
        <input 
            type = "text"
            placeholder = "Last Name"         
            name = "lastName"                 /* the name applied here is used in the target: handleSubmit() */
            value = {fullName.lastName}
            onChange = {handleChange}
        />

        <button disabled={isBtnDisabled}>Submit</button>
      </form>

      {/* List added Contacts */}
      <div className='contactBox'>
        <h5>Contact List</h5>
        <ul>
            {contacts}
        </ul>
      </div>
    </>
  )
}

export default ContactForm;

/**
 * TODO: update contacts arrow function to an implicit return 
*/


/**
 * !NOTE: function handleChange() has a const that is unwrapped that takes a key:value passed in from the event object
 * !NOTE: function handleChange() requires the () to indicate an implicit return of an object (in curly braces) - otherwise, the curly braces is mistaken for the body of the arrow function
 * !NOTE: function handleChange() object returned is an OBJECT with the { } braces
 * !NOTE: function handlechange() uses a computed property [name]:value to define the key and its value dynamically 
*/

/**
 * !NOTE: function handleSubmit [...prevContact, fullName] creates a new array that includes all previous contacts (...prevContact) followed by the new fullName entry at the end
*/