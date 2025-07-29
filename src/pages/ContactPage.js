import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-form">
          <h2>Send us a message</h2>
          {/* Contact form will go here */}
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          {/* Contact info will go here */}
        </div>
      </div>
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        {/* FAQ accordion will go here */}
      </div>
    </div>
  );
};

export default ContactPage;
