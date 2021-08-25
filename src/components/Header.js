import React from 'react';

export default function Header() {
  return (
    <header>
      <nav class="navbar justify-content-center text-center mb-3" id="pageNav">
        <ul class="nav justify-content-center nav-pills text-center">
          <li>
            <a class="nav-link h3" href="#bio">
              Bio
            </a>
          </li>
          <li>
            <a class="nav-link h3" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a class="nav-link h3" href="#contactNav">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
