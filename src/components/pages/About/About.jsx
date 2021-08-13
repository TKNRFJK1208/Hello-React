import React from 'react'
import "./About.scss"
import Icon from '../../Icon/Icon';
import Footer from '../../Footer/Footer';

export default function About() {
  return (
    <>
      <div className="about" id="about">
        <h1>About Me</h1>
        <div className="pf-box">
          <div className="col-left">
            <img src="images/about/pf.jpg" className="pf-img" alt="profile" />
          </div>
          <div className="col-right">
            <h3>- Who I am -</h3>
            <p>I'm <b>Takanori Fujiki</b>, a front-end developer who loves design and coding. I've always enjoyed being creative and challenging myself by designing and building a website.</p>
            <h3>- Why I work -</h3>
            <p>When I work on a project, I devote every bit of myself to it. I'm always punctual and a great team player. I never stop learning and keep improving with newly-learned skills.</p>
            <h3>- What I love -</h3>
            <p>I'm pretty happy as long as I code everyday and workout 3 times a week. Let me know if you have any troubles with web stuff. I will knock them out ASAP!</p>
          </div>
        </div>
        <h2>Skill Lists</h2>
        <ul>
          <li className="skill_list">JavaScript</li>
          <li className="skill_list">HTML 5&amp;(S)CSS</li>
          <li className="skill_list">React &amp; Redux</li>
          <li className="skill_list">TypeScript</li>
          <li className="skill_list">GitHub</li>
          <li className="skill_list">WordPress</li>
          <li className="skill_list">Firebase</li>
          <li className="skill_list">jQuery</li>
        </ul>
      </div>
      <Icon />
      <Footer />
    </>
  ) 
  ;
}