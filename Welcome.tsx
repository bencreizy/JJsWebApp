import React from 'react';

function Welcome() {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: '3rem 1rem',
        backgroundColor: '#111',
        color: '#e5e5e5',
      }}
    >
      <h2 style={{ fontSize: '1.8rem', color: '#22d3ee' }}>Welcome!</h2>
      <p style={{ marginTop: '1rem', fontSize: '1rem' }}>
        We provide expert automotive diagnostics and repair services for all heavy-duty trucks.
      </p>
    </section>
  );
}

export default Welcome;
