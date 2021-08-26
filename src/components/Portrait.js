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
      className="card container-fluid portrait justify-content-center mt-6"
      id="portrait-container"
    >
      <img
        src={tierraAlta}
        className="card-img img-fluid"
        id="tierraAlta"
        alt=""
      />
      <div className="card-img-overlay">
        <img
          className="img-fluid img-thumbnail tierra"
          src={pbPic}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          width="200px"
          height="200px"
          style={borderStyle.border}
          alt="portrait of me!"
        />
        <h1 className="h1 text-center hello">Hello World!</h1>
        <h1 className="h1 text-center paul">Paul Barnes</h1>
        <h1 className="h1 text-center fullstack">FullStack Developer</h1>
      </div>
    </div>
  );
}
