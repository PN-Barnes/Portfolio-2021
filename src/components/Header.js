import React from 'react';
import Bio from './Bio';
import Project from './Project';
import Portrait from './Portrait';

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

export default function Header() {
  return (
    <header>
      <nav
        className="navbar justify-content-center text-center mb-3"
        id="pageNav"
      >
        <ul className="nav justify-content-center nav-pills text-center">
          <li>
            <a
              className="nav-link h3"
              href="#bio"
              name="Bio"
              onClick={handleClick}
            >
              Bio
            </a>
          </li>
          <li>
            <a
              className="nav-link h3"
              href="#projects"
              name="Projects"
              onClick={handleClick}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="nav-link h3"
              href="#contactNav"
              name="Contact"
              onClick={handleClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
