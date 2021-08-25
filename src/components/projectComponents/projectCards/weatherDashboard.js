import React from 'react';
import weatherPic from './ProjectImages/weatherDashboard.png';

export default function WeatherDashboard() {
  return (
    <section className="card col" id="weatherDashboard">
      <a
        className="card-link"
        href="https://pn-barnes.github.io/weather-dashboard/"
      >
        <h3 className="card-title text-center h3 text-decoration-none">
          Weather Dashboard
        </h3>
        <img
          className="img-fluid"
          src={weatherPic}
          alt="screenshot for the weatherdashboard by city"
        />
      </a>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark">
            <a href="https://github.com/PN-Barnes/weather-dashboard">
              Github Repository
            </a>
          </li>
          <li className="list-group-item bg-dark">
            <a href="https://pn-barnes.github.io/weather-dashboard/">
              Deployed Site
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
