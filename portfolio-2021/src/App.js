/* eslint-disable jsx-a11y/anchor-has-content */
import './App.css';
import React from 'react';
import Header from './components/Header';
import Portrait from './components/Portrait';
import Bio from './components/Bio';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Portrait />
      <Bio />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
