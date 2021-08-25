import React from 'react';
import tierraAlta from './images/tierra-Alta-bw.png';
import pbPic from './images/PBPic4.jpg';
export default function Portrait() {
  return (
    <div
      class="card row row-cols-1 container-xl portrait justify-content-center"
      id="portrait-container"
    >
      <img src={tierraAlta} class="card-img" id="tierraAlta" alt="" />
      <div class="card-img-overlay container-fluid mb-5 mt-5 col">
        <img
          class="
            img-fluid
            rounded
            mx-auto
            d-block
            img-thumbnail
            overflow-hidden
          "
          src={pbPic}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          class="headshot"
          width="200px"
          height="300px"
          alt="portrait of me!"
        />
        <h2 class="h2 text-center">Hello World!</h2>
        <p class="h3 text-center">Paul Barnes</p>
        <p class="h3 text-center">FullStack Developer</p>
      </div>
    </div>
  );
}
