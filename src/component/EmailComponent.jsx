import React from 'react';
import './EmailComponent.css'; 

const EmailComponent = ({ date, title, from, to, content }) => {
  return (
    <div className="email-container">
      <div className="email-date">
        <span>{date}</span>
        <span className="email-time">20 June 2022 : 9:16AM</span>
      </div>
      <div className="email-content">
        <div className="email-header">
          <h3>{title}</h3>
          <p>from : {from}</p>
          <p>to : {to}</p>
        </div>
        <div className="email-body">
          <p>{content}</p>
        </div>
      </div>
      <div className="email-reply">
        <button className="reply-button">Reply</button>
      </div>
    </div>
  );
};

export default EmailComponent;
