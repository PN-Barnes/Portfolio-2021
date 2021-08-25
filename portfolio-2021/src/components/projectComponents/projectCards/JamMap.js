import React from 'react';

function jamMap() {
  return (
    <section class="card col" id="JamMap">
      <a class="card-link" href="https://pdpco.github.io/jam-map/">
        <h3 class="card-title text-center h3 text-decoration-none">Jam-Map</h3>
        <img
          class="img-fluid"
          src="./assets/images/jam-map.png"
          alt="screenshot of Jam Map the application"
        />
      </a>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href="https://github.com/PDPco/jam-map">Github Repository</a>
          </li>
          <li class="list-group-item">
            <a href="https://pdpco.github.io/jam-map/">Deployed Site</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default jamMap;
