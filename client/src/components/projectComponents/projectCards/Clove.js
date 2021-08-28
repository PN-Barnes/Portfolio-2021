import React from 'react';
import ClovePic from './ProjectImages/CLOVE.png';

export default function Clove() {
  return (
    <section className="card col" id="passwordGenerator">
      <a className="card-link" href="https://still-reef-24172.herokuapp.com/">
        <h3 className="card-title text-center h3 text-decoration-none">
          CLOVE
        </h3>
        <img
          className="img-fluid"
          src={ClovePic}
          alt="screenshot of Clove Application"
        />
      </a>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark">
            <a href="https://github.com/PN-Barnes/CLOVE">Github Repository</a>
          </li>
          <li className="list-group-item bg-dark">
            <a href="https://still-reef-24172.herokuapp.com/">Deployed Site</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
