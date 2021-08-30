import React, { createContext, useContext } from 'react';

const ProjectContext = createContext();

export const useProjectContext = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
  const initialState = {
    projects: [
      {
        id: 1,
        projectName: 'Jam-Map',
        github: 'https://github.com/PDPco/jam-map',
        deployed: 'https://pdpco.github.io/jam-map/',
      },
      {
        id: 2,
        projectName: 'Clove',
        github: 'https://github.com/PN-Barnes/CLOVE',
        deployed: 'https://still-reef-24172.herokuapp.com/',
      },
      {
        id: 3,
        projectName: 'Company Organizer',
        github: 'https://github.com/PN-Barnes/E-commerce',
        deployed: 'https://github.com/PN-Barnes/E-commerce',
      },
      {
        id: 4,
        projectName: 'Weather Dashboard',
        github: 'https://github.com/PN-Barnes/weather-dashboard',
        deployed: 'https://pn-barnes.github.io/weather-dashboard/',
      },
      {
        id: 5,
        projectName: 'Workday Scheduler',
        github: 'https://github.com/PN-Barnes/WorkDay-Scheduler',
        deployed: 'https://pn-barnes.github.io/WorkDay-Scheduler/',
      },
      {
        id: 6,
        projectName: 'Password Generator',
        github: 'https://github.com/PN-Barnes/random-password-generator',
        deployed: 'https://pn-barnes.github.io/random-password-generator/',
      },
    ],
  };
  return (
    <ProjectContext.Provider value={initialState}>
      {children}
    </ProjectContext.Provider>
  );
};
