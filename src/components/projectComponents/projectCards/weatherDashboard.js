import React from 'react';
import weatherPic from './ProjectImages/weatherDashboard.png';

export default function WeatherDashboard() {
  return (
    <section class="card col" id="weatherDashboard">
      <a
        class="card-link"
        href="https://pn-barnes.github.io/weather-dashboard/"
      >
        <h3 class="card-title text-center h3 text-decoration-none">
          Weather Dashboard
        </h3>
        <img
          class="img-fluid"
          src={weatherPic}
          alt="screenshot for the weatherdashboard by city"
        />
      </a>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-dark">
            <a href="https://github.com/PN-Barnes/weather-dashboard">
              Github Repository
            </a>
          </li>
          <li class="list-group-item bg-dark">
            <a href="https://pn-barnes.github.io/weather-dashboard/">
              Deployed Site
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
