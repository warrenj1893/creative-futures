import React from 'react';
import './MoreAbout.css';

const MoreAbout = () => {
  return (
    <section className="more-about-section">
      <div className="more-about-grid">
        
        <div className="more-about-image">
          <img src="https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/de78dcb8-d369-429d-a9a1-d3034348375d/CF+Background+images-24.png?format=2500w" alt="Stylized Milwaukee Sculpture" />
        </div>

        <div className="more-about-content bg-red">
          <h2>MORE ABOUT CREATIVE FUTURES</h2>
          <p>Tell people about who you are, your origin, your process, or your inspirations. Tap into your creativity. You've got this. The way you tell your story online can make all the difference.</p>
        </div>

      </div>
    </section>
  );
};

export default MoreAbout;
