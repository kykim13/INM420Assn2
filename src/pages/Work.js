import React from 'react';
import logo from './logo.svg';
import './Work.css';

export default function Work() {
  return (
    <div className="Work">
      <header>
        <img src={logo} className="Page-logo" alt="logo" />
        <p>
          Work
        </p>
        <a
          className="Page-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
