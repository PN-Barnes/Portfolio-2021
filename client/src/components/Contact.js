import React from 'react';
import ContactHeader from './contactComponents/ContactHeader';
import ContactNav from './contactComponents/ContactNav';

export default function Contact() {
  return (
    <aside className="container-fluid" id="contact">
      <ContactHeader />
      <ContactNav />
    </aside>
  );
}
