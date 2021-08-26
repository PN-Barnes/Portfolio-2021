import React, { useState } from 'react';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in

    return name === 'firstName'
      ? setFirstName(value)
      : name === 'lastName'
      ? setLastName(value)
      : name === 'email'
      ? setEmail(value)
      : name === 'phone'
      ? setPhone(value)
      : setMessage(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Thank you for submitting, ${firstName}!`);
    setFirstName('');
    setLastName('');
  };
  return (
    <div>
      <p>Fill out the form to contact directly!</p>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          value={phone}
          name="phone"
          onChange={handleInputChange}
          type="text"
          placeholder="Phone Number"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}