import React from 'react';
import Email from './navComponents/Email';
import LinkedIn from './navComponents/LinkedIn';
import Github from './navComponents/Github';

export default function ContactList() {
  return (
    <ul class="nav justify-content-center nav-pills">
      <Email />
      <LinkedIn />
      <Github />
    </ul>
  );
}
