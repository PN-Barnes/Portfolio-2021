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
      github: 'https://github.com/PDPco/jam-map',
      deployed: 'https://pdpco.github.io/jam-map/',
    },
    {
      projectName: 'Clove',
      github: 'https://github.com/PN-Barnes/CLOVE',
      deployed: 'https://still-reef-24172.herokuapp.com/'
    },
    {
      projectName: 'Company Organizer',
      github: 'https://github.com/PN-Barnes/E-commerce',
      deployed: 'https://github.com/PN-Barnes/E-commerce'
    }
    {
      projectName: 'Weather Dashboard',
      github: 'https://github.com/PN-Barnes/weather-dashboard',
      deployed: 'https://pn-barnes.github.io/weather-dashboard/'
    }
    {
      projectName: 'Workday Scheduler',
      github: 'https://github.com/PN-Barnes/WorkDay-Scheduler',
      deployed: 'https://pn-barnes.github.io/WorkDay-Scheduler/'
    }
    {
      projectName: 'Password Generator',
      github: 'https://github.com/PN-Barnes/random-password-generator',
      deployed: 'https://pn-barnes.github.io/random-password-generator/'
    }
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
