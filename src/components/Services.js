
import React, { useState } from 'react';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import Icon1 from './img/i1.png';
import Icon2 from './img/i2.png';
import Icon3 from './img/i3.png';


import './css/services.css';

const Services = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const services = [
      { title: 'Technical Workshops', description: 'IMC organizes hands-on technical workshops led by expert instructors, offering participants immersive learning experiences in diverse fields.', icon: Icon1  },
      { title: 'Consulting Services', description: 'Our consulting services provide tailored solutions to businesses, leveraging cutting-edge technologies and industry best practices.', icon: Icon2 },
      { title: 'Training Programs', description: 'We offer comprehensive training programs designed to empower individuals and organizations with the skills and knowledge needed to succeed in today\'s competitive landscape.', icon: Icon3 },
      // Add more services with their respective SVG icons
    ];
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '20%',
      focusOnSelect: true,
      initialSlide: 1,
      beforeChange: (current, next) => setCurrentSlide(next),
      nextArrow: <NextArrow className="next-arrow" />,
      prevArrow: <PrevArrow className="prev-arrow" />
    };
    
  
    return (
      <div className="services">
      <div className="services-container">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index}>
              <div className={`card1 ${index === currentSlide - 1 || (currentSlide === 0 && index === services.length - 1) ? 'prev-card1' : index === currentSlide + 1 || (currentSlide === services.length - 1 && index === 0) ? 'next-card1' : ''}`}>
                <div className="icon-container">
                  <img src={service.icon} alt={service.title} className="icon-img" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    );
  };


export default Services;