import React from 'react';
import './Booking.css'; // (we will create this small CSS)

function Booking() {
  return (
    <div className="bookingContainer">
      <h1 >Let's Book a Call 📅</h1>
      
      <iframe
        src="https://calendly.com/mohammedredatarmidi"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Booking Calendar"
        className="bookingIframe"
        allow="fullscreen"
      ></iframe>
    </div>
  );
}

export default Booking;
