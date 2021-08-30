import React, { createContext, useContext } from 'react';
import ClovePic from '../components/projectComponents/projectCards/ProjectImages/CLOVE.png';
import JamPic from '../components/projectComponents/projectCards/ProjectImages/jam-map.png';
import passPic from '../components/projectComponents/projectCards/ProjectImages/passwordGenerator.png';
import blogPic from '../components/projectComponents/projectCards/ProjectImages/companyOrganizer.png';
import weatherPic from '../components/projectComponents/projectCards/ProjectImages/weatherDashboard.png';
import WorkPic from '../components/projectComponents/projectCards/ProjectImages/workdayScheduler.png';

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
        picture: JamPic,
      },
      {
        id: 2,
        projectName: 'Clove',
        github: 'https://github.com/PN-Barnes/CLOVE',
        deployed: 'https://still-reef-24172.herokuapp.com/',
        picture: ClovePic,
      },
      {
        id: 3,
        projectName: 'Company Organizer',
        github: 'https://github.com/PN-Barnes/E-commerce',
        deployed: 'https://github.com/PN-Barnes/E-commerce',
        picture: blogPic,
      },
      {
        id: 4,
        projectName: 'Weather Dashboard',
        github: 'https://github.com/PN-Barnes/weather-dashboard',
        deployed: 'https://pn-barnes.github.io/weather-dashboard/',
        picture: weatherPic,
      },
      {
        id: 5,
        projectName: 'Workday Scheduler',
        github: 'https://github.com/PN-Barnes/WorkDay-Scheduler',
        deployed: 'https://pn-barnes.github.io/WorkDay-Scheduler/',
        picture: WorkPic,
      },
      {
        id: 6,
        projectName: 'Password Generator',
        github: 'https://github.com/PN-Barnes/random-password-generator',
        deployed: 'https://pn-barnes.github.io/random-password-generator/',
        picture: passPic,
      },
    ],
  };
  return (
    <ProjectContext.Provider value={initialState}>
      {children}
    </ProjectContext.Provider>
  );
};
