import React from 'react';
import Work from '../Hero/Work/Work';
import Testemonials from '../Hero/Testemonials/Testemonials';
import BlogPosts from './Blogs/BlogPosts'; // Correct import
import './Screen.css';
import logo from '../../assets/vector.svg';
import Bio from './Bio/Bio';
import Booking from './Booking/Booking';


function Screen({ activeSection }) {
  return (
    <div className="rightContainer">
      {activeSection === 'work' && (
        <div className="sectionFade">
          <Work />
        </div>
      )}

      {activeSection === 'testimonials' && (
        <div className="sectionFade">
          <Testemonials showTest />
        </div>
      )}

      {activeSection === 'blogs' && (
        <div className="sectionFade">
          <BlogPosts showPosts />
        </div>
      )}

        {activeSection === 'bio' && (
        <div className="sectionFade">
          <Bio />
        </div>
      )}

      {activeSection === 'booking' && (
        <div className="sectionFade">
          <Booking />
        </div>
      )}

      
      {!activeSection && (
        <div className="emptyState">
          <img src={logo} alt="Placeholder" className="logo" />
        </div>
      )}
    </div>
  );
}

export default Screen;
