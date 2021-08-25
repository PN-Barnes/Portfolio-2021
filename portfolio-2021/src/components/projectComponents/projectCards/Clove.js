import React from 'react';
import ClovePic from './ProjectImages/CLOVE.png';

export default function Clove() {
  return (
    <section class="card col" id="passwordGenerator">
      <a class="card-link" href="https://still-reef-24172.herokuapp.com/">
        <h3 class="card-title text-center h3 text-decoration-none">CLOVE</h3>
        <img
          class="img-fluid"
          src={ClovePic}
          alt="screenshot of Clove Application"
        />
      </a>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-dark">
            <a href="https://github.com/PN-Barnes/CLOVE">Github Repository</a>
          </li>
          <li class="list-group-item bg-dark">
            <a href="https://still-reef-24172.herokuapp.com/">Deployed Site</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
