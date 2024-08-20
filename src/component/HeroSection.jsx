import React from 'react';
import './HeroSection.css';
import Inbox from './Inbox';


function HeroSection() {
  return (
    <div className="app">
      <div className="email-content">
        <Inbox />
      </div>
      <div className="header">
        <p>hi</p>
      </div>
      <div className="main-content">
      <p>hi</p>
        <div className="email-thread">
        <p>hi</p>
        </div>
      </div>
      <div className="footer">
      <p>hi</p>
      </div>
    </div>
  );
}

export default HeroSection;
