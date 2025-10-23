import React from 'react';

function AnimatedIcons() {
  const style = {
    margin: '0 10px',
    color: '#22d3ee',
    fontSize: '2rem',
    animation: 'pulse 1.5s infinite'
  };

  return (
    <div style={{ textAlign: 'center', padding: '1rem 0' }}>
      <span style={style}>⚙️</span>
      <span style={style}>🛞</span>
      <span style={style}>🧰</span>
    </div>
  );
}

export default AnimatedIcons;
