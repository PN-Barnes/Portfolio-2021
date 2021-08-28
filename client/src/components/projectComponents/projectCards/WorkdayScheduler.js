import React from 'react';
import WorkPic from './ProjectImages/workdayScheduler.png';

export default function WorkdayScheduler() {
  return (
    <section className="card col" id="workDay">
      <a
        className="card-link"
        href="https://pn-barnes.github.io/WorkDay-Scheduler/"
      >
        <h3 className="card-title text-center h3 text-decoration-none">
          Workday Scheduler
        </h3>
        <img
          className="img-fluid"
          src={WorkPic}
          alt="screenshot of the workday Scheduler"
        />
      </a>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark">
            <a href="https://github.com/PN-Barnes/WorkDay-Scheduler">
              Github Repository
            </a>
          </li>
          <li className="list-group-item bg-dark">
            <a href="https://pn-barnes.github.io/WorkDay-Scheduler/">
              Deployed Site
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
