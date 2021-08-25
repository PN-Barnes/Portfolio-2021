import React from 'react';
import tierraAlta from './images/tierra-Alta-bw.png';
import pbPic from './images/PBPic4.jpg';
const borderStyle = {
  border: {
    borderRadius: '50%',
  },
};
export default function Portrait() {
  return (
    <div
      className="card container-lg portrait justify-content-center mt-6"
      id="portrait-container"
    >
      <img src={tierraAlta} className="card-img" id="tierraAlta" alt="" />
      <div className="card-img-overlay">
        <img
          className="img-fluid rounded mx-auto d-block img-thumbnail"
          src={pbPic}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          className="headshot"
          width="200px"
          height="300px"
          style={borderStyle.border}
          alt="portrait of me!"
        />
        <h2 className="h2 text-center">Hello World!</h2>
        <p className="h3 text-center">Paul Barnes</p>
        <p className="h3 text-center">FullStack Developer</p>
      </div>
    </div>
  );
}
