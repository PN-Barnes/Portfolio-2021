import React from 'react';

export default function PasswordGenerator() {
  return (
    <section class="card col" id="passwordGenerator">
      <a
        class="card-link"
        href="https://pn-barnes.github.io/random-password-generator/"
      >
        <h3 class="card-title text-center h3 text-decoration-none">
          Password Generator
        </h3>
        <img
          class="img-fluid"
          src="assets/images/passwordGenerator.png"
          alt="screenshot of the password Generator"
        />
      </a>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href="https://github.com/PN-Barnes/random-password-generator">
              Github Repository
            </a>
          </li>
          <li class="list-group-item">
            <a href="https://pn-barnes.github.io/random-password-generator/">
              Deployed Site
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
