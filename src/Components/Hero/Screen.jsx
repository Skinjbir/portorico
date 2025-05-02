import React from 'react';
import Work from '../Hero/Work/Work';
import Testemonials from '../Hero/Testemonials/Testemonials';
import BlogPosts from './Blogs/BlogPosts'; 
import './Screen.css';
import logo from '../../assets/vector.svg';
import Bio from './Bio/Bio';
import Booking from './Booking/Booking';


/**
 * Screen component renders different sections based on the activeSection prop.
 * It conditionally displays components such as Work, Testimonials, BlogPosts, Bio, or Booking.
 * If no activeSection is provided, it displays an empty state with a placeholder logo.
 *
 * @param {Object} props - The props object.
 * @param {string} props.activeSection - The currently active section to display.
 *                                        Possible values: 'work', 'testimonials', 'blogs', 'bio', 'booking'.
 *                                        If undefined or null, an empty state is shown.
 * @returns {JSX.Element} The rendered Screen component.
 */
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
