import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Bio from './Bio';
import Project from './Project';
import Portrait from './Portrait';

export default function Header() {
  return (
    <header>
      <nav
        className="navbar justify-content-center text-center mb-3"
        id="pageNav"
      >
        <ul className="nav justify-content-center nav-pills text-center">
          <li>
            <a className="nav-link h3" href="#bio" name="Bio">
              Bio
            </a>
          </li>
          <li>
            <a className="nav-link h3" href="#projects" name="Projects">
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link h3" href="#contactNav" name="Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
