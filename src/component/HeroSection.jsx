import React from 'react';
import './HeroSection.css';
import Inbox from './Inbox';
import HeaderSection from './HeaderSection';
import EmailComponent from './EmailComponent';
import MailViewer from './MailViewer';

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
       <MailViewer />
      {/* <div className="email-thread">
      <EmailComponent />
        </div> */}
      </div>
      <div className="footer">
      <p>hi</p>
      </div>
    </div>
  );
}

export default HeroSection;
