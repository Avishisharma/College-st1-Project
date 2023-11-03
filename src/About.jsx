import React from 'react';
import Common from './Common'; 
import web from '../src/images/spaceshuttle.jpeg'; 
const About = () => {
  return ( 
  <>
    <Common 
    name="This is Animated website Contact Page by" 
    imgsrc={web} 
    visit="/contact" 
    btname="Contact Now"/>
      </>
  );
}

export default About;