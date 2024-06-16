import React from 'react';
import Carousel from '../components/Carousel';
import Shop from '../components/Shop';
import './Home.css';
import TopPicks from '../components/TopPicks';
import Features from '../components/Features';
import caro from '../components/caro.png';
import caro2 from '../components/caro2.jpg';
import caro3 from '../components/caro3.png';



const Home = () => {
  const images = [
    { url: caro, alt: 'Image 1' },
    { url: caro2, alt: 'Image 2' },
    { url: caro3, alt: 'Image 3' },

    // Add more images as needed
  ];

  return (
    
      <div className="home">
       
       <Carousel images={images} />
        <Shop />
        <TopPicks />
        <Features />
      </div>
    
  );
};

export default Home;
     
