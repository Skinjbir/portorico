import React from 'react';
import Work from '../Hero/Work/Work';
import Testemonials from '../Hero/Testemonials/Testemonials';
import './Screen.css';
import logo from '../../assets/vector.svg';

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
      
      {!activeSection && (
        <div className="emptyState">
          <img src={logo} alt="Placeholder" className="logo" />
        </div>
      )}
    </div>
  );
}

export default Screen;
