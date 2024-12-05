import React, { useState } from 'react';
import Header from './Components/Hero/Hero';
import Work from './Components/Hero/Work/Work';
import Announce from './Components/Announce/Announce';

const App = () => {
  const [showWork, setShowWork] = useState(false); // State to control Work visibility

  const toggleWork = () => {
    setShowWork(prevShowWork => !prevShowWork); // Toggles the visibility state
  };

  return (
    <div className='bigContainer'>
      <Announce />
      <Header toggleWork={toggleWork} /> {/* Pass toggle function to Header */}
      <Work showWork={showWork} /> {/* Pass visibility state to Work */}
      
    </div>
  );
};

export default App;
