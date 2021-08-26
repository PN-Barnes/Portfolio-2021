/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Resume from './bioImages/resumeScreenshot.png';
import pbResume from './Documents/PBResume2021.pdf';

function ResumeCard() {
  return (
    <article className="card text-center col">
      <div className="card-body">
        <h2 className="card-title">Resume:</h2>
        <p className="card-text lh-sm">
          Here is a PDF link to my resume, it has been updated to reflect 2021
          work experience and training.
        </p>
      </div>
      <img
        src={Resume}
        className="card-img-bottom"
        alt="screenshot of my resume"
      />
      <a
        className="lh-md text-decoration-none link-dark stretched-link"
        href={pbResume}
      ></a>
    </article>
  );
}

export default ResumeCard;
