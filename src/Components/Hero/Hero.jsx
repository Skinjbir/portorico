import React from 'react';
import './Hero.css';
import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";
import { MdOutlineAlternateEmail } from "react-icons/md";

function Header({ toggleWork, toggleTest, toggleBlogs, toggleBio, toggleBooking }) {
  return (
    <div className='leftContainer'>
      <div>
      <p>
  Salam, I am 
  <span onClick={toggleBio} className="highlightLink"> Mohammed-Reda TARMIDI</span>.
</p>

<p>
  A passionate <span>Cloud & DevOps</span> Engineering Student at ENSA-Marrakech 🎓.
</p>

<p>
  Freelancing part-time, learning full-time, and occasionally winning at chess.  
  <span onClick={toggleTest} className="highlightLink"> Check the testimonials</span>.
</p>

<p>
  Want to see real action?
  <span onClick={toggleWork} className="highlightLink"> Explore my work</span>.
</p>

<p>
  Curious about my thoughts?
  <span onClick={toggleBlogs} className="highlightLink"> Check my writings and feed</span>.
</p>

<p>
  <span onClick={toggleBooking} className="highlightLink"> Let's connect! 🚀</span> — I'm just one message away.
</p>


        <div className="icons">
          <a href="https://www.linkedin.com/in/mtarmidi/" target="_blank" rel="noopener noreferrer">
            <TiSocialLinkedin className='icon'/>
          </a>
          <a href="https://github.com/Skinjbir" target="_blank" rel="noopener noreferrer">
            <TiSocialGithub className='icon'/>
          </a>
          <a href="mailto:mohammedredatarmidi@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdOutlineAlternateEmail className='icon'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
