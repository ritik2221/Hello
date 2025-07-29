import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="hero-banner">
        <h1>About Us</h1>
        <p>Our story and our mission.</p>
      </div>
      <div className="timeline">
        <h2>Our Journey</h2>
        {/* Timeline content will go here */}
      </div>
      <div className="team">
        <h2>Our Team</h2>
        {/* Team photos will go here */}
      </div>
    </div>
  );
};

export default AboutPage;
