import React from 'react';

function WidQuestions({ icon, title, text , href }) {
    return (
        <div className="single-contact-info">
            <div className="icon">
                <img src={icon} alt="" />
            </div>
            <div className="contact-info d-flex flex-column">
                <span>{title}</span>
                <a target='_blank' href={href}>{text}</a>
            </div>
        </div>
    );
}

export default WidQuestions;
