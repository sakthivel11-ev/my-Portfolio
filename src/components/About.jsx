import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h1>what i do</h1>
      <p>
        I am a skilled and passionate Java Full Stack Developer building scalable, efficient, secure, and user-friendly web applications.
      </p>

      <div className="card">
        <div className="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        </div>
        <div>
          <h2>web designer</h2>
          <p>
            Experienced in web design and frontend development using HTML, CSS, JavaScript, and React. Skilled in creating responsive, user-friendly interfaces, reusable components, interactive web pages, and dynamic layouts, with a focus on clean design, cross-device compatibility, and smooth user experiences.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 010 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
        </div>
        <div>
          <h2>Java Programming</h2>
          <p>
           Experienced in Java development with knowledge of JDBC, Servlets, Hibernate, JPA, and Spring Boot. Skilled in database connectivity, CRUD operations, object-relational mapping, REST API development, and backend application development, with a strong understanding of object-oriented programming and database management for building efficient, scalable applications.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 5V19C21 20.66 16.97 22 12 22C7.03 22 3 20.66 3 19V5"></path>
            <path d="M21 12C21 13.66 16.97 15 12 15C7.03 15 3 13.66 3 12"></path>
          </svg>
        </div>
        <div>
          <h2>Database Skills</h2>
          <p>
            Experienced in SQL with strong knowledge of MySQL and Oracle databases, proficient in writing complex queries, joins, and optimization. Skilled in designing efficient schemas, managing data, and building reliable database-driven applications through practical project experience.
          </p>
        </div>
      </div>

      <div className="about-cta">
        <a href="#projects" className="btn-outline">view my projects</a>
      </div>
    </section>
  );
};

export default About;
