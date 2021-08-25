import React from 'react';

export default function ContactNav() {
  return (
    <nav class="navbar justify-content-center" id="contactNav">
      <ul class="nav justify-content-center nav-pills">
        <li>
          <a class="nav-link" href="mailto: paulieb99@gmail.com">
            Email
          </a>
        </li>
        <li>
          <a
            class="nav-link"
            href="https://www.linkedin.com/in/paul-barnes-879097129/"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a class="nav-link" href="https://github.com/PN-Barnes">
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}
