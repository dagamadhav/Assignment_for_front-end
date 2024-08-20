import React from 'react';
import './RightSideBar.css';

function RightSideBar() {
    return (
        <div className="right-sidebar">
            <div className="section lead-details">
                <h2 className="section-title">Lead Details</h2>
                <div className="lead-info">
                    <div className="info-row">
                        <span className="info-label">Name</span>
                        <span className="info-value">Orlando</span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">Contact No</span>
                        <span className="info-value">+54-9062827869</span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">Email ID</span>
                        <span className="info-value">orlando@gmail.com</span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">LinkedIn</span>
                        <span className="info-value"><a href="https://linkedin.com/in/timvadde/">linkedin.com/in/timvadde/</a></span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">Company Name</span>
                        <span className="info-value">Reachinbox</span>
                    </div>
                </div>
            </div>

            <div className="section activities">
                <h2 className="section-title">Activities</h2>
                <div className="campaign-details">
                    <div className="campaign-name">Campaign Name</div>
                    <div className="campaign-steps">3 Steps | 5 Days in Sequence</div>
                </div>

                <div className="activity-steps">
                    <div className="step">
                        <div className="icon email-icon"></div>
                        <div className="step-details">
                            <span className="step-title">Step 1: Email</span>
                            <span className="step-date">Sent 3rd, Feb</span>
                        </div>
                    </div>
                    <div className="step">
                        <div className="icon email-open-icon"></div>
                        <div className="step-details">
                            <span className="step-title">Step 2: Email</span>
                            <span className="step-date">Opened 5th, Feb</span>
                        </div>
                    </div>
                    <div className="step">
                        <div className="icon email-open-icon"></div>
                        <div className="step-details">
                            <span className="step-title">Step 3: Email</span>
                            <span className="step-date">Opened 5th, Feb</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightSideBar;
