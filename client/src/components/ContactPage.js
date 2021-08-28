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
    <div className="container">
      <p className="container">Fill out the form to contact me directly!</p>
      <form className="form container justify-content-center">
        <div className="mb-3">
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            value={phone}
            name="phone"
            onChange={handleInputChange}
            type="text"
            placeholder="Phone Number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
            className="form-control"
          />
        </div>
        <button
          type="button"
          onClick={handleFormSubmit}
          className="btn btn-warning"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
