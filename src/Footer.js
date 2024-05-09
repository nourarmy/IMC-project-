import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from './components/img/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2><span style={{ color: '#EF5225' }}>ISAMM</span>{' '}
          <span style={{ color: '#7EB941' }}>Microsoft</span>{' '}
          <span style={{ color: '#FCB712' }}>Club</span></h2>
        <p>IMC ~ Driven By passion</p>
        <img src={logo} alt="IMC Logo" className="footer-logo" />
      </div>
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://www.google.com/maps/place/Manouba+University/@36.8157035,10.0591193,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd2d972d7a581d:0x1c27a72d26da3522!8m2!3d36.8157035!4d10.0616942!16s%2Fm%2F0j_400p?entry=ttu">
            <FaMapMarkerAlt />
          </a> |{' '}
          <a href="mailto:hi.imc2011@gmail.com">
            <FaEnvelope />
          </a> |{' '}
          <a href="https://www.facebook.com/IsammMicrosoftClub">
            <FaFacebook />
          </a> |{' '}
          <a href="https://www.instagram.com/isamm_microsoft_club/?hl=en">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-rights">
          <p>Designed By IMC</p>
          <p>© Copyright SA dev. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
