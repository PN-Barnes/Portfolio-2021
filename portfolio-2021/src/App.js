/* eslint-disable jsx-a11y/anchor-has-content */
import './App.css';
import React from 'react';
import Header from './components/Header';
import Portrait from './components/Portrait';
import Bio from './components/Bio';
import Project from './components/Project';
function App() {
  return (
    <>
      <Header />
      <Portrait />
      <Bio />
      <Project />
      {/* <!-- BIO BACKGROUND AND SKILLS --> */}

      {/* <!-- PROJECTS --> */}

      <div class="row row-cols-1 row-cols-md-2 g-5">
        <section class="card col" id="passwordGenerator">
          <a
            class="card-link"
            href="https://pn-barnes.github.io/random-password-generator/"
          >
            <h3 class="card-title text-center h3 text-decoration-none">
              Password Generator
            </h3>
            <img
              class="img-fluid"
              src="assets/images/passwordGenerator.png"
              alt="screenshot of the password Generator"
            />
          </a>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a href="https://github.com/PN-Barnes/random-password-generator">
                  Github Repository
                </a>
              </li>
              <li class="list-group-item">
                <a href="https://pn-barnes.github.io/random-password-generator/">
                  Deployed Site
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      {/* contact Section */}
      <aside class="container-fluid" id="contact">
        <h2 class="text-center h2">Contact:</h2>
        <nav class="navbar justify-content-center" id="contactNav">
          <ul class="nav justify-content-center nav-pills">
            <li>
              <a class="nav-link" href="mailto: paulieb99@gmail.com">
                Email
              </a>
            </li>
            <li>
              <a class="nav-link" href="https://www.linkedin.com/feed/">
                LinkedIn
              </a>
            </li>
            <li>
              <a class="nav-link" href="https://github.com/PN-Barnes">
                Github
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <footer class="h5 justify-content-center text-center footer">
        <h3>Made with Bootstrap and Custom CSS</h3>
      </footer>
    </>
  );
}

export default App;
