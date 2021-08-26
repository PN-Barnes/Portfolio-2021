import React from 'react';
import ContactList from './ContactList';

export default function ContactNav() {
  return (
    <nav className="navbar justify-content-center" id="contactNav">
      <ContactList />
    </nav>
  );
}
