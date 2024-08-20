import React from 'react';
import '../component/RightSideBar.css'

const LeadDetails = () => {
  const leadData = {
    name: 'Orlando',
    contactNo: '+54-9062827869',
    emailId: 'orlando@gmail.com',
    linkedin: 'linkedin.com/in/timvadde/',
    companyName: 'Reachinbox',
    campaignName: '3 Steps 5 Days in Sequence',
    steps: [
      { email: 'Sent 3rd, Feb' },
      { email: 'Opened 5th, Feb' },
      { email: 'Opened 5th, Feb' }
    ]
  };

  return (
    <div className="lead-details">
      <h2>Lead Details</h2>
      <div className="lead-info">
        <p>Name: {leadData.name}</p>
        <p>Contact No: {leadData.contactNo}</p>
        <p>Email ID: {leadData.emailId}</p>
        <p>Linkedin: {leadData.linkedin}</p>
        <p>Company Name: {leadData.companyName}</p>
      </div>
      <div className="activities">
        <h3>Activities</h3>
        <p>Campaign Name: {leadData.campaignName}</p>
        <p>3 Steps | 5 Days in Sequence</p>
        <ul>
          {leadData.steps.map((step, index) => (
            <li key={index}>
              Step {index + 1}: {step.email}
              {step.openedDate && <span> (Opened: {step.openedDate})</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeadDetails;