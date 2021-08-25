/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function SkillsCard() {
  return (
    <article class="card col text-center skills" id="skills">
      <div class="card-body">
        <h2 class="card-title">Skills:</h2>
        <p class="card-text lh-sm">
          I have been learning FullStack development from the beginning of 2021
          with CodeCademy and recently going through the University of
          California Berkeley extension Coding Bootcamp. I also graduated from
          Louisiana State University in 2021 with a BA in Film and Television
          Production.
        </p>
      </div>
      <img
        src="./assets/images/logo-codecademy-social.png"
        class="card-img-bottom"
        alt="CodeCademy"
      />
      <a
        href="https://www.codecademy.com/"
        class="stretched-link lh-md text-decoration-none link-dark"
      ></a>
    </article>
  );
}

export default SkillsCard;
