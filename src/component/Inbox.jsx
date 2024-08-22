import React, { useState } from 'react';
import './Inbox.css';

function Inbox() {
  const [sortOrder, setSortOrder] = useState('Newest');

  const emails = [
    { email: "Beata@gmail.com", date: "2023-03-07", message: "I've tried alot", status: "Interested", campaign: "Campaign 1 ", indicatorColor: "blue" },
    { email: "Sanya@gmail.com", date: "2023-08-01", message: "I've have been working on it", status: "Closed", campaign: "Campaign 2", indicatorColor: "purple" },
    { email: "william@gmail.com", date: "2023-07-31", message: "Payment not going through", status: "Interested", campaign: "Campaign 3", indicatorColor: "green" },
    { email: "johnson@gmail.com", date: "2023-01-03", message: "Could you tell me more about it", status: "Meeting Booked", campaign: "Campaign 4", indicatorColor: "orange" },
  ];

  const sortedEmails = [...emails].sort((a, b) => {
    if (sortOrder === 'Newest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  return (
    <div className="inbox">
      <div className="header">
        <h1>All Inbox(s)</h1>
        <span>25/25 Inboxes selected</span>
      </div>
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="filter">
        <span>26 New Replies</span>
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>
      <div className="email-list">
        {sortedEmails.map((email, index) => (
          <div className="email-item" key={index}>
            <div className="email-indicator" style={{ backgroundColor: email.indicatorColor }}></div>
            <div className="email-details">
              <div className="email-header">
                <span className="email-address">{email.email}</span>
                <span className="email-date">{new Date(email.date).toLocaleDateString()}</span>
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
