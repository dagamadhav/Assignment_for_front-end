import React from 'react';
import './HeaderSection.css';

function HeaderSection() {
    return (
        <div className="header-section">
            <div className="contact-info">
                <div className="contact-name">Orlando</div>
                <div className="contact-email">orlando@gmail.com</div>
            </div>
            <div className="actions">
                <div className="status-dropdown">
                    <span className="status-indicator" style={{ backgroundColor: 'yellow' }}></span>
                    <select className="status-select">
                        <option>Meeting Completed</option>
                        <option>Meeting Booked</option>
                        <option>Interested</option>
                        <option>Closed</option>
                    </select>
                </div>
                <button className="move-button">Move <span>&#9662;</span></button>
                <button className="more-options">&#8230;</button>
            </div>
        </div>
    );
}

export default HeaderSection;
