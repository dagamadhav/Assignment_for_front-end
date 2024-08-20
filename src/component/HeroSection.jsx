import React from 'react';
import './HeroSection.css';
import Inbox from './Inbox';
import HeaderSection from './HeaderSection';

function HeroSection() {
  return (
    <div className="app">
      <div className="email-content">
        <Inbox />
      </div>
      <div className="header">
        <HeaderSection />
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
