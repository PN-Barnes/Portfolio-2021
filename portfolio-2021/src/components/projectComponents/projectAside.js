import React from 'react';
import jamMap from './projectCards/JamMap';
import weatherDashboard from './projectCards/weatherDashboard';

function projectAside() {
  return (
    <aside class="projectsContainer container-fluid mt-5 mb-5">
      <div id="projects" class="container-xl">
        <div class="row row-cols-1 row-cols-md-2 g-5">
          <jamMap />
          <weatherDashboard />
        </div>
      </div>
    </aside>
  );
}

export default projectAside;
