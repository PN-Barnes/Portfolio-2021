/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Berkeley from './bioImages/berkeley.png';

function TrainingCard() {
  return (
    <article className="card col text-center resume">
      <div className="card-body">
        <h2 className="card-title">Training:</h2>
        <p className="card-text lh-md">
          I am currently working on my certification to be a full stack
          developer throug The university of California Berkeley extension
          Coding Bootcamp. I am also learning other web development skills
          through CodeCademy. If you wish to know more about the Bootcamp, click
          on this card to check out the details.
        </p>
        <a
          href="https://bootcamp.berkeley.edu/coding/"
          className="stretched-link lh-md text-decoration-none link-dark"
        ></a>
      </div>
      <img
        src={Berkeley}
        className="card-img-bottom"
        alt="UC berkeley coding bootcamp"
      />
    </article>
  );
}

export default TrainingCard;
