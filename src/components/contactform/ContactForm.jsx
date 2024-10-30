import './ContactForm.css';
import { useState } from 'react';

function ContactForm() {

  const [fullName, setfullName] = useState({firstName:"", lastName:""});
  const [contactsData, setContactsData] = useState([]);

  const contacts = contactsData.map(contact => 
      <li key={contact.firstName + contact.lastName}>
        {contact.firstName} {contact.lastName}
      </li>
  );

  function handleSubmit(event){
    event.preventDefault()
    setContactsData(prevContact=>([...prevContact, fullName]));
  }

  function handleChange(event){
    const {name, value} = event.target;
    setfullName(prevContact => ({...prevContact, [name]: value}));
  }

  console.log(fullName);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name = "firstName"
          value = {fullName.firstName}
          onChange={handleChange} 
        />
        <input 
          type="text"
          className="formInput"
          placeholder="Last Name"
          name = "lastName"
          value = {fullName.lastName} 
          onChange={handleChange}
        />
        <button>
          Add Contact
        </button>
      </form>
      <div className="contactbox">
        <h5>Contact:</h5>
        <ul>
          {contacts}
        </ul>
      </div>
    </>
  );
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