import React from 'react';
import "./css/AboutUs.css";
import aboutUsImage from './img/aboutus.png'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="image-container">
        <img src={aboutUsImage} alt='team' />
      </div>
      <div className="text-container">
        <h2>Embark on this Adventure with Us</h2>
        <p><i>
          Welcome to the <span style={{ color: '#2779aa' }}>ISAMM Microsoft Club </span>, your gateway to a world of technology, innovation, and career growth.
          We are a vibrant community of passionate tech enthusiasts and aspiring professionals dedicated to exploring
          the vast realm of Microsoft technologies. Through engaging workshops, exciting competitions,
          and personalized career development services, we services for learning, collaboration,
          and skill enhancement. Join us on this exciting journey where dreams transform into digital realities.
          Embrace the future of technology with <span style={{ color: '#2779aa' }}>ISAMM Microsoft Club</span> where we are driven by passion!
          </i> </p>
      </div>
    </div>
  );
};

export default AboutUs;
