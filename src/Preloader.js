import React, { useState, useEffect } from 'react';
import './Preloader.css';
const Loader = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [images]);

  if (!images || images.length === 0) {
    return <div>No images</div>;
  }

  return (
    <div className="loader-container">
      <img src={images[currentImageIndex]} alt="Loader" />
    </div>
  );
};

export default Loader;
