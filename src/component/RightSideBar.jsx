import React from 'react';
import './RightSideBar.css';

function RightSideBar() {
    return (
        <div className="right-sidebar">
            <div className="lead-details">
                <h2 className="section-title">Lead Details</h2>
                <span className='span1'>Name: Orlando</span><br />
                <span className='span1'>Contact No: +54-9062827869</span><br />
                <span className='span1'>Email ID: orlando@gmail.com</span><br />
                <span className='span1'>LinkedIn: <a href="https://linkedin.com/in/timvadde/">linkedin.com/in/timvadde/</a></span><br />
                <span className='span1'>Company Name: Reachinbox</span><br />
            </div>

            <div className="activities">
                <h2 className="section-title">Activities</h2>
                <div className="campaign-name">
                    <p><strong>Campaign Name</strong></p>
                    <p>3 Steps | 5 Days in Sequence</p>
                </div>

                <div className="step">
                    <div className="icon email-icon"></div>
                    <div className="step-details">
                        <p>Step 1: Email</p>
                        <p className="step-date">Sent 3rd, Feb</p>
                    </div>
                </div>

                <div className="step">
                    <div className="icon open-icon"></div>
                    <div className="step-details">
                        <p>Step 2: Email</p>
                        <p className="step-date">Opened 5th, Feb</p>
                    </div>
                </div>

                <div className="step">
                    <div className="icon open-icon"></div>
                    <div className="step-details">
                        <p>Step 3: Email</p>
                        <p className="step-date">Opened 5th, Feb</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightSideBar;
