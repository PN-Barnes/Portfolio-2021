import React from 'react';

export default function WorkdayScheduler() {
  return (
    <section class="card col" id="workDay">
      <a
        class="card-link"
        href="https://pn-barnes.github.io/WorkDay-Scheduler/"
      >
        <h3 class="card-title text-center h3 text-decoration-none">
          Workday Scheduler
        </h3>
        <img
          class="img-fluid"
          src="./workdayScheduler.png"
          alt="screenshot of the workday Scheduler"
        />
      </a>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href="https://github.com/PN-Barnes/WorkDay-Scheduler">
              Github Repository
            </a>
          </li>
          <li class="list-group-item">
            <a href="https://pn-barnes.github.io/WorkDay-Scheduler/">
              Deployed Site
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
