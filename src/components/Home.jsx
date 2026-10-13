import React from 'react';
import profileImg from '../assets/Sakthivel for resume.png';

const Home = () => {
  return (
    <main id="home">
      <div className="left">
        <h3>Hello,</h3>
        <h1>I'm <span>Sakthivel</span></h1>
        <h2>Java fullstack developer</h2>
        <p>
          Java Full Stack Developer builds complete web applications using Java, frontend technologies, databases, ensuring responsive design and efficient performance across systems.
        </p>
        <button type="button" className="btn-outline">
          hire me
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

      <div className="right">
        <div className="image-ring">
          <img src={profileImg} alt="Sakthivel" />
        </div>
      </div>
    </main>
  );
};

export default Home;
