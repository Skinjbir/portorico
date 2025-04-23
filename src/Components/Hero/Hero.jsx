import React from 'react';
import './Hero.css';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialAtCircular } from "react-icons/ti";
import { MdOutlineAlternateEmail } from "react-icons/md";


function Header({ toggleWork, toggleTest }) {
  return (
    <div className='leftContainer'>
      <div>
        <p>Salam, I am <span>Mohammed-Reda TARMIDI</span> !</p>
        <p>A <span>Cloud & DevOps</span> Engineering Student at ENSA-M.</p>
        
        <p>
          A part-time freelancer. Take a look at some
          <span onClick={toggleTest} style={{ cursor: 'pointer' }}> testimonials</span>
        </p>

        <p>
          Take a look at my 
          <span onClick={toggleWork} style={{ cursor: 'pointer' }}> work</span>
        </p>

        <p>Get my <span>Resume</span></p>
        <p><span id='touch'>Get in touch</span></p>

        <div className="icons">
          <TiSocialLinkedin className='icon'/>
          <TiSocialGithub className='icon'/>
          <MdOutlineAlternateEmail className='icon'/>
        </div>
      </div>
    </div>
  );
}

export default Header;
