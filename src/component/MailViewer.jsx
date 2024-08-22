
import React, { useEffect, useState } from 'react';
import './MailViewer.css';
import MailReply from './MailReply';

const MailViewer = () => {
  const [emails, setEmails] = useState([]);
  const [replyEmail, setReplyEmail] = useState(null);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiMjFidHJzZTAxNEBqYWludW5pdmVyc2l0eS5hYy5pbiIsImlkIjoxMDkzLCJmaXJzdE5hbWUiOiJNQURIQVYiLCJsYXN0TmFtZSI6IkRBR0EifSwiaWF0IjoxNzI0MTc1MDc5LCJleHAiOjE3NTU3MTEwNzl9.ShNbcbD04-9G_lZla2S9DtFvTUyHP_W8EI0m7azCK0g';

  useEffect(() => {
    fetchEmails();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'r') {
        event.preventDefault(); // Prevent default browser behavior
        openReplyWindow();
      }
      if (event.ctrlKey && event.key === 'd') {
        event.preventDefault(); // Prevent default browser behavior
        deleteFirstEmail();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [emails]);

  const fetchEmails = async () => {
    try {
      const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
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

  const handleDeleteClick = async (emailId, threadId) => {
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
  
      setEmails(prevEmails => prevEmails.filter(email => email.id !== emailId));
    } catch (err) {
      console.error('Error deleting email:', err);
      alert('Error deleting email: ' + err.message);
    }
  };

  const handleResetEmails = async () => {
    try {
      const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/reset', {
        method: 'GET', 
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to reset emails');
      }

      fetchEmails(); 
    } catch (error) {
      console.error('Error resetting emails:', error);
      alert('Error resetting emails: ' + error.message);
    }
  };

  const deleteFirstEmail = async () => {
    if (emails.length > 0) {
      const firstEmail = emails[0];
      await handleDeleteClick(firstEmail.id, firstEmail.threadId);
    } else {
      alert('No emails available to delete.');
    }
  };

  const openReplyWindow = () => {
    if (emails.length > 0) {
      const firstEmail = emails[0];
      setReplyEmail(replyEmail ? null : firstEmail);
    } else {
      alert('No emails available to reply to.');
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
              <button className='button-rep' onClick={() => handleReplyClick(email)}>
                {isSelected ? 'Close' : 'Reply'}
              </button>
              <button 
                onClick={() => handleDeleteClick(email.id, email.threadId)} 
                className="button-rep"
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

      <div className="reset-emails-container">
        <button className="reset-button" onClick={handleResetEmails}>
          Reset Mails
        </button>
      </div>
    </div>
  );
};

export default MailViewer;
