import React from 'react';
import Bio from 'Bio';
import Project from 'Project';
import Portrait from 'Portrait';

function Display(event) {
  const handleClick = (e) => {
    e.preventDefault();

    const { target } = e;
    const pageType = target.name;

    if (pageType === 'Bio') {
      return <Bio />;
    } else if (pageType === 'Projects') {
      return <Project />;
    } else {
      return <Portrait />;
    }
  };
}
export default Display;
