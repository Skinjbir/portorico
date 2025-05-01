import React, { useState } from 'react';
import Header from './Components/Hero/Hero';
import Announce from './Components/Announce/Announce';
import Screen from './Components/Hero/Screen';

/**
 * The App component serves as the main entry point for the application.
 * It manages the state of the currently active section and provides
 * functionality to toggle between different sections of the app.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 *
 * @example
 * <App />
 *
 * State:
 * - `activeSection` {string}: Tracks the currently active section. 
 *   Possible values include 'work', 'testimonials', 'blogs', 'bio', 'booking', or an empty string for no active section.
 *
 * Functions:
 * - `toggleSection(section: string): void`: Toggles the active section. 
 *   If the provided section is already active, it deactivates it; otherwise, it sets it as active.
 *
 * Child Components:
 * - `Announce`: A component for displaying announcements.
 * - `Header`: A component that provides navigation options and triggers section toggling.
 * - `Screen`: A component that displays content based on the currently active section.
 *
 * Props passed to `Header`:
 * - `toggleWork`: Function to toggle the 'work' section.
 * - `toggleTest`: Function to toggle the 'testimonials' section.
 * - `toggleBlogs`: Function to toggle the 'blogs' section.
 * - `toggleBio`: Function to toggle the 'bio' section.
 * - `toggleBooking`: Function to toggle the 'booking' section.
 */
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
        toggleBlogs={() => toggleSection('blogs')} 
        toggleBio={() => toggleSection('bio')} 
        toggleBooking={() => toggleSection('booking')}
        />

      <Screen activeSection={activeSection} />
    </div>
  );
};

export default App;
