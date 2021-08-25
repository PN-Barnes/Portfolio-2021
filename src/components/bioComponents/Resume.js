/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function ResumeCard() {
  return (
    <article class="card text-center col">
      <div class="card-body">
        <h2 class="card-title">Resume:</h2>
        <p class="card-text lh-sm">
          Here is a PDF link to my resume, it has been updated to reflect 2021
          work experience and training.
        </p>
      </div>
      <img
        src="./assets/images/resumeScreenshot.png"
        class="card-img-bottom"
        alt="screenshot of my resume"
      />
      <a
        class="lh-md text-decoration-none link-dark stretched-link"
        href="../assets/Documents/PBResume2021.pdf"
      ></a>
    </article>
  );
}

export default ResumeCard;
