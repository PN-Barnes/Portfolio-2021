import React from 'react';
import blogPic from './ProjectImages/companyOrganizer.png';

export default function TechnicalBlog() {
  return (
    <section className="card col" id="passwordGenerator">
      <a
        className="card-link"
        href="https://pn-barnes.github.io/random-password-generator/"
      >
        <h3 className="card-title text-center h3 text-decoration-none">
          Company Organizer
        </h3>
        <img
          className="img-fluid"
          src={blogPic}
          alt="screenshot of the password Generator"
        />
      </a>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark">
            <a href="https://github.com/PN-Barnes/E-commerce">
              Github Repository
            </a>
          </li>
          <li className="list-group-item bg-dark">
            <a href="https://pn-barnes.github.io/">Deployed Site</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
