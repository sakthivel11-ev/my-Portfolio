import React from 'react';
import passwordImg from '../assets/Password indicator.png';
import todoImg from '../assets/To-Do list.png';
import complainImg from '../assets/Complain Management.png'
import libraryImg from '../assets/Library Management.png';
import expenseTrackImg from '../assets/Expense-Tracker.png';

const projects = [
  {
    img: complainImg,
    title: 'Complain Management System',
    description:
      'A Complaint Management System with user and admin modules, enabling users to raise and track complaints while administrators assign officers, monitor progress, update statuses, and manage resolutions or rejections efficiently.'
  },
  {
    img:expenseTrackImg,
    title: 'Expense Tracker',
    description:
    'An Expense Tracker using HTML, CSS, and JavaScript with LocalStorage to manage income and expenses, calculate balances, categorize transactions, validate entries, and dynamically display financial summaries.'
  },
  {
    img: libraryImg,
    title: 'Library Management System',
    description:
      'a Library Management System with an admin dashboard to manage members and books, filter issued and returned books, and generate daily and monthly reports for efficient library operations.'
  },
  {
    img: passwordImg,
    title: 'Password Generator',
    description:
      'A password generator app creates strong and secure passwords to protect user accounts. It allows users to customize length and characters, ensuring better security against hacking.'
  },
  {
    img: todoImg,
    title: 'TO-DO App',
    description:
      'A to-do app helps users organize tasks and manage their daily activities efficiently. It allows adding, editing, and tracking tasks with reminders and deadlines.'
  }

];

const Projects = () => {
  return (
    <section id="projects">
      <h1>my projects</h1>
      <p>here are some projects i have developed using HTML, CSS, JavaScript and React.</p>

      <article>
        {projects.map((project) => (
          <div className="projectcard" key={project.title}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href="#" className="view-code">
              View Code
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </a>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Projects;
