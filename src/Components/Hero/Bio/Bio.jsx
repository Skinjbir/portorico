import React from 'react';
import './Bio.css';
import funnyImage from '../../../assets/funny.jpeg'; 

function Bio() {
  return (
      <div className="bio-content">
        <img src={funnyImage} alt="Funny Reda" className="funnyImage" />

        <div className="bio-text">
          
          {/* Fun Facts Section */}
          <section>
            <h2>Fun Facts About Me</h2>
            <ul className="funFacts">
              <li>🚀 I once broke production... but fixed it faster!</li>
              <li>☕ Coffee is my secret weapon.</li>
              <li>☁️♟️ Planning three moves ahead whether on the chessboard or in cloud architecture.</li>
            </ul>
          </section>

          {/* Certifications Section */}
          <section className="certifications">
            <h2>My Official Superpowers 🦸‍♂️ (a.k.a Bragging Rights 💬)</h2>
            <p>Here’s proof that I can break (and sometimes fix) Cloud infrastructure! 😎</p>

            <ul className="certList">
              <li>🪪 Microsoft Certified: Azure Administrator (AZ-104) — *Clouds officially obey me now*</li>

            </ul>

            <p className="comingSoon">🚀 Coming soon: Kubernetes conqueror (pray for my clusters 🤞)</p>
          </section>

          {/* Power Stats Section */}
          <section>
            <h2>Power Stats</h2>
            <div className="stats">
              <p>⚡ Coding: <strong>90%</strong></p>
              <p>🌩️ Cloud: <strong>85%</strong></p>
              <p>🐛 Debugging: <strong>70%</strong></p>
            </div>
          </section>

          {/* Quote Section */}
          <blockquote className="quote">
            "There is no place like 127.0.0.1"
          </blockquote>

        </div>
      </div>
  );
}

export default Bio;
