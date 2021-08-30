import React from 'react';
import ProjectHeader from './projectComponents/ProjectHeader';
import ProjectAside from './projectComponents/ProjectAside';
import { ProjectProvider } from '../utils/ProjectContext';

function Project() {
  return (
    <div>
      <ProjectHeader />
      <ProjectProvider>
        <ProjectAside />
      </ProjectProvider>
    </div>
  );
}

export default Project;
