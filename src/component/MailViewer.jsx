import React, { useEffect, useState } from 'react';
import './MailViewer.css';
import MailReply from './MailReply';

const MailViewer = () => {
  const [emails, setEmails] = useState([]);
  const [replyEmail, setReplyEmail] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiMjFidHJzZTAxNEBqYWludW5pdmVyc2l0eS5hYy5pbiIsImlkIjoxMDkzLCJmaXJzdE5hbWUiOiJNQURIQVYiLCJsYXN0TmFtZSI6IkRBR0EifSwiaWF0IjoxNzI0MTc1MDc5LCJleHAiOjE3NTU3MTEwNzl9.ShNbcbD04-9G_lZla2S9DtFvTUyHP_W8EI0m7azCK0g';
  
      try {
        const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch emails');
        }
  
        const result = await response.json();
        setEmails(result.data);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };
  
    fetchEmails();
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const handleReplyClick = (email) => {
    setReplyEmail(replyEmail ? null : email);
  };

  const closeReply = () => {
    setReplyEmail(null);
  };

  // Delete email function
  const handleDeleteClick = async (emailId, threadId) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiMjFidHJzZTAxNEBqYWludW5pdmVyc2l0eS5hYy5pbiIsImlkIjoxMDkzLCJmaXJzdE5hbWUiOiJNQURIQVYiLCJsYXN0TmFtZSI6IkRBR0EifSwiaWF0IjoxNzI0MTc1MDc5LCJleHAiOjE3NTU3MTEwNzl9.ShNbcbD04-9G_lZla2S9DtFvTUyHP_W8EI0m7azCK0g';
    const confirmDelete = window.confirm('Are you sure you want to delete this email?');
    
    if (!confirmDelete) return;

    try {
      const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete email');
      }

      // Remove the deleted email from the state
      setEmails(prevEmails => prevEmails.filter(email => email.id !== emailId));
      alert('Email deleted successfully.');
    } catch (err) {
      console.error('Error deleting email:', err);
      alert('Error deleting email: ' + err.message);
    }
  };

  return (
    <div className="mail-viewer">
      {emails.map((email, index) => {
        const showDate = index === 0 || formatDate(emails[index - 1].sentAt) !== formatDate(email.sentAt);
        const isSelected = replyEmail && replyEmail.id === email.id;

        return (
          <div key={email.id} className="email-container">
            {showDate && <div className="email-date">{formatDate(email.sentAt)}</div>}
            <div className="email-header">
              <div className="email-subject"><strong>Subject:</strong> {email.subject}</div>
              <div className="email-from"><strong>From:</strong> {email.fromName} ({email.fromEmail})</div>
              <div className="email-to"><strong>To:</strong> {email.toEmail}</div>
            </div>
            <div className="email-content" dangerouslySetInnerHTML={{ __html: email.body }}></div>
            <div className='email-actions'>
              <button 
                onClick={() => handleReplyClick(email)}
              >
                {isSelected ? 'Close' : 'Reply'}
              </button>
              <button 
                onClick={() => handleDeleteClick(email.id, email.threadId)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}

      {replyEmail && (
        <div className="overlay">
          <MailReply email={replyEmail} onClose={closeReply} />
        </div>
      )}
    </div>
  );
};

export default MailViewer;
