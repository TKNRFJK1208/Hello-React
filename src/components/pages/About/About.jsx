import React from 'react'
import "./About.scss"
import Footer from '../../Footer/Footer';

export default function About() {
  return (
    <>
      <div class="about" id="about">
        <h1>About</h1>
        <div class="flex">
          <div class="col-left">
            <img src="images/pf.jpg" class="pf-img" alt="profile" />
          </div>
          <div class="col-right">
            <h2>I am.</h2>
            <p>I'm Takanori, a front-end developer who loves design and coding. I've always enjoyed being creative and challenging myself by designing and building a website.</p>
            <h2>I work.</h2>
            <p>When I work on a project, I devote every bit of myself to it. I'm always punctual and a great team player. I never stop learning and keep improving with newly-learned skills.</p>
            <h2>I love.</h2>
            <p>I'm pretty happy as long as I code everyday and workout 3 times a week. Let me know if you have any troubles with web stuff. I will knock them out ASAP!</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) 
  ;
}