import React from 'react';
import SocialIcons from './SocialIcons';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#000',
        color: '#e5e5e5',
        textAlign: 'center',
        padding: '2rem 0',
        borderTop: '1px solid #22d3ee',
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <SocialIcons />
      </div>
      <p style={{ fontSize: '0.9rem', color: '#aaa' }}>
        © {new Date().getFullYear()} J & J’s Automotive Truck Repair. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
