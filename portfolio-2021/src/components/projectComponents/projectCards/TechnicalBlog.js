import React from 'react';

export default function TechnicalBlog() {
  return (
    <section class="card col" id="passwordGenerator">
      <a
        class="card-link"
        href="https://pn-barnes.github.io/random-password-generator/"
      >
        <h3 class="card-title text-center h3 text-decoration-none">
          Company Organizer
        </h3>
        <img
          class="img-fluid"
          src="./assets/images/companyOrganizer.png"
          alt="screenshot of the password Generator"
        />
      </a>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-dark">
            <a href="https://github.com/PN-Barnes/E-commerce">
              Github Repository
            </a>
          </li>
          <li class="list-group-item bg-dark">
            <a href="https://pn-barnes.github.io/">Deployed Site</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
