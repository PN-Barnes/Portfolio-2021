/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function trainingCard() {
  <article class="card col text-center resume">
    <div class="card-body">
      <h2 class="card-title">Training:</h2>
      <p class="card-text lh-md">
        I am currently working on my certification to be a full stack developer
        throug The university of California Berkeley extension Coding Bootcamp.
        I am also learning other web development skills through CodeCademy. If
        you wish to know more about the Bootcamp, click on this card to check
        out the details.
      </p>
      <a
        href="https://bootcamp.berkeley.edu/coding/"
        class="stretched-link lh-md text-decoration-none link-dark"
      ></a>
    </div>
    <img
      src="./assets/images/berkeley.png"
      class="card-img-bottom"
      alt="UC berkeley coding bootcamp"
    />
  </article>;
}

export default trainingCard;
