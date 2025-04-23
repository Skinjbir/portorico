import React from 'react';
import './Testemonials.css'; // Optional: for styling

const Testemonials = ({ showTest }) => {
  if (!showTest) return null;

  const testimonials = [
    {
      name: "Fortune Vierra",
      title: "Project Manager at HPS",
      feedback: "Mohammed-Reda was a pleasure to work with. His ability to take initiative and drive results was impressive.",
    },
    {
      name: "Amina R.",
      title: "Azure Cloud Consultant",
      feedback: "His skills in DevOps and cloud migration are top-notch. He delivered a scalable solution ahead of deadline.",
    },
    {
      name: "Carlos M.",
      title: "Freelance Client",
      feedback: "Efficient, professional, and always available to solve issues quickly. Highly recommend!",
    },
    {
        name: "Carlos M.",
        title: "Freelance Client",
        feedback: "Efficient, professional, and always available to solve issues quickly. Highly recommend!",
      }
  ];

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
