import { useEffect, useRef } from "react";
import { init } from "ityped";
import './HeroSection.scss';

function HeroSection() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["HTML & CSS", "JavaScript", "PHP", "TypeScript", "React"],
    });
  }, []);

  return (
    <div className='hero-container'>
      <video src="/videos/video.mp4" autoPlay loop muted />
      <div className="text-contents">
        <h2>Hi there, I'm a fron-end developer</h2>
        <h1>Takanori Fujiki</h1>
        <p>I love coding with <span ref={textRef}></span></p>
      </div>
    </div>
  )
}

export default HeroSection
