import React, { useState, useEffect } from 'react';
import './homepage.css';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  
  const images = [
    "https://api.backlinko.com/app/uploads/2021/03/amazon-prime-user-and-revenue-statistics.png",
    "https://www.indifi.com/blog/wp-content/uploads/2019/12/Marketing-Hacks-for-Customer-Attraction-on-Amazon.png",
    "https://m.media-amazon.com/images/G/01/kindle/journeys/ODQyN2QzOTIt/ODQyN2QzOTIt-OGNkODc1NTEt._CB609868857_.png"
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="home-page">
      <div className="intro-text">
        <h1>Welcome to Our Product Website!</h1>
        <p>Explore our wide range of products and make the best choice for your needs.</p>
      </div>
      <div className="image-slider">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="slider-image"
        />
       
      </div>
    </div>
  );
};

export default HomePage;
