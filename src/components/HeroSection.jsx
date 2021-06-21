import React from 'react';
import '../App.scss';
import './HeroSection.scss';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWATS</h1>
      <p>What are you waiting for?</p>
    </div>
  )
}

export default HeroSection
