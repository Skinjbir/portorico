import React, { useState } from 'react';
import Header from './Components/Hero/Hero';
import Announce from './Components/Announce/Announce';
import Screen from './Components/Hero/Screen';

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection(prev => (prev === section ? '' : section));
  };

  return (
    <div className='bigContainer'>
      <Announce />
      <Header 
        toggleWork={() => toggleSection('work')} 
        toggleTest={() => toggleSection('testimonials')} 
        toggleBlogs={() => toggleSection('blogs')} // ✅ make sure this is here
      />
      <Screen activeSection={activeSection} />
    </div>
  );
};

export default App;
