import React, { useState } from 'react';
import Header from './Components/Hero/Hero';
import Announce from './Components/Announce/Announce';
import Screen from './Components/Hero/Screen';

const App = () => {
  const [activeSection, setActiveSection] = useState(''); // 'work' or 'testimonials'

  const toggleSection = (section) => {
    setActiveSection(prev => (prev === section ? '' : section));
  };

  return (
    <div>

      <div className='bigContainer'>
        <Announce />
        <Header 
          toggleWork={() => toggleSection('work')} 
          toggleTest={() => toggleSection('testimonials')} 
        />
        <Screen activeSection={activeSection} /> {/* Pass state down */}
      </div>
    </div>
  );
};

export default App;
