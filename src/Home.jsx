import React from 'react';
import Common from './Common'; 
import web from '../src/images/images1.jpeg'; 

const Home = () => {
  return ( 
  <>
    <Common 
        name="This is Animated website Home Page by" 
        imgsrc={web} 
        visit="/contact" 
        btname="Get Started"
        />
    
  </>
  );
}

export default Home;