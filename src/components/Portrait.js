import React from 'react';
import ghostBridge from './images/Ghost-bridge.jpg';
import pbPic from './images/PBPic4.jpg';
const borderStyle = {
  border: {
    borderRadius: '50%',
    border: 'ffd300',
  },
};
const imgStyle = {
  objectFit: {
    objectFit: 'cover',
  },
};
export default function Portrait() {
  return (
    <div>
      <h1 className="h1 text-center hello">Hello World!</h1>
      <div
        className="card container-fluid portrait justify-content-center mt-6"
        id="portrait-container"
      >
        <img
          src={ghostBridge}
          className="card-img img-fluid"
          id="tierraAlta"
          alt=""
          style={imgStyle}
        />
        <div className="card-img-overlay">
          {/* <img
            className="img-fluid img-thumbnail tierra"
            src={pbPic}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            width="200px" 
            height="200px"
            style={borderStyle.border}
            alt="portrait of me!"
          /> */}

          <h1 className="h1 text-center paul">Paul Barnes</h1>
          <h1 className="h1 text-center fullstack">FullStack Developer</h1>
        </div>
        <img
          className="img-fluid img-thumbnail mx-auto d-block tierra"
          src={pbPic}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          width="200px"
          height="200px"
          style={borderStyle.border}
          alt="portrait of me!"
        />
      </div>
      <div className="container-md ">
        <h1>About Me</h1>
        <p className="text-left">
          Hello! Welcome to my portfolio page. Some facts about this site,
          first, everything you see on this site was created by me. Some of the
          technologies used here are React, the Bootstrap framework, and some
          custom css.
          <br />
          <br />
          If you're interested in checking out the structure of this site,
          checkout the github repository listed below. Otherwise, checkout my
          projects, they are a clear example of my skills and hope you find them
          interesting, for a more in depth look at my skills and background,
          checkout the bio page to see the list of skills, training, and resume
          upated through 2021.
          <br />
          <br />
          If you have any questions, head over to the contact page and fill out
          the form to reach me directly, Otherwise, my Email and online profiles
          are listed above the footer. Thank you for visiting my site and look
          forward to connecting with you.
        </p>
      </div>
    </div>
  );
}
