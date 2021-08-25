import React from 'react';
import passPic from './ProjectImages/passwordGenerator.png';

export default function PasswordGenerator() {
  return (
    <section className="card col" id="passwordGenerator">
      <a
        className="card-link"
        href="https://pn-barnes.github.io/random-password-generator/"
      >
        <h3 className="card-title text-center h3 text-decoration-none">
          Password Generator
        </h3>
        <img
          className="img-fluid"
          src={passPic}
          alt="screenshot of the password Generator"
        />
      </a>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark">
            <a href="https://github.com/PN-Barnes/random-password-generator">
              Github Repository
            </a>
          </li>
          <li className="list-group-item bg-dark">
            <a href="https://pn-barnes.github.io/random-password-generator/">
              Deployed Site
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
