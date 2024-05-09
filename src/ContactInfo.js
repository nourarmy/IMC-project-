import React from 'react';
import './ContactInfo.css';
import logo from './components/img/logo.png'; 

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-section">
        <h2 className="titleee">Contact Us</h2>
        <h2>
          <span style={{ color: '#EF5225' }}>ISAMM</span>{' '}
          <span style={{ color: '#7EB941' }}>Microsoft</span>{' '}
          <span style={{ color: '#FCB712' }}>Club</span>
        </h2>
        
        <div className="logo-containerr">
          <img src={logo} alt="ISAMM Microsoft Club Logo" className="club-logo" />
        </div>

        <div className="info-item">
          <a href='https://www.google.com/maps/place/Manouba+University/@36.8157035,10.0591193,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd2d972d7a581d:0x1c27a72d26da3522!8m2!3d36.8157035!4d10.0616942!16s%2Fm%2F0j_400p?entry=ttu'>
            <i className="fas fa-map-marker-alt" style={{ fontSize: '30px' }}></i>
            <i style={{ fontSize: '20px' }}> ISAMM, Campus Universitaire de la Manouba</i>
          </a>
        </div>

        <div className="info-item">
          <a href="mailto:hi.imc2011@gmail.com">
            <i className="fas fa-envelope" style={{ fontSize: '30px' }}></i>
            <i style={{ fontSize: '20px' }}>  hi.imc2011@gmail.com</i>
          </a>
        </div>

        <div className="info-item">
          <a href="https://www.facebook.com/IsammMicrosoftClub">
            <i className="fab fa-facebook" style={{ fontSize: '30px' }}></i>
            <i style={{ fontSize: '20px' }}> Facebook</i>
          </a>
        </div>

        <div className="info-item">
          <a href="https://www.instagram.com/isamm_microsoft_club/?hl=en">
            <i className="fab fa-instagram" style={{ fontSize: '30px'}}></i>
            <i style={{ fontSize: '20px' }}>Instagram</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
