import React from 'react';
import './HeroSection.scss';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h2>Hi there, I'm a fron-end developer</h2>
      <h1>Taknori Fujiki</h1>
      <p>I love coding with</p>
    </div>
  )
}

export default HeroSection
