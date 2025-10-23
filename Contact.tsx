import React from 'react';

function Contact() {
  return (
    <section
      style={{
        padding: '3rem 1rem',
        textAlign: 'center',
        backgroundColor: '#111',
        color: '#e5e5e5',
      }}
    >
      <h2 style={{ fontSize: '1.6rem', color: '#22d3ee' }}>Contact Us</h2>

      <p style={{ marginTop: '1rem', fontSize: '1rem' }}>
        Phone: <strong>(555) 460-8778</strong>
      </p>
      <p>Email: <strong>jjautomotivetruckrepair@gmail.com</strong></p>
      <p>Location: Bay Shore, NY</p>
    </section>
  );
}

export default Contact;
