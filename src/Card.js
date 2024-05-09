import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const Card = ({ member, index, currentSlide, totalSlides }) => (
  <div className={`card ${index === currentSlide - 1 || (currentSlide === 0 && index === totalSlides - 1) ? 'prev-card' : index === currentSlide + 1 || (currentSlide === totalSlides - 1 && index === 0) ? 'next-card' : ''}`}>
    <img src={`$images/img${index + 1}.jpg`} alt={`Image ${index + 1}`} />
    <div>
      <h3>{member.name}</h3>
      <h5>{member.position}</h5>
      <a href={member.facebook} target="_self" rel="noopener noreferrer" className="facebook-icon"><FaFacebook /></a>
    </div>
  </div>
);

export default Card;