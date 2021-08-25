import React from 'react';
import Tower from './bioImages/Sacramento_Tower_Bridge_1920x1080.jpg';

function BackgroundCard() {
  return (
    <article className="card col text-center background">
      <div className="card-body">
        <h2 className="card-title">Background:</h2>
        <p className="card-text lh-sm">
          My name is Paul Barnes. I am a 22 year old FullStack Developer from
          Sacramento, California. I have traveled to multiple states for work
          related purposes and am now looking to settle for a position located
          within my home state of California.
        </p>
      </div>
      <img
        src={Tower}
        className="card-img-bottom"
        alt="Sacramento tower bridge"
      />
    </article>
  );
}
export default BackgroundCard;
