import React from 'react';
import jamMap from './projectCards/JamMap';

function projectAside() {
  return (
    <aside class="projectsContainer container-fluid mt-5 mb-5">
      <div id="projects" class="container-xl">
        <jamMap />
      </div>
    </aside>
  );
}

export default projectAside;
