import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; myPortfolio. All Rights Reserved</p>
      <div className="icons">
        <a href="#" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22 6 12 13 2 6"></polyline>
          </svg>
        </a>
        <a href="#" aria-label="Website">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z"></path>
          </svg>
        </a>
        <a href="#" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
