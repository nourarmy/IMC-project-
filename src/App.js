import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Team from './components/Team'
import ContactPage from './components/ContactPage';
import './App.css';
import Footer from './Footer';
import Preloader from './Preloader';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Home from './components/Home';
import Event from './components/Event';

function App() {
  const images = [
    '/images/logo1.png',
    '/images/logo2.png',
    '/images/logo3.png',
    '/images/logo4.png',
    '/images/logo5.png'
  ];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Preloader images={images} />
      ) : (
        <div className="App">
          <Home />
          <h1 className="title">About Us</h1>
          <div className="line1"></div>
          <AboutUs /> 
          <h1 className="title">Services</h1>
          <div className="line2"></div>
          <Services />
          <h1 className="title">Events</h1>
          <div className="line2"></div>
          <Event />
          <h1 className="title">Meet Our Team</h1>
          <div className="line2"></div>
          <Team /> 
          <div className='app-bg'>
            <ContactPage /> 
            <Footer /> 
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
