import React from 'react';
import './Inbox.css';

function Inbox() {
  const emails = [
    { email: "Beata@gmail.com", date: "Mar 7", message: "I've tried a lot and .", status: "Interested", campaign: "Campaign Name", indicatorColor: "blue" },
    { email: "Sanya@gmail.com", date: "Mar 7", message: "I've tried a lot and .", status: "Closed", campaign: "Campaign Name", indicatorColor: "purple" },
    { email: "william@gmail.com", date: "Mar 7", message: "Payment not going through", status: "Interested", campaign: "Campaign Name", indicatorColor: "green" },
    { email: "johnson@gmail.com", date: "Mar 7", message: "Could you tell me more about it", status: "Meeting Booked", campaign: "Campaign Name", indicatorColor: "orange" },
    { email: "orlando@gmail.com", date: "18:30", message: "Hi, I am interested", status: "Meeting Completed", campaign: "Campaign Name", indicatorColor: "yellow" },
  ];

  return (
    <div className="inbox">
      <div className="header">
        <h1>All Inbox(s)</h1>
        <span>25/25 Inboxes selected</span>
      </div>
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="filter">
        <span>26 New Replies</span>
        <select>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>
      <div className="email-list">
        {emails.map((email, index) => (
          <div className="email-item" key={index}>
            <div className="email-indicator" style={{ backgroundColor: email.indicatorColor }}></div>
            <div className="email-details">
              <div className="email-header">
                <span className="email-address">{email.email}</span>
                <span className="email-date">{email.date}</span>
              </div>
              <div className="email-message">{email.message}</div>
              <div className="email-footer">
                <span className={`status ${email.status.toLowerCase().replace(/\s+/g, '-')}`}>{email.status}</span>
                <span className="campaign">{email.campaign}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inbox;
