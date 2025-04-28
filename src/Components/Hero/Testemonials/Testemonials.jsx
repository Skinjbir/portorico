import React from 'react';
import './Testemonials.css';
import testimonials from '../../data/testemonials'; 

const Testemonials = ({ showTest }) => {
  if (!showTest) return null;

  return (
    <section className="testimonials-section">
      <h1>Client Testimonials</h1>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="feedback">"{testimonial.feedback}"</p>
            <p className="author"><strong>{testimonial.name}</strong>, {testimonial.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testemonials;
