import './ContactForm.css';
import { useState, useRef, useEffect } from 'react';

function ContactForm() {

  const [fullName, setfullName] = useState({firstName:"", lastName:""});
  const [editFullName, setEditFullName] = useState({firstName:"", lastName:""});
  const [contactsData, setContactsData] = useState([]);
  const inputRef = useRef(null);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isEditDisabled, setIsEditDisabled] = useState(true);

  /*
  * Focus the input field when component mounts
  */
  useEffect(() => {
    
    inputRef.current.focus();
  }, []);

  /* 
  * useEffect() hook here tracks the changes to state hook fullName
  * Set the submit button only when firstName and lastName is not empty
  * And when the edit button is disabled
  */
  useEffect(() => {
    if (fullName.firstName.trim() && fullName.lastName.trim() && isEditDisabled) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }

  }, [fullName]);

  /* 
  * Display the list of added contacts
  */
  const contacts = contactsData.map(contact => 
    <div className='contactItem'>
      <li key={contact.firstName + contact.lastName}>
        {contact.firstName} {contact.lastName}
      </li>
      <button onClick={() => {
        handleEdit(contact.firstName,contact.lastName);
      }}>Edit</button>
      <button onClick={() => {
        handleDelete(contact.firstName,contact.lastName)
      }}>Delete</button>
    </div>
  );
  
  /*
   * Handle the event when the "Delete" button is selected
   * Filters only the names that are not found from the selected for deletion
   * Stores the filtered names back to state contactData 
   */
  function handleDelete(firstName, lastName){
    const updatedContacts = contactsData.filter(
      contact => contact.firstName+contact.lastName !== firstName+lastName
    );
    setContactsData(updatedContacts);
  }

  /* 
  * Handle the event when the "Update Contact" is selected (onClick())
  * Updates the edited contact and re-populates state contactData
  * map() updates the position of the array where the data matches (firstName, lastName)
  */
  function handleUpdate(){
    const updatedContacts = contactsData.map(
      contact => contact.firstName+contact.lastName === editFullName.firstName+editFullName.lastName ? fullName : contact
    );
    setContactsData(updatedContacts);
    setfullName({firstName:"", lastName:""});
    setEditFullName({firstName:"", lastName:""});
    setIsEditDisabled(true);    
  }
  
  /*
   * Handle the event where the "Edit" button is selected (onClick()) 
   * Setting the selected firstName and lastName to its respective inputs
   */
  function handleEdit(firstName, lastName) {
    setfullName({firstName,lastName});
    setIsEditDisabled(false);
    setEditFullName({firstName,lastName});
  }

  /*
  * Handle the event when the "Submit" button is selected (onSubmit())
  * Inputs for firstName and lastName should exist before the 
  */
  function handleSubmit(event){
    event.preventDefault();
    setContactsData(prevContact=>([...prevContact, fullName]));
    setfullName({firstName:"", lastName:""});
  }

  /*
   * Handle the event when inputs firstName or lastName changes
   * Ensure that the name attribute of each input is consistent with each key in state fullName
   */
  function handleChange(event){
    const {name, value} = event.target;
    setfullName(prevContact => ({...prevContact, [name]: value.trim()}));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name = "firstName"
          value = {fullName.firstName}
          onChange={handleChange}
          ref={inputRef} 
        />
        <input 
          type="text"
          className="formInput"
          placeholder="Last Name"
          name = "lastName"
          value = {fullName.lastName} 
          onChange={handleChange}
        />
        <button disabled={isBtnDisabled}>
          Add Contact
        </button>
        <button disabled={isEditDisabled} onClick={handleUpdate}>
          Update Contact
        </button>
      </form>
      <div className="contactbox">
        <h3>Contact:</h3>
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