import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-left">
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
      </ul>

      <h1 className="logo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        Sakthivel <span>&lt;Dev&gt;</span>
      </h1>

      <ul className="nav-right">
        <li><a href="#projects">projects</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
