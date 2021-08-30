import React from 'react';
import { useProjectContext } from '../../utils/ProjectContext';
// import JamMap from './projectCards/JamMap';
// import WeatherDashboard from './projectCards/weatherDashboard';
// import WorkdayScheduler from './projectCards/WorkdayScheduler';
// import PasswordGenerator from './projectCards/PasswordGenerator';
// import Clove from './projectCards/Clove';
// import TechnicalBlog from './projectCards/TechnicalBlog';

export default function ProjectAside() {
  const { projects } = useProjectContext();

  return (
    <aside className="projectsContainer container-fluid mt-5 mb-5">
      <div id="projects" className="container-xl">
        <div className="row row-cols-1 row-cols-md-2 g-5">
          {projects.map((project) => (
            <section className="card col" key={project.projectName}>
              <a className="card-link" href={project.deployed}>
                <h3 className="card-title text-center h3 text-decoration-none">
                  {project.projectName}
                </h3>
                <img
                  className="img-fluid"
                  // src={ClovePic}
                  alt={project.projectName}
                />
              </a>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark">
                    <a href={project.github}>Github Repository</a>
                  </li>
                  <li className="list-group-item bg-dark">
                    <a href={project.deployed}>Deployed Site</a>
                  </li>
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </aside>
  );
}
