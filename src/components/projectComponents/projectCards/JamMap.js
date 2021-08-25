import React from 'react';
import JamPic from './ProjectImages/jam-map.png';

export default function JamMap() {
  return (
    <section className="card col" id="JamMap">
      <a className="card-link" href="https://pdpco.github.io/jam-map/">
        <h3 className="card-title text-center h3 text-decoration-none">
          Jam-Map
        </h3>
        <img
          className="img-fluid"
          src={JamPic}
          alt="screenshot of Jam Map the application"
        />
      </a>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark">
            <a href="https://github.com/PDPco/jam-map">Github Repository</a>
          </li>
          <li className="list-group-item bg-dark">
            <a href="https://pdpco.github.io/jam-map/">Deployed Site</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
