import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Bio from './Bio';
import Project from './Project';
import Portrait from './Portrait';

function Display() {
  return (
    <Router>
      <header>
        <nav
          className="navbar justify-content-center text-center mb-3"
          id="pageNav"
        >
          <ul className="nav justify-content-center nav-pills text-center">
            <li>
              <Link className="nav-link h3" to="/" name="Home">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link h3" to="/bio" name="Bio">
                Bio
              </Link>
            </li>
            <li>
              <Link className="nav-link h3" to="/project" name="Projects">
                Projects
              </Link>
            </li>
            {/* <li>
              <Link className="nav-link h3" to="/contact" name="Contact">
                Contact
              </Link>
            </li> */}
          </ul>
          <Switch>
            <Route path="/bio">
              <Bio />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/">
              <Portrait />
            </Route>
            {/* <Route path="/contact">
          <Contact />
        </Route> */}
          </Switch>
        </nav>
      </header>
    </Router>
  );
}
export default Display;
