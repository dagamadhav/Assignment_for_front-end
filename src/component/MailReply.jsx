import React, { useState } from 'react';
import './MailReply.css';

const MailReply = ({ email, onClose }) => {
  const [to, setTo] = useState(email.fromEmail || '');
  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState(`Re: ${email.subject}`);
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ to, from, subject, body });
  };

  return (
    <div className="mail-reply-overlay">
      <div className="mail-reply-container">
        <button className="close-button" onClick={onClose}>X</button>
        <form className="mail-reply-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="to">To:</label>
            <input
              type="email"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Recipient's email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">From:</label>
            <input
              type="email"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject of the email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default MailReply;
