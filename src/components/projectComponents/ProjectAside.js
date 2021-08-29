import React from 'react';
import JamMap from './projectCards/JamMap';
import WeatherDashboard from './projectCards/weatherDashboard';
import WorkdayScheduler from './projectCards/WorkdayScheduler';
import PasswordGenerator from './projectCards/PasswordGenerator';
import Clove from './projectCards/Clove';
import TechnicalBlog from './projectCards/TechnicalBlog';

export default function ProjectAside() {
  const project = [
    {
      projectName: 'Jam-Map',
      github: '',
    },
  ];
  return (
    <aside className="projectsContainer container-fluid mt-5 mb-5">
      <div id="projects" className="container-xl">
        <div className="row row-cols-1 row-cols-md-2 g-5">
          <JamMap />
          <WeatherDashboard />
          <WorkdayScheduler />
          <PasswordGenerator />
          <Clove />
          <TechnicalBlog />
        </div>
      </div>
    </aside>
  );
}
