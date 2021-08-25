import React from 'react';

function backgroundCard() {
  return (
    <article class="card col text-center background">
      <div class="card-body">
        <h2 class="card-title">Background:</h2>
        <p class="card-text lh-sm">
          My name is Paul Barnes. I am a 22 year old FullStack Developer from
          Sacramento, California. I have traveled to multiple states for work
          related purposes and am now looking to settle for a position located
          within my home state of California.
        </p>
      </div>
      <img
        src="./assets/images/Sacramento_Tower_Bridge_1920x1080.jpg"
        class="card-img-bottom"
        alt="Sacramento tower bridge"
      />
    </article>
  );
}
export default backgroundCard;
