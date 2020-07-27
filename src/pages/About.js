import React from 'react';
import logo from './logo.svg';
import './About.css';

export default function About() {
  return (
    <div className="About">
      <header>
        <img src={logo} className="Page-logo" alt="logo" />
        <p>
          About
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
